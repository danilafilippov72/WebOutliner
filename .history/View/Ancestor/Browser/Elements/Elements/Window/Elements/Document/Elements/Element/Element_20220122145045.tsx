import { Style } from "./Properties/Style";
import { Position } from "./Properties/Position";
import { React } from "../../../../../../../../../ReactTSX";
import { Document } from "../../Document";
import { Information } from "./Methods/Information/Information";
import { Moving } from "./Methods/Move/Move";


export class Element {
    public static Identificator: string;
    public static InstanceIdentificator: string;
    
    public static Properties = class Properties {
        public static Position = Position;
        public static Style = Style;
    };
 
    public static Methods = class Methods {
        public static Information = Information;
        public static Moving = Moving;
        
        public static HTMLElement() {
            const element = document.createElement("div");
            element.setAttribute("Identificator", Element.Identificator);
            element.setAttribute("InstanceIdentificator", Element.Identificator);
            return (
                <div
                    class="SiteCreator"
                >
                    {await (<SiteCreator.Elements.ObjectCreator.Methods.Initialize />)}
                </div>
            )
        }
        //#region 
        //#region InstanceReference
        public static Element: typeof Element.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Element.Methods.Information.Initialize();
        }
        //#endregion
        //#endregion
    }
    public static Elements = class Elements {
    }

    public static References = class References {
        public static htmlElement: HTMLElement;
        public static Document: typeof Document;
        public static get Elements() {
           return References.Document.Methods.getStructureElementsByClass(Element.Properties.Identificator)
        }

        //#region Hidden
        /* private static InstanceElementsVariable: Promise<Element[]>;
        public static get InstanceElements(){
            if (References.InstanceElementsVariable == null) { References.InstanceElementsVariable = References.Elements; }
            return References.InstanceElementsVariable;
        }
        public static set InstanceElements(Function: (Element: Element) => void ) {
            (await References.InstanceElementsVariable).forEach(Function);
         } */
        //#endregion
    }
        

    //#region Hidden
    //#region InstanceReferenceOnStatic
    public Properties = Element.Properties;
    public Methods = Element.Methods;
    public References = Element.References;
    //#endregion
    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            Element.Methods.Element = this;
            Element.Properties.Position.Element = this;
            Element.Properties.Style.Element = this;
            Element.Methods.Information.Element = this;
        }
        function SetHTMLElement() {
            Element.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
    //#endregion
}


