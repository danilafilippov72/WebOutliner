﻿import { ObjectMethodBox } from "../../ObjectMethodBox/ObjectMethodBox";
import { ObjectMethodsText } from "../../ObjectMethodsText/ObjectMethodsText";
import { OutlineHor } from "../../OutlineHor/OutlineHor";

export class MethodsNode {

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
            };

            public static gridTemplate: string = ' "a b" 5% "c d" 1fr / 10% 90% ';
            public static Display: "none" | "block" | "grid" = "grid";
            public static gridTemplateColumns: string /* = "10% 90%" */;
            public static gridArea /* = [1,1] */;


            //#region Hidden
            public static ApplyImage(element: HTMLDivElement) {
                if (Image.Border?.Margin != null) {
                    if ((Image.Border.Margin as {
                        left: number;
                        right: number;
                        bottom: number;
                        top: number;
                    })?.left != null) {
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





                if (Image.Border?.width != null) element.style.width = (typeof Image.Border.width == typeof String ? Image.Border.width as string : (Image.Border?.width + "px"));
                if (Image.Border?.minWidth != null) element.style.minWidth = (typeof Image.Border.minWidth == typeof String ? Image.Border.minWidth as string : (Image.Border?.minWidth + "px"));
                if (Image.Border?.maxWidth != null) element.style.maxWidth = (typeof Image.Border.maxWidth == typeof String ? Image.Border.maxWidth as string : (Image.Border?.maxWidth + "px"));
                if (Image.Border?.height != null) element.style.height = (typeof Image.Border.height == typeof String ? Image.Border.height as string : (Image.Border?.height + "px"));
                if (Image.Border?.minHeight != null) element.style.minHeight = (typeof Image.Border.minHeight == typeof String ? Image.Border.minHeight as string : (Image.Border?.minHeight + "px"));
                if (Image.Border?.maxHeight != null) element.style.maxHeight = (typeof Image.Border.maxHeight == typeof String ? Image.Border.maxHeight as string : (Image.Border?.maxHeight + "px"));

                if (Image.Border?.borderWidth != null) {
                    if ((Image.Border.borderWidth as {
                        left: number;
                        right: number;
                        bottom: number;
                        top: number;
                    })?.left != null) {
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
                    if ((Image.Border.padding as {
                        left: number;
                        right: number;
                        bottom: number;
                        top: number;
                    })?.left != null) {
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
                if (Image?.gridArea != null) {
                    if (typeof Image.gridArea == "string")
                        element.style.gridArea = Image.gridArea as string;
                    else
                        element.style.gridArea = Image.gridArea[0] + "/" + Image.gridArea[1];
                }
                if (Image?.gridTemplate != null) element.style.gridTemplate = Image.gridTemplate;
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
            public static Initialize(Information) {
                InformationHandler[Information.ObjectReference].Initialize(Information.Method);
                InformationHandler.MouseHandler.Initialize(Information);
            }

            public static MouseHandler = class MouseHandler {
                public static Initialize(Method) {
                    MouseHandler[Method].CurrentMethod.Run();
                }

                public static HoverIn = class HoverIn {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run() {
                            if (CurrentMethod.Response) HoverIn.OtherMethods[CurrentMethod.MethodIndex]();
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function () {

                        } */
                    ];
                }
                public static HoverOut = class HoverOut {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run() {
                            if (CurrentMethod.Response) HoverOut.OtherMethods[CurrentMethod.MethodIndex]();
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function () {

                        } */
                    ];
                }
                public static HoverOver = class HoverOver {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run() {
                            if (CurrentMethod.Response) HoverOver.OtherMethods[CurrentMethod.MethodIndex]();
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function () {

                        } */
                    ];
                }
                public static LeftClick = class LeftClick {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run() {
                            if (CurrentMethod.Response) LeftClick.OtherMethods[CurrentMethod.MethodIndex]();
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function () {

                        } */
                    ];
                }
                public static LeftClickHolding = class LeftClickHolding {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run() {
                            if (CurrentMethod.Response) LeftClickHolding.OtherMethods[CurrentMethod.MethodIndex]();
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function () {

                        } */
                    ];
                }

            }

            //#region Hidden
            public static ExtensionLackListeners() {
                document.body.addEventListener("Outline", function (event: CustomEvent) { InformationHandler.Initialize(event.detail) });
                Object.values(MethodsNode.Elements).forEach(childElement => childElement.Methods.InformationHandler.ExtensionLackListeners());
            }
            //#endregion Hidden
        };

        public static async Create(count: number): Promise<[HTMLDivElement, number]> {
            var count = count;
            //#region ExtensionInterface
            let object = document.createElement("div");
            object.setAttribute("Identificator", count.toString());
            object.setAttribute("InstanceIdentificator", MethodsNode.InstanceIdentificator);
            object = MethodsNode.Form.Image.ApplyImage(object);
            if (MethodsNode.Form.Image?.Text != null) object.appendChild(document.createTextNode(MethodsNode.Form.Image.Text));
            
            const array = Object.values(MethodsNode.Elements);
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                
            }
            
            Object.values(MethodsNode.Elements).forEach(async childElement => {
                const t = await (childElement as MethodsNode).Methods.Create(count + 1);
                const child = t[0];
                const countAdd = t[1];
                object.appendChild(child);
                console.log(count)
                count += countAdd;
                console.log(count)
            });
            //#endregion ExtensionInterface
            return [object, count];
        }
    }

    public static Elements = class Elements {
        public static ObjectMethodsText = ObjectMethodsText;
        public static ObjectMethodBox = ObjectMethodBox;
        /* public static OutlineHor = OutlineHor; */
    }

    public static References = class References { }

    public static Identificator: string = this.name;
    public static InstanceIdentificator: string = MethodsNode.name;

    //#region Hidden
    //#region ExtensionInterfaceLackInstanceReferenceOnStatic
    public Image = MethodsNode.Form;
    public Methods = MethodsNode.Methods;
    public Elements = MethodsNode.Elements;
    public References = MethodsNode.References;
    //#endregion
    //#endregion Hidden
}

