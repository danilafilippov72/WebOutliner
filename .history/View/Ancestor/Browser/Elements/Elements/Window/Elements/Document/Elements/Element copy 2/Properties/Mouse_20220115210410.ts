import { Element } from "../Element";

export class Mouse {
    public static HoverIn: (Element: Element) => void = (element) => {
        console.log("HoverIN");
     };
    public static HoverOut: (Element: Element) => void = (element) => { };

    public static LeftClick: (Element: Element) => void = (element) => { };
    /* private static LeftClickHandler(element) { 
        Mouse.Element.References.InstanceElements. = Mouse.LeftClick;
    }; */

    
    public static LeftClickHoldingDelay: number;
    public static LeftClickHolding: (Element: Element) => void = (element) => { };
    
    public static LeftDoubleClickDelay: number;
    public static LeftDoubleClick: (Element: Element) => void = (element) => { };

    public static LeftDoubleClickHoldingDelay: number;
    public static LeftDoubleClickHolding: (Element: Element) => void = (element) => { };

    //#region Hidden
    public static Element: Element;
    public static async Initialize() {
        
        (await Mouse.Element.References.Elements).forEach(element => {
            element.Properties.Style.Events = "all";
            element.Properties.htmlElement.onmousedown = (event: Event) => GlobalMouseEvent.onEvent(event, GlobalMouseEvent.eventTypes.onMouseDown);
            element.Properties.htmlElement.onmouseup = (event: Event) => GlobalMouseEvent.onEvent(event, GlobalMouseEvent.eventTypes.onMouseUp);
            element.Properties.htmlElement.onmousemove = (event: Event) =>
                element.Properties.Position.RelativeToWindow.state.Moving.Move(
                    {
                        HeightOffset: (event as MouseEvent).clientY,
                        WidthOffset: (event as MouseEvent).clientX
                    }
                );
            element.Properties.htmlElement.onmouseenter = () => Mouse.HoverIn(element);
            element.Properties.htmlElement.onmouseleave = () => Mouse.HoverOut(element);
        });

        class GlobalMouseEvent {
            static async MouseEventHandler(MouseEventHandler: typeof Listeners.MouseEventHandler) {
                const structureElements = await Listeners.Document.Methods.getStructureElementsByClass(MouseEventHandler.structureElementClass);
                structureElements.forEach(element => {
                    element.Properties.Style.Events = "all";
                    element.Properties.htmlElement.onmousedown = (event: Event) => GlobalMouseEvent.onEvent(event, GlobalMouseEvent.eventTypes.onMouseDown);
                    element.Properties.htmlElement.onmouseup = (event: Event) => GlobalMouseEvent.onEvent(event, GlobalMouseEvent.eventTypes.onMouseUp);
                    element.Properties.htmlElement.onmousemove = (event: Event) =>
                        element.Properties.Position.RelativeToWindow.state.Moving.Move(
                            {
                                HeightOffset: (event as MouseEvent).clientY,
                                WidthOffset: (event as MouseEvent).clientX
                            }
                        );
                    element.Properties.htmlElement.onmouseenter = (event: Event) => MouseEventHandler.MouseOverIn(
                        Listeners.Document.Methods.findStructureElementByItsAttribute(
                            this.event,
                            new Listeners.Document.Elements.Element.Properties.HTMLElementAttributes.Class(Listeners.MouseEventHandler.structureElementClass)
                        )
                    );
                    element.Properties.htmlElement.onmouseleave = (event: Event) => MouseEventHandler.MouseOverOut(
                        Listeners.Document.Methods.findStructureElementByItsAttribute(
                            this.event,
                            new Listeners.Document.Elements.Element.Properties.HTMLElementAttributes.Class(Listeners.MouseEventHandler.structureElementClass)
                        )
                    );
                });
            }
    
            public static eventTypes = { onMouseDown: "onMouseDown", onMouseUp: "onMouseUp", onMouseIn: "onMouseIn" }
            private static isActiveListener = true;
            private static turnOnListeners() { this.isActiveListener = true; }
            private static turnOffListeners() { this.isActiveListener = false; }
    
            private static onMouseTypes = { first: "first", second: "second", none: "none" };
    
            private static onMouseDown: string = GlobalMouseEvent.onMouseTypes.first;
            private static setOnMouseDown(onMouseDown: string) { this.onMouseDown = onMouseDown; }
    
            private static onMouseUp: string = GlobalMouseEvent.onMouseTypes.first;
            private static setNextOnMouseUp(onMouseUp: string) { this.onMouseUp = onMouseUp; }
    
            private static isHolding = false;
    
    
            private static event: Event;
            private static timeout = setTimeout(() => { }, 100);
    
            private static setTimeOut(event: Event, timeInMs: number, afterTimingFunction: (event: Event) => void) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => afterTimingFunction(this.event), timeInMs);
            }
    
