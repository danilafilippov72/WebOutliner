import { Image } from "../../Element/Form/Image";
import { Position } from "../../Element/Form/Position";
import { React } from "../../../Element/../ReactTSX";
import { InformationHandler } from "../../Element/Methods/InformationHandler/InformationHandler";


export class lan {

    public static Form = class Form {
        public static Image = Image; /* class Image{
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
            object.setAttribute("Identificator", lan.Identificator);
            object.setAttribute("InstanceIdentificator", lan.InstanceIdentificator);
            object = lan.Form.Image.ApplyImage(object);
            //if (Element.Form.Image.Text != null) object.appendChild(document.createTextNode(Element.Form.Image.Text));
            Object.values(lan.Elements).forEach(childElement => object.appendChild((childElement as lan).Methods.Create()));
            //#endregion ExtensionInterface
            return object;
        }

        //#region ExtensionInterfaceLackInitializeListenersAfterCreation
        public static InitializeListeners() {
            lan.Methods.InformationHandler.Initialize();
            lan.Elements.htmlElement = document.getElementById(lan.Identificator);
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
    public Image = lan.Form;
    public Methods = lan.Methods;
    public Elements = lan.Elements;
    public References = lan.References;
    //#endregion
}

document.append