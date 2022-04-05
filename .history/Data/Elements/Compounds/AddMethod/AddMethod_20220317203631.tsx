﻿import { React } from "../../ReactTSX";

export class AddMethod {

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
                padding?: number;
            };

            public static Display: "none" | "block" | "grid" /* = "grid" */;
            public static gridTemplateColumns: string /* = "1fr 1fr" */;
            public static gridArea = [1,1];
           
           
            //#region Hidden
            public static ApplyImage(element: any/* HTMLIFrameElement | HTMLDivElement */) {
                if (Image.Border.Margin) element.style.margin = Image.Border.Margin + "px";
                if (Image.Border.width) element.style.width = (typeof Image.Border.width == typeof String ? Image.Border.width as string : (Image.Border.width + "px"));
                if (Image.Border.minWidth) element.style.minWidth =  (typeof Image.Border.minWidth == typeof String ? Image.Border.minWidth as string : (Image.Border.minWidth + "px"));
                if (Image.Border.maxWidth) element.style.maxWidth = (typeof Image.Border.maxWidth == typeof String ? Image.Border.maxWidth as string : (Image.Border.maxWidth + "px"));
                if (Image.Border.height) element.style.height =  (typeof Image.Border.height == typeof String ? Image.Border.height as string : (Image.Border.height + "px"));
                if (Image.Border.minHeight) element.style.minHeight =  (typeof Image.Border.minHeight == typeof String ? Image.Border.minHeight as string : (Image.Border.minHeight + "px"));
                if (Image.Border.maxHeight) element.style.maxHeight = (typeof Image.Border.maxHeight == typeof String ? Image.Border.maxHeight as string : (Image.Border.maxHeight + "px"));
                if (Image.Border.borderWidth) element.style.borderWidth = Image.Border.borderWidth + "px";
                if (Image.Border.borderType) element.style.borderStyle = Image.Border.borderType as string;
                if (Image.Border.borderRadius) element.style.borderRadius = Image.Border.borderRadius + "px";
                if (Image.Border.borderColor) element.style.borderColor = Image.Border.borderColor; 
                if (Image.Border.backgroundColor) element.style.backgroundColor = Image.Border.backgroundColor;
                if (Image.Border.padding) element.style.padding = Image.Border.padding + "px";

                if (Image.Display) element.style.Display = Image.Display;
                if (Image.gridTemplateColumns) element.style.gridTemplateColumns = Image.gridTemplateColumns;
                if (Image.gridArea) element.style.gridArea = Image.gridArea;
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
        };

        public static Create() {
            //#region ExtensionInterface
            let object = document.createElement("div");
            object.setAttribute("Identificator", AddMethod.Identificator);
            object.setAttribute("InstanceIdentificator", AddMethod.InstanceIdentificator);
            object = AddMethod.Form.Image.ApplyImage(object);
            if (AddMethod.Form.Image.Text != null) object.appendChild(document.createTextNode(AddMethod.Form.Image.Text));
            Object.values(AddMethod.Elements).forEach(childElement => object.appendChild((childElement as AddMethod).Methods.Create()));
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
    public Image = AddMethod.Form;
    public Methods = AddMethod.Methods;
    public Elements = AddMethod.Elements;
    public References = AddMethod.References;
    //#endregion
    //#endregion Hidden
}