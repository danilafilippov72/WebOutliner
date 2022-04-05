import { Element } from "../../../../../../../../../../../../../Element/Element";
import { MethodsNode } from "../../../../../MethodsNode/MethodsNode";
import { ObjectNode } from "../../../../ObjectNode/ObjectNode";

export class Document {

    public static Form = class Form {
        public static Position: [number, number, ...any];

        public static Image = class Image {

            public static Text: string;

            public static Border: {
                Margin?: {
                    left: number;
                    right: number;
                    bottom: number;
                    top: number;
                } | number | [number, number];
                width?: number | string;
                minWidth?: number | string;
                maxWidth?: number | string;
                height?: number | string;
                minHeight?: number | string;
                maxHeight?: number | string;
                boxSizing?: "border-box";
                borderWidth?: {
                    left: number;
                    right: number;
                    bottom: number;
                    top: number;
                } | number | [number, number];
                borderType?: {
                    left: "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
                    right: "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
                    bottom: "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
                    top: "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset";
                } | "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | ["none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset", "none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset"]
                /* = {

                } */;
                borderRadius?: number;
                borderColor?: string;
                backgroundColor?: string,
                padding?: {
                    left: number;
                    right: number;
                    bottom: number;
                    top: number;
                } | number | [number, number];
            } = {
                    width: "100%",
                    padding: 10,
                    /* height: "1000px", */
                    backgroundColor: "black"
                };

            public static Display: "none" | "block" | "grid" /* = "grid" */;

            public static Positioning: "left" | "center" /* = "center"; */
            public static position: "none" | "relative" /* = "relative" */;
            public static positionOffset: {
                left: number | string;
                top: number | string;
            };;

            public static gridTemplate: [...any];/* = ["a b b b c",  "d e e e f", "d g h i f", "d j j j f", "k l l l m"]; */
            public static gridRowsWidth: [...any]; /* = [0, "auto", "auto", "auto", "auto"]; */
            public static gridColumnsWidth: [...any]; /* = ["auto", "auto", "auto", "auto", "auto"];; */

            public static gridTemplateColumns: string /* = "1fr 1fr" */;
            public static gridArea /* = [1,1] */;


            //#region Hidden
            public static ApplyImage(element: HTMLDivElement) {
                if (Image.Border?.Margin != null) {
                    if (Image.Border.Margin as {
                        left: number;
                        right: number;
                        bottom: number;
                        top: number;
                    }) {
                        const margin = Image.Border.Margin as {
                            left: number;
                            right: number;
                            bottom: number;
                            top: number;
                        };
                        element.style.marginLeft = margin.left + "px";
                        element.style.marginRight = margin.right + "px";
                        element.style.marginBottom = margin.bottom + "px";
                        element.style.marginTop = margin.top + "px";
                    }
                    else element.style.margin = Image.Border.Margin + "px";
                }





                if (Image.Border?.width != null) element.style.width = (typeof Image.Border.width == "string" ? (Image.Border.width as string) : (Image.Border.width + "px"));
                if (Image.Border?.minWidth != null) element.style.minWidth = (typeof Image.Border.minWidth == "string" ? Image.Border.minWidth as string : (Image.Border?.minWidth + "px"));
                if (Image.Border?.maxWidth != null) element.style.maxWidth = (typeof Image.Border.maxWidth == "string" ? Image.Border.maxWidth as string : (Image.Border?.maxWidth + "px"));
                if (Image.Border?.height != null) element.style.height = (typeof Image.Border.height == "string" ? Image.Border.height as string : (Image.Border?.height + "px"));
                if (Image.Border?.minHeight != null) element.style.minHeight = (typeof Image.Border.minHeight == "string" ? Image.Border.minHeight as string : (Image.Border?.minHeight + "px"));
                if (Image.Border?.maxHeight != null) element.style.maxHeight = (typeof Image.Border.maxHeight == "string" ? Image.Border.maxHeight as string : (Image.Border?.maxHeight + "px"));

                if (Image.Border?.borderWidth != null) {
                    if (Image.Border.borderWidth as {
                        left: number;
                        right: number;
                        bottom: number;
                        top: number;
                    }) {
                        const borderWidth = Image.Border.borderWidth as {
                            left: number;
                            right: number;
                            bottom: number;
                            top: number;
                        };
                        element.style.borderLeftWidth = borderWidth.left + "px";
                        element.style.borderRightWidth = borderWidth.right + "px";
                        element.style.borderBottomWidth = borderWidth.bottom + "px";
                        element.style.borderTopWidth = borderWidth.top + "px";
                    }
                    else element.style.borderWidth = Image.Border.borderWidth + "px";
                }

                if (Image.Border?.borderType != null) element.style.borderStyle = Image.Border.borderType as string;
                if (Image.Border?.borderRadius != null) element.style.borderRadius = Image.Border.borderRadius + "px";
                if (Image.Border?.borderColor != null) element.style.borderColor = Image.Border.borderColor;
                if (Image.Border?.backgroundColor != null) element.style.backgroundColor = Image.Border.backgroundColor;

                if (Image.Border?.padding != null) {
                    if (Image.Border.padding as {
                        left: number;
                        right: number;
                        bottom: number;
                        top: number;
                    }) {
                        const padding = Image.Border.padding as {
                            left: number;
                            right: number;
                            bottom: number;
                            top: number;
                        };
                        element.style.paddingLeft = padding.left + "px";
                        element.style.paddingRight = padding.right + "px";
                        element.style.paddingBottom = padding.bottom + "px";
                        element.style.paddingTop = padding.top + "px";
                    }
                    else element.style.padding = Image.Border.padding + "px";
                }

                if (Image?.Display != null) element.style.display = Image.Display;
                if (Image?.gridTemplateColumns != null) element.style.gridTemplateColumns = Image.gridTemplateColumns;
                if (Image?.gridArea != null) element.style.gridArea = Image.gridArea[0] + "/" + Image.gridArea[1];
                if (Image?.position != null) {
                    element.style.position = Image.position;
                    if (Image?.positionOffset != null) {
                        element.style.left = (typeof Image.positionOffset.left == "string" ? Image.positionOffset.left as string : (Image.positionOffset.left + "px"));
                        element.style.top = (typeof Image.positionOffset.top == "string" ? Image.positionOffset.top as string : (Image.positionOffset.top + "px"));
                    }
                }

                if (Image?.Positioning != null) {
                    element.style.position = Image.position;
                    if (Image?.positionOffset != null) {
                        element.style.left = (typeof Image.positionOffset.left == "string" ? Image.positionOffset.left as string : (Image.positionOffset.left + "px"));
                        element.style.top = (typeof Image.positionOffset.top == "string" ? Image.positionOffset.top as string : (Image.positionOffset.top + "px"));
                    }
                }
                return element;
            }
            //#endregion
        };

        public static States = [];
        public static Dependencies = [];

        public static StatesTimeInformation = [];
    };

