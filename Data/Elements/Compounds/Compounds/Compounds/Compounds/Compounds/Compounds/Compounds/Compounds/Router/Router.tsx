import { HorizontalLine } from "../../../../../../../HorizontalLine/HorizontalLine";
import { VerticalLine } from "../../../../../../../VerticalLine/VerticalLine";

export class Router {

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
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderRadius: 3,
                    borderType: "solid",
                    borderColor: "hsl(0deg 0% 50%)",
                };

            public static Display: "none" | "block" | "grid" | "flex" = "grid";

            public static Positioning: {
                row: "start" | "center" | "end",
                column: "start" | "center" | "end"
            } /* = {
                    row: "start",
                    column: "center"
                } */;
            public static position: "none" | "relative" /* = "relative" */;
            public static positionOffset: {
                left: number | string;
                top: number | string;
            };

            public static gridTemplate: [...any] = ["a"];
            public static gridRowsWidth: [...any] = ["auto"];
            public static gridColumnsWidth: [...any] = ["auto"];

            public static gridTemplateColumns: string /* = "1fr 1fr" */;
            public static gridArea: string /* = [1,1] */ = "b";


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
                if (Image?.gridTemplate != null) {
                    var gridTemplate = '';

                    Image.gridTemplate.forEach(
                        (temp, index) =>
                            gridTemplate += '"' + temp + '"' + " " +
                            (typeof Image.gridRowsWidth[index] == "string" ? Image.gridRowsWidth[index].toString() : Image.gridRowsWidth[index].toString() + "px") + "\n");
                    gridTemplate += " / ";
                    
                    Image.gridColumnsWidth.forEach(temp => gridTemplate += (typeof temp == "string" ? temp.toString() : temp + "px") + " ")

                    element.style.gridTemplate = gridTemplate;
                }
                if (Image?.gridArea != null) {
                    if (typeof Image.gridArea == "string") {
                        const st = (Image.gridArea as string);
                        element.style.gridArea = st;
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
                        public static Response: boolean = false;
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
                        public static Response: boolean = false;
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
                        public static Response: boolean = false;
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
                        public static Response: boolean = false;
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
                //document.body.addEventListener("Outline", function (event: CustomEvent) { InformationHandler.Initialize(event.detail) });
                Object.values(Router.Elements).forEach(childElement => childElement.Methods.InformationHandler.ExtensionLackListeners());
            }
            //#endregion Hidden
        };

        public static async Create(): Promise<HTMLDivElement> {
            //#region ExtensionInterface
            let object = document.createElement("div");
            object.setAttribute("Identificator", global.count.toString());
            object.setAttribute("InstanceIdentificator", Router.InstanceIdentificator);
            object = Router.Form.Image.ApplyImage(object);
            if (Router.Form.Image.Text != null) object.appendChild(document.createTextNode(Router.Form.Image.Text));
            Object.values(Router.Elements).forEach(async childElement => {
                global.count += 1;
                (childElement as typeof global.Doc).Identificator = global.count.toString(); object.appendChild(await (childElement as Router).Methods.Create());
            });
            //#endregion ExtensionInterface
            return object;
        }
    }

    public static Elements = class Elements {
        public static HorizontalLine = HorizontalLine;
        public static VerticalLine = VerticalLine;
    }

    public static References = class References { }

    public static Identificator: string;
    public static InstanceIdentificator: string;

    //#region Hidden
    //#region ExtensionInterfaceLackInstanceReferenceOnStatic
    public Image = Router.Form;
    public Methods = Router.Methods;
    public Elements = Router.Elements;
    public References = Router.References;
    //#endregion
    //#endregion Hidden
}