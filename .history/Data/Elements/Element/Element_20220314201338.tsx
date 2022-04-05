import { Image } from "./Form/Image";
import { Position } from "./Form/Position";
import { React } from "../../ReactTSX";
import { InformationHandler } from "./Methods/InformationHandler/InformationHandler";


export class Element {

    public static Form = class Form {
        public static Image = class Image; /* class Image{
            public static WebSite = class WebSite {
                public static PositionRelative: Element;   
            }
        } */
        public static Type = Form.Image;
    };

    public static Methods = class Methods {
        public static InformationHandler = InformationHandler;

        public static Create() {
            //#region ExtensionInterface
            let object = document.createElement("div");
            object.setAttribute("Identificator", Element.Identificator);
            object.setAttribute("InstanceIdentificator", Element.InstanceIdentificator);
            object = Element.Form.Image.ApplyImage(object);
            //if (Element.Form.Image.Text != null) object.appendChild(document.createTextNode(Element.Form.Image.Text));
            Object.values(Element.Elements).forEach(childElement => object.appendChild((childElement as Element).Methods.Create()));
            //#endregion ExtensionInterface
            return object;
        }

        //#region ExtensionInterfaceLackInitializeListenersAfterCreation
        public static InitializeListeners() {
            Element.Methods.InformationHandler.Initialize();
            Element.Elements.htmlElement = document.getElementById(Element.Identificator);
        }
        //#endregion ExtensionInterfaceLackInitializeListenersAfterCreation
    }

    public static Elements = class Elements { 
        //#region ExtensionInterface
        public static htmlElement: HTMLElement;
        //#endregion
    }

    public static References = class References { }

    public static Identificator: string;
    public static InstanceIdentificator: string;

    //#region ExtensionInterfaceLackInstanceReferenceOnStatic
    public Image = Element.Form;
    public Methods = Element.Methods;
    public Elements = Element.Elements;
    public References = Element.References;
    //#endregion
}

