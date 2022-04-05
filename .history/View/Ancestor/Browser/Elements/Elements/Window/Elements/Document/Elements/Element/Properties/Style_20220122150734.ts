import { Element  } from "../Element";

export class Style {
    public static ApplyStyles(element: HTMLDivElement) {
        element.style.display = Style.Display;
        element.style.display = Style.Display;
        if (Style.Border.Margin) element.style.margin = Style.Border.Margin + "px";
        if (Style.Border.width) element.style.width = (typeof Style.Border.width == typeof String ? Style.Border.width as string : (Style.Border.width + "px"));
        if (Style.Border.minWidth) element.style.minWidth =  (typeof Style.Border.minWidth == typeof String ? Style.Border.minWidth as string : (Style.Border.minWidth + "px"));
        if (Style.Border.maxWidth) element.style.maxWidth = (typeof Style.Border.maxWidth == typeof String ? Style.Border.maxWidth as string : (Style.Border.maxWidth + "px"));
        if (Style.Border.height) element.style.height =  (typeof Style.Border.height == typeof String ? Style.Border.height as string : (Style.Border.height + "px"));
        if (Style.Border.minHeight) element.style.minHeight =  (typeof Style.Border.minHeight == typeof String ? Style.Border.minHeight as string : (Style.Border.minHeight + "px"));
        if (Style.Border.maxHeight) element.style.maxHeight = (typeof Style.Border.maxHeight == typeof String ? Style.Border.maxHeight as string : (Style.Border.maxHeight + "px"));
        if (Style.Border.borderWidth) element.style.borderWidth = Style.Border.borderWidth + "px";
        if (Style.Border.borderType) element.style.borderStyle = Style.Border.borderType as string;
        if (Style.Border.borderRadius) element.style.borderRadius = Style.Border.borderRadius + "px";
        if (Style.Border.borderColor) element.style.borderColor = Style.Border.borderColor; 
        if (Style.Border.backgroundColor) element.style.backgroundColor = Style.Border.backgroundColor;
        if (Style.Border.padding) element.style.padding = Style.Border.padding + "px";
        return element;
    }

    public static Display: "none" /* | { "Grid": string } */ | "Block" = "Block";

    public static Border: typeof Style.BorderI;
    public static BorderI: {
        Margin?: Sq<number>;
        width?: number | string;
        minWidth?: number | string;
        maxWidth?: number | string;
        height?: number | string;
        minHeight?: number | string;
        maxHeight?: number | string;
        borderWidth?: Sq<number>;
        borderType?: Sq<"none" | "hidden" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset">;
        borderRadius?: number;
        borderColor?: string;
        backgroundColor?: string,
        padding?: number;
    };
   

    public static set Events(Events: "all" | "none") {
        Style.Element.Properties.htmlElement.style.pointerEvents = Events;
    }
   
   
    //#region Hidden
    public static Element: Element;
    //#endregion
};
type Sq<T> = {
    left: T;
    right: T;
    bottom: T;
    top: T;
} | T | [T, T];



