            type typesOf<T> = T[keyof T];
            static onEvent(event: Event, mouseEvent: typesOf<typeof GlobalMouseEvent.eventTypes>) {
                if (this.isActiveListener == true) {
                    this.event = event;
                    switch (mouseEvent) {
                        case this.eventTypes.onMouseDown: {
                            switch (this.onMouseDown) {
                                case this.onMouseTypes.first: {
    
                                    this.setOnMouseDown(this.onMouseTypes.second);
                                    this.setTimeOut(this.event, Mouse.LeftClickHoldingDelay, () => {
                                        this.isHolding = true;
                                        this.setOnMouseDown(this.onMouseTypes.first);
                                        this.setNextOnMouseUp(this.onMouseTypes.first);
                                        Mouse.LeftClickHolding(
                                            Mouse.Element.References.Document.Methods.findStructureElementByItsAttribute(
                                                this.event,
                                                new Mouse.Element.References.Document.Elements.Element.Properties.HTMLElementAttributes.Class(Listeners.MouseEventHandler.structureElementClass)
                                            )
                                        );
                                    });
                                } break;
                                case this.onMouseTypes.second: {
    
                                    clearTimeout(this.timeout);
                                    this.setOnMouseDown(this.onMouseTypes.first);
    
                                } break;
                            }
    
                        } break;
                        case this.eventTypes.onMouseUp: {
                            switch (this.onMouseUp) {
                                case this.onMouseTypes.first: {
    
                                    clearTimeout(this.timeout);
                                    if (this.isHolding) {
                                        this.isHolding = false;
                                        Mouse.Element.References.Document.Methods.findStructureElementByItsAttribute(
                                            this.event,
                                            new Mouse.Element.References.Document.Elements.Element.Properties.HTMLElementAttributes.Class(Listeners.MouseEventHandler.structureElementClass)
                                        ).Properties.Position.RelativeToWindow.state.Moving.StopMoving();
                                    } else {
                                        this.setNextOnMouseUp(this.onMouseTypes.second);
                                        this.setTimeOut(this.event, Mouse.LeftDoubleClickDelay, (event) => {
                                            this.setOnMouseDown(this.onMouseTypes.first);
                                            this.setNextOnMouseUp(this.onMouseTypes.first);
                                            Mouse.LeftClick(
                                                Mouse.Element.References.Document.Methods.findStructureElementByItsAttribute(
                                                    this.event,
                                                    new Mouse.Element.References.Document.Elements.Element.Properties.HTMLElementAttributes.Class(Listeners.MouseEventHandler.structureElementClass)
                                                )
                                            );
    
                                        });
                                    }
    
                                } break;
                                case this.onMouseTypes.second: {
    
                                    clearTimeout(this.timeout);
                                    Mouse.LeftDoubleClick(
                                        Mouse.Element.References.Document.Methods.findStructureElementByItsAttribute(
                                            this.event,
                                            new Mouse.Element.References.Document.Elements.Element.Properties.HTMLElementAttributes.Class(Listeners.MouseEventHandler.structureElementClass)
                                        )
                                    );
                                    this.setNextOnMouseUp(this.onMouseTypes.first);
    
                                } break;
                                case this.onMouseTypes.none: {
    
                                    clearTimeout(this.timeout);
                                    this.setNextOnMouseUp(this.onMouseTypes.first);
    
                                } break;
                            }
    
                        } break;
                    }
                }
            }
    
        }
    
        if (Listeners.MouseEventHandler) {
            console.log("Listeners");
            GlobalMouseEvent.MouseEventHandler(Listeners.MouseEventHandler);
        }
    }
    
    //#endregion
}