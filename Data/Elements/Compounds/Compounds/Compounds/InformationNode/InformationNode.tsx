import { InformationBox } from "../../InformationBox/InformationBox";
import { InformationBoxText } from "../../InformationBoxText/InformationBoxText";
import { OutlineHor } from "../Compounds/Compounds/Compounds/Compounds/OutlineHor/OutlineHor";

export class InformationNode {

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
                padding: {
                    left: 0,
                    right: 10,
                    bottom: 10,
                    top: 10
                },
            };

            public static Display: "none" | "block" | "grid" = "grid";
            public static Positioning: {
                row: "start" | "center" | "end",
                column: "start" | "center" | "end"
            } = {
                    row: "start",
                    column: "center"
                };
            public static position: "none" | "relative" /* = "relative" */;
            public static positionOffset: {
                left: number | string;
                top: number | string;
            };

            public static gridTemplate: string = '"a b" fit-content(1px) "c d" 1fr / 30px 1fr';

            public static gridTemplateColumns: string /* = "1fr 1fr" */;
            public static gridArea /* = [1,1] */ = "d";


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
                if (Image?.gridTemplate != null) element.style.gridTemplate = Image.gridTemplate;
                if (Image?.gridArea != null) {
                    if (typeof Image.gridArea == "string") {
                        const st = (Image.gridArea as string);
                        element.style.gridArea = st + "/" + st + "/" + st + "/" + st;
                    }
                    else
                        element.style.gridArea = Image.gridArea[0] + "/" + Image.gridArea[1];
                }
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
            public static Initialize(Information) {
                InformationHandler[Information.ObjectReference].Initialize(Information);
            }

            public static MouseHandler = class MouseHandler {
                public static Initialize(Information) {
                    MouseHandler[Information.Method].CurrentMethod.Run(Information.Identificator, Information.Properties);
                }

                public static HoverIn = class HoverIn {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) HoverIn.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function (Identificator, Properties) {
 
                        } */
                    ];
                }
                public static HoverOut = class HoverOut {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) HoverOut.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function (Identificator, Properties) {
 
                        } */
                    ];
                }
                public static HoverOver = class HoverOver {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) HoverOver.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function (Identificator, Properties) {
 
                        } */
                    ];
                }
                public static LeftClick = class LeftClick {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) LeftClick.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function (Identificator, Properties) {
 
                        } */
                    ];
                }
                public static LeftClickHolding = class LeftClickHolding {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) LeftClickHolding.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        /* function (Identificator, Properties) {

                        } */
                    ];
                }

            }
            //#region Hidden
            public static ExtensionLackListeners() {
                //document.body.addEventListener("Outline", function (event: CustomEvent) { InformationHandler.Initialize(event.detail) });
                Object.values(InformationNode.Elements).forEach(childElement => childElement.Methods.InformationHandler.ExtensionLackListeners());
            }
            //#endregion Hidden
        };

        public static async Create(): Promise<HTMLDivElement> {
            //#region ExtensionInterface
            let object = document.createElement("div");
            object.setAttribute("Identificator", global.count.toString());
            object.setAttribute("InstanceIdentificator", InformationNode.InstanceIdentificator);
            object = InformationNode.Form.Image.ApplyImage(object);
            if (InformationNode.Form.Image.Text != null) object.appendChild(document.createTextNode(InformationNode.Form.Image.Text));
            Object.values(InformationNode.Elements).forEach(async childElement => {
                global.count += 1;
                (childElement as typeof global.Doc).Identificator = global.count.toString(); object.appendChild(await (childElement as InformationNode).Methods.Create());
            });
            //#endregion ExtensionInterface
            return object;
        }
    }

    public static Elements = class Elements {
        public static InformationBox = InformationBox;
        public static InformationBoxText = InformationBoxText;
        public static OutlineHor = OutlineHor;
    }

    public static References = class References { }

    public static Identificator: string;
    public static InstanceIdentificator: string;

    //#region Hidden
    //#region ExtensionInterfaceLackInstanceReferenceOnStatic
    public Image = InformationNode.Form;
    public Methods = InformationNode.Methods;
    public Elements = InformationNode.Elements;
    public References = InformationNode.References;
    //#endregion
    //#endregion Hidden
}