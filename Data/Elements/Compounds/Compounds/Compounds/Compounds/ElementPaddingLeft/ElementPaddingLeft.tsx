import { Document } from "../Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Compounds/Document/Document";
import { OtherMethods } from "../Compounds/OtherMethods/OtherMethods";

export class ElementPaddingLeft {

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
                    boxSizing: "border-box",
                    height: "75%",
                    width: 40,
                    borderWidth: {
                        left: 2,
                        right: 2,
                        bottom: 0,
                        top: 0
                    },
                    borderType: "solid",
                    borderColor: "hsl(0deg 0% 40%)"
                };

            public static Display: "none" | "block" | "grid" /* = "grid" */;
            public static Positioning: {
                row: "start" | "center" | "end",
                column: "start" | "center" | "end"
            } = {
                    row: "start",
                    column: "center"
                };
            public static position: "none" | "relative" = "relative";
            public static positionOffset: {
                left: number | string;
                top: number | string;
            } = {
                    left: -Image.Border.width - 5,
                    top: 0
                };


            /* public static gridTemplate: string /* = '"a a" auto "b c" auto / auto auto' */

            public static gridTemplate: [...any] /* = ["a b b b c", "d e e e f", "d g h i f", "d j j j f", "k l l l m"] */;
            public static gridRowsWidth: [...any] /* = [0, "auto", "auto", "auto", "auto"] */;
            public static gridColumnsWidth: [...any] /* = ["auto", "auto", "auto", "auto", "auto"] */;

            public static gridTemplateColumns: string /* = "auto auto" */;
            public static gridArea /* = [1,1] */ = "e";


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





                if (Image.Border?.width != null) element.style.width = (typeof Image.Border.width == "string" ? Image.Border.width as string : (Image.Border?.width + "px"));
                if (Image.Border?.minWidth != null) element.style.minWidth = (typeof Image.Border.minWidth == "string" ? Image.Border.minWidth as string : (Image.Border?.minWidth + "px"));
                if (Image.Border?.maxWidth != null) element.style.maxWidth = (typeof Image.Border.maxWidth == "string" ? Image.Border.maxWidth as string : (Image.Border?.maxWidth + "px"));
                if (Image.Border?.height != null) element.style.height = (typeof Image.Border.height == "string" ? Image.Border.height as string : (Image.Border?.height + "px"));
                if (Image.Border?.minHeight != null) element.style.minHeight = (typeof Image.Border.minHeight == "string" ? Image.Border.minHeight as string : (Image.Border?.minHeight + "px"));
                if (Image.Border?.maxHeight != null) element.style.maxHeight = (typeof Image.Border.maxHeight == "string" ? Image.Border.maxHeight as string : (Image.Border?.maxHeight + "px"));

                if (Image.Border?.boxSizing != null) element.style.boxSizing = Image.Border.boxSizing;

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

                if (Image?.gridTemplate != null) {
                    var gridTemplate = '';
                    Image.gridTemplate.forEach((temp, index) => gridTemplate += '"' + temp + '"' + " " + (typeof Image.gridRowsWidth[index] == "number" ? Image.gridRowsWidth[index] + "px" : Image.gridRowsWidth[index]) + " ")
                    gridTemplate += " / ";
                    Image.gridColumnsWidth.forEach(col => gridTemplate += col + " ")
                    element.style.gridTemplate = gridTemplate;
                }

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
                    element.style.alignSelf = Image.Positioning.column;
                    element.style.justifySelf = Image.Positioning.row;
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
                        public static Response: boolean = true;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) HoverOver.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (Identificator, Properties) {
                            (document.querySelector('[identificator="' + Identificator + '"]') as HTMLDivElement).animate([
                                {
                                    transform: 'scale(1, 1)',
                                    boxShadow: "2px 2px 7px 4px rgba(0,0,0,0)"
                                },
                                {
                                    transform: 'scale(1.2, 1.2);',
                                    boxShadow: "2px 2px 7px 4px rgba(255,255,255,0.3)"
                                },
                                {
                                    transform: 'scale(1, 1)',
                                    boxShadow: "2px 2px 7px 4px rgba(0,0,0,0)"
                                }
                            ], {
                                duration: 300,
                                direction: "normal",
                                fill: "backwards"
                            });
                        }
                    ];
                }
                public static Move = class Move {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = false;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) Move.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (Identificator, Properties) {
                            Identificator = global.objectMovement;
                            if (global?.Coordinates != null) {
                                const imageObject = (document.querySelector('[identificator="' + Identificator + '"]') as HTMLDivElement).parentElement as HTMLDivElement;

                                const object = global.search.FindObjectByIdentificator(imageObject.getAttribute("identificator"), Document)

                                /* (Properties.Coordinates.x - imageObject.getBoundingClientRect().x) / imageObject.clientWidth */
                                object.Form.Image.gridColumnsWidth[0] = ((Properties.Coordinates.x - imageObject.getBoundingClientRect().left) / imageObject.clientWidth * 100).toString() + "%";
                                /*  (Number((object.Form.Image.gridColumnsWidth[0] as string).slice(0, (object.Form.Image.gridColumnsWidth[0] as string).indexOf("%") ))
                                     - (global.Coordinates.x - Properties.Coordinates.x)).toString() + "%"/*  * (0.01 * Math.abs(global.Coordinates.x - Properties.Coordinates.x)); */

                                if (object.Form.Image?.gridTemplate != null) {
                                    var gridTemplate = '';

                                    object.Form.Image.gridTemplate.forEach((temp, index) => gridTemplate += '"' + temp + '"' + " " + (typeof object.Form.Image.gridRowsWidth[index] == "number" ? object.Form.Image.gridRowsWidth[index] + "px" : object.Form.Image.gridRowsWidth[index]) + " ")
                                    gridTemplate += " / ";
                                    object.Form.Image.gridColumnsWidth.forEach(col => gridTemplate += (typeof col == "string" ? col as string : col + "px") + " ")

                                    imageObject.style.gridTemplate = gridTemplate;
                                }
                            }
                            global.Coordinates = Properties.Coordinates;
                        }
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
                public static LeftClickHoldingDown = class LeftClickHoldingDown {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) LeftClickHoldingDown.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (Identificator, Properties) {
                            console.log("LeftClickHolding Down")
                            global.objectMovement = Identificator;
                            global.Doc.Methods.InformationHandler.MouseHandler.Move.CurrentMethod.Set(1);
                        }
                    ];
                }
                public static LeftClickHoldingUp = class LeftClickHoldingUp {
                    public static CurrentMethod = class CurrentMethod {
                        private static MethodIndex: number = 0;
                        public static Response: boolean = true;
                        public static Run(Identificator, Properties) {
                            if (CurrentMethod.Response) LeftClickHoldingUp.OtherMethods[CurrentMethod.MethodIndex](Identificator, Properties);
                        }
                        public static Set(MethodIndex: number) {
                            CurrentMethod.MethodIndex = MethodIndex;
                        }
                    }
                    private static OtherMethods: Function[] = [
                        function (Identificator, Properties) {
                            console.log("LeftClickHolding Up")
                            ElementPaddingLeft.Methods.InformationHandler.MouseHandler.Move.CurrentMethod.Response = false;
                            global.Coordinates = null;
                        }
                    ];
                }

            }
            //#region Hidden
            private static isListener = false;
            public static ExtensionLackListeners() {
                if (InformationHandler.isListener == false) {
                    console.log("ExtensionLackListeners", ElementPaddingLeft.Identificator);
                    document.querySelectorAll('[instanceidentificator="' + ElementPaddingLeft.InstanceIdentificator + '"]')
                        .forEach(element => element.addEventListener(
                            "Outline",
                            function (event: CustomEvent) { InformationHandler.Initialize(event.detail) }
                        ));
                    InformationHandler.isListener = true;
                }
                Object.values(ElementPaddingLeft.Elements).forEach(childElement => childElement.Methods.InformationHandler.ExtensionLackListeners());
            }
            //#endregion Hidden
        };

        public static async Create(): Promise<HTMLDivElement> {
            if (ElementPaddingLeft.InstanceIdentificator == null) ElementPaddingLeft.InstanceIdentificator = count.toString();
            //#region ExtensionInterface
            let object = document.createElement("div");
            object.setAttribute("Identificator", global.count.toString());
            object.setAttribute("InstanceIdentificator", ElementPaddingLeft.InstanceIdentificator);
            object = ElementPaddingLeft.Form.Image.ApplyImage(object);
            if (ElementPaddingLeft.Form.Image.Text != null) object.appendChild(document.createTextNode(ElementPaddingLeft.Form.Image.Text));
            Object.values(ElementPaddingLeft.Elements).forEach(async childElement => {
                global.count += 1;
                (childElement as typeof global.Doc).Identificator = global.count.toString(); object.appendChild(await (childElement as ElementPaddingLeft).Methods.Create());
            });
            //#endregion ExtensionInterface
            return object;
        }
    }

    public static Elements = class Elements {
    }

    public static References = class References { }

    public static Identificator: string;
    public static InstanceIdentificator: string;

    //#region Hidden
    //#region ExtensionInterfaceLackInstanceReferenceOnStatic
    public Image = ElementPaddingLeft.Form;
    public Methods = ElementPaddingLeft.Methods;
    public Elements = ElementPaddingLeft.Elements;
    public References = ElementPaddingLeft.References;
    //#endregion
    //#endregion Hidden
}