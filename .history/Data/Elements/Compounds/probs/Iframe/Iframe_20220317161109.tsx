import { Image } from "../../Element/Form/Image";
import { Position } from "../../Element/Form/Position";
import { React } from "../../../../ReactTSX";
import { InformationHandler } from "../../Element/Methods/InformationHandler/InformationHandler";


export class Iframe {

    public static Form = class Form {
        public static Image = Image;
        public static Type = Form.Image;
    };

    public static Methods = class Methods {
        public static InformationHandler = InformationHandler;

        public static Create() {
            //#region ExtensionInterface
            let object = document.createElement("iframe");
            object.setAttribute("Identificator", Iframe.Identificator);
            object.setAttribute("InstanceIdentificator", Iframe.InstanceIdentificator);
          /*   object = Iframe.Form.Image.ApplyImage(object); */
            if (Iframe.Form.Image.Text != null) object.appendChild(document.createTextNode(Iframe.Form.Image.Text));
            Object.values(Iframe.Elements).forEach(childElement => object.appendChild((childElement as Iframe).Methods.Create()));
            //#endregion ExtensionInterface
            return object;
        }

        //#region ExtensionInterfaceLackInitializeListenersAfterCreation
        public static InitializeListeners() {
            Iframe.Methods.InformationHandler.Initialize();
            Iframe.Elements.htmlElement = document.getElementById(Iframe.Identificator);
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
    public Image = Iframe.Form;
    public Methods = Iframe.Methods;
    public Elements = Iframe.Elements;
    public References = Iframe.References;
    //#endregion
}

document.body.append(Iframe.Methods.Create());
