import { Element  } from "../Element";

export class Style {
    public static ApplyStyles(element: HTMLElement) {
        element.style.display = Style.Display;
        element.style.display = Style.Display;
        if (Style.Border.Margin) element.style.margin = Style.Border.Margin + "px";
        if (Style.Border.width) (Border.width ? "width: " + (typeof Border.width == typeof String ? Border.width as string : (Border.width + "px")) + ";" : "") +
        if (Style.Border.minWidth) (Border.minWidth ? "max-width: " + (typeof Border.minWidth == typeof String ? Border.minWidth as string : (Border.minWidth + "px")) + ";" : "") +
        if (Style.Border.maxWidth) (Border.maxWidth ? "max-width: " + (typeof Border.maxWidth == typeof String ? Border.maxWidth as string : (Border.maxWidth + "px")) + ";" : "") +
        if (Style.Border.height) (Border.height ? "height: " + (typeof Border.height == typeof String ? Border.height as string : (Border.height + "px")) + ";" : "") +
        if (Style.Border.Margin) (Border.minHeight ? "max=height: " + (typeof Border.minHeight == typeof String ? Border.minHeight as string : (Border.minHeight + "px")) + ";" : "") +
        if (Style.Border.Margin) (Border.maxHeight ? "max=height: " + (typeof Border.maxHeight == typeof String ? Border.maxHeight as string : (Border.maxHeight + "px")) + ";" : "") +
        if (Style.Border.Margin) (Border.borderWidth ? "border-width: " + Border.borderWidth + "px" + ";" : "") +
        if (Style.Border.Margin) (Border.borderType ? "border-style: " + Border.borderType as string + ";" : "") +
        if (Style.Border.Margin) (Border.borderRadius ? "border-radius: " + Border.borderRadius + "px" + ";" : "") +
        if (Style.Border.Margin) (Border.borderColor ? "border-color: " + Border.borderRadius + ";" : "") +
        if (Style.Border.Margin) (Border.backgroundColor ? "background-color: " + Border.backgroundColor + ";" : "") +
        if (Style.Border.Margin) (Border.padding ? "padding: " + Border.padding + "px" + ";" : "")
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
    //#region Hidden
    public static Element: Element;
    //#endregion


    //#region Hidden
    public static set Position(Position: "static" | "absolute") {
        Style.Element.Properties.htmlElement.style.position = Position;
    }

    public static set SetRelativePosition(RelativePosition: "center" ) {
        Style.Element.Properties.htmlElement.style.placeItems = RelativePosition;
    }
    public static set Events(Events: "all" | "none") {
        Style.Element.Properties.htmlElement.style.pointerEvents = Events;
    }
    public static set SetBorder(Border: typeof Style.BorderI) {
        Style.Element.Properties.htmlElement.style.margin = Border.Margin + "px";
        Style.Element.Properties.htmlElement.style.width = typeof Border.width == typeof String ? Border.width as string : Border.width + "px";
        Style.Element.Properties.htmlElement.style.height = typeof Border.height == typeof String ? Border.height as string : Border.height + "px";
        Style.Element.Properties.htmlElement.style.borderWidth = Border.borderWidth + "px";
        Style.Element.Properties.htmlElement.style.borderStyle = Border.borderType as string;
        Style.Element.Properties.htmlElement.style.borderRadius = Border.borderRadius + "px";
        Style.Element.Properties.htmlElement.style.backgroundColor = Border.backgroundColor;
        Style.Element.Properties.htmlElement.style.padding = Border.padding + "px";
    }
    //#endregion

    //#region 
    public static newRelativePosition(RelativePosition: "center") {
        return (
            "display: flex;" +
            "align-items: " + RelativePosition + ";" +
            "justify-content: " + RelativePosition + ";"
        );
    }

  

   /*  public static newDisplay(Display: "none" |  "Grid" | "Block") {
        return "display: " + Display + ";";
    }
    public static set Display(Display: "none" | "Grid" | "Block") {
        Style.Element.Properties.htmlElement.style.display = Display;
    } */
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
    public static newBorder(Border: typeof Style.BorderI) {
        return (
            (Border.Margin ? "margin: " + Border.Margin + "px" + ";" : "") +
            (Border.width ? "width: " + (typeof Border.width == typeof String ? Border.width as string : (Border.width + "px")) + ";" : "") +
            (Border.minWidth ? "max-width: " + (typeof Border.minWidth == typeof String ? Border.minWidth as string : (Border.minWidth + "px")) + ";" : "") +
            (Border.maxWidth ? "max-width: " + (typeof Border.maxWidth == typeof String ? Border.maxWidth as string : (Border.maxWidth + "px")) + ";" : "") +
            (Border.height ? "height: " + (typeof Border.height == typeof String ? Border.height as string : (Border.height + "px")) + ";" : "") +
            (Border.minHeight ? "max=height: " + (typeof Border.minHeight == typeof String ? Border.minHeight as string : (Border.minHeight + "px")) + ";" : "") +
            (Border.maxHeight ? "max=height: " + (typeof Border.maxHeight == typeof String ? Border.maxHeight as string : (Border.maxHeight + "px")) + ";" : "") +
            (Border.borderWidth ? "border-width: " + Border.borderWidth + "px" + ";" : "") +
            (Border.borderType ? "border-style: " + Border.borderType as string + ";" : "") +
            (Border.borderRadius ? "border-radius: " + Border.borderRadius + "px" + ";" : "") +
            (Border.borderColor ? "border-color: " + Border.borderRadius + ";" : "") +
            (Border.backgroundColor ? "background-color: " + Border.backgroundColor + ";" : "") +
            (Border.padding ? "padding: " + Border.padding + "px" + ";" : "")
        )
    }
    //#endregion
};
type Sq<T> = {
    left: T;
    right: T;
    bottom: T;
    top: T;
} | T | [T, T];



