    public static Methods = class Methods {
        public static InformationHandler = class InformationHandler {
            public static Initialize(Information: {
                ObjectReference: string,
                Method: string,
                properties?: any,
                Identificator: string
            }) {
                InformationHandler[Information.ObjectReference].Initialize(Information);
            }

            public static MouseHandler = class MouseHandler {
                public static async Initialize(Information) {
                    MouseHandler[Information.Method].CurrentMethod.Run(Information);
                }

                public static HoverIn = class HoverIn {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Information) {
                            if (CurrentMethod.Response) HoverIn.OtherMethods[CurrentMethod.MethodIndex](Information.properties, Information.Identificator);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (event: MouseEvent, Identificator) {
                            document.elementFromPoint(event.x, event.y).dispatchEvent(new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "HoverIn",
                                    Identificator: Identificator
                                }
                            }));
                        }
                    ];
                }
                public static HoverOut = class HoverOut {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Information) {
                            if (CurrentMethod.Response) HoverOut.OtherMethods[CurrentMethod.MethodIndex](Information.properties, Information.Identificator);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (event: MouseEvent, Identificator) {
                            document.elementFromPoint(event.x, event.y).dispatchEvent(new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "HoverOut",
                                    Identificator: Identificator
                                }
                            }));
                        }
                    ];
                }
                public static HoverOver = class HoverOver {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Information) {
                            if (CurrentMethod.Response) HoverOver.OtherMethods[CurrentMethod.MethodIndex](Information.properties, Information.Identificator);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (event: MouseEvent, Identificator) {
                            document.elementFromPoint(event.x, event.y).dispatchEvent(new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "HoverOver",
                                    Identificator: Identificator
                                }
                            }));
                        }
                    ];
                }
                public static Move = class Move {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run(Information) {
                            if (CurrentMethod.Response) Move.OtherMethods[CurrentMethod.MethodIndex](Information.properties, Information.Identificator);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (event: MouseEvent, Identificator) {
                            document.elementFromPoint(event.x, event.y).dispatchEvent(new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "Move",
                                    Identificator: Identificator,
                                    Properties: {
                                        Coordinates: { x: event.x, y: event.y }
                                    }
                                }
                            }));
                        }
                    ];
                }
                public static LeftClick = class LeftClick {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run(Information) {
                            if (CurrentMethod.Response) LeftClick.OtherMethods[CurrentMethod.MethodIndex](Information.properties, Information.Identificator);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (event: MouseEvent, Identificator) {
                            console.log(document.elementFromPoint(event.x, event.y), new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "LeftClick",
                                    Identificator: Identificator
                                }
                            }))
                            document.elementFromPoint(event.x, event.y).dispatchEvent(new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "LeftClick",
                                    Identificator: Identificator
                                }
                            }));
                        }
                    ];
                }
                public static LeftClickHolding = class LeftClickHolding {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run(Information) {
                            if (CurrentMethod.Response) LeftClickHolding.OtherMethods[CurrentMethod.MethodIndex](Information.properties, Information.Identificator);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (event: MouseEvent, Identificator) {
                            document.elementFromPoint(event.x, event.y).dispatchEvent(new CustomEvent('Outline', {
                                detail: {
                                    ObjectReference: "MouseHandler",
                                    Method: "LeftClickHolding",
                                    Identificator: Identificator,
                                    Properties: {
                                        Coordinates: { x: event.x, y: event.y }
                                    }
                                }
                            }));
                        }
                    ];
                }

            }
        };

        public static async Create(): Promise<HTMLDivElement> {
            global.count += 1;
            Document.Identificator = global.count.toString();
            if (Document.InstanceIdentificator == null) Document.InstanceIdentificator = count.toString();
            //#region ExtensionInterface
            let object = document.createElement("div");

            object.setAttribute("Identificator", global.count.toString());
            object.setAttribute("InstanceIdentificator", Document.InstanceIdentificator);

            object = Document.Form.Image.ApplyImage(object);

            if (Document.Form.Image.Text != null) object.appendChild(document.createTextNode(Document.Form.Image.Text));

            Object.values(Document.Elements).forEach(async childElement =>
                object.appendChild(await (childElement as Document).Methods.Create()));
            //#endregion ExtensionInterface
            return object;
        }

        public static async Init() {
            global.count = 1;
            document.body.append(await Document.Methods.Create());

            document.body.style.pointerEvents = "all";
            document.body.onmousedown = (event: Event) => Mouse.onEvent(event, Mouse.eventTypes.onMouseDown);
            document.body.onmouseup = (event: Event) => Mouse.onEvent(event, Mouse.eventTypes.onMouseUp);

            document.body.onmouseenter = (ev) => Document.Methods.InformationHandler.Initialize({
                ObjectReference: "MouseHandler",
                Method: "HoverIn",
                properties: ev,
                Identificator: (event.target as HTMLDivElement).getAttribute('identificator')
            });/*  MouseHandler.HoverIn.CurrentMethod.Run(Information.Identificator, Information.Properties); */
            document.body.onmouseleave = (ev) => Document.Methods.InformationHandler.Initialize({
                ObjectReference: "MouseHandler",
                Method: "HoverOut",
                properties: ev,
                Identificator: (event.target as HTMLDivElement).getAttribute('identificator')
            });/*  MouseHandler.HoverOut.CurrentMethod.Run(Information.Identificator, Information.Properties); */

            document.body.onmousemove = (ev) => Document.Methods.InformationHandler.Initialize({
                ObjectReference: "MouseHandler",
                Method: "Move",
                properties: ev,
                Identificator: (event.target as HTMLDivElement).getAttribute('identificator')
            });

            document.body.onmouseover = (ev) => Document.Methods.InformationHandler.Initialize({
                ObjectReference: "MouseHandler",
                Method: "HoverOver",
                properties: ev,
                Identificator: (event.target as HTMLDivElement).getAttribute('identificator')
            });

            class Mouse {
                public static eventTypes = { onMouseDown: "onMouseDown", onMouseUp: "onMouseUp", onMouseIn: "onMouseIn" }
                private static isActiveListener = true;

                private static onMouseTypes = { first: "first", second: "second", none: "none" };

                private static onMouseDown: string = Mouse.onMouseTypes.first;
                private static setOnMouseDown(onMouseDown: string) { this.onMouseDown = onMouseDown; }

                private static onMouseUp: string = Mouse.onMouseTypes.first;
                private static setNextOnMouseUp(onMouseUp: string) { this.onMouseUp = onMouseUp; }

                private static isHolding = false;

                private static event: Event;
                private static timeout = setTimeout(() => { }, 100);

                private static setTimeOut(event: Event, timeInMs: number, afterTimingFunction: (event: Event) => void) {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => afterTimingFunction(this.event), timeInMs);
                }

                static onEvent(event: Event, mouseEvent: typeof Mouse.eventTypes[keyof typeof Mouse.eventTypes]  /* type typesOf<T> = T[keyof T]; */) {
                    if (this.isActiveListener == true) {
                        this.event = event;
                        switch (mouseEvent) {
                            case this.eventTypes.onMouseDown: {
                                switch (this.onMouseDown) {
                                    case this.onMouseTypes.first: {

                                        this.setOnMouseDown(this.onMouseTypes.second);
                                        this.setTimeOut(this.event, 200, () => {
                                            this.isHolding = true;
                                            this.setOnMouseDown(this.onMouseTypes.first);
                                            this.setNextOnMouseUp(this.onMouseTypes.first);
                                            console.log(this.event)
                                            Document.Methods.InformationHandler.Initialize({
                                                ObjectReference: "MouseHandler",
                                                Method: "LeftClickHolding",
                                                properties: this.event,
                                                Identificator: (this.event.target as HTMLDivElement).getAttribute('identificator')
                                            });
                                            /* MouseHandler.LeftClickHolding.CurrentMethod.Run(event); */
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
                                                    /* Mouse.Element.Methods.StopMoving(Mouse.Element) */;
                                        } else {
                                            this.setNextOnMouseUp(this.onMouseTypes.second);
                                            this.setTimeOut(this.event, /* Mouse.LeftDoubleClick.LeftDoubleClickDelay */ 0, (event) => {
                                                this.setOnMouseDown(this.onMouseTypes.first);
                                                this.setNextOnMouseUp(this.onMouseTypes.first);
                                                Document.Methods.InformationHandler.Initialize({
                                                    ObjectReference: "MouseHandler",
                                                    Method: "LeftClick",
                                                    properties: event,
                                                    Identificator: (event.target as HTMLDivElement).getAttribute('identificator')
                                                });
                                                /* MouseHandler.LeftClick.CurrentMethod.Run(event); */

                                            });
                                        }

                                    } break;
                                    case this.onMouseTypes.second: {

                                        clearTimeout(this.timeout);
                                        /* Mouse.LeftDoubleClick.Run(Information.Identificator, Information.Properties); */
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


            Document.Elements.ObjectNode.Methods.InformationHandler.ExtensionLackListeners();
        };
    }

    public static Elements = class Elements {
        public static ObjectNode = ObjectNode;
    }

    public static References = class References { }

    public static Identificator: string;
    public static InstanceIdentificator: string;

    //#region Hidden
    //#region ExtensionInterfaceLackInstanceReferenceOnStatic
    public Image = Document.Form;
    public Methods = Document.Methods;
    public Elements = Document.Elements;
    public References = Document.References;
    //#endregion
    //#endregion Hidden
}



declare global {
    var count: number;
    var search: typeof Search;
}


class Search{
    public static is = false;
    public static FindObjectByIdentificator(Identificator, object = Document): typeof Document  {
        Search.is = 
        Object.values(object.Elements).forEach((childObject, index) => {
            console.log(Identificator, (childObject as typeof Document).name, (childObject as typeof Document).Identificator);
            if ((childObject as typeof Document).Identificator == Identificator)
                return object
            else if ((childObject as typeof Document).Identificator)
                return this.FindObjectByIdentificator(Identificator, childObject)
        });
        console.error("NOT FOUND")
        return Document
    }
}


globalThis.search = Search


Document.Methods.Init();


document.body.style.backgroundColor = "#000000";
