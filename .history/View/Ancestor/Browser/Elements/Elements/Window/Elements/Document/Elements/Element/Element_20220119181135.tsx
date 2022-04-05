import { Listeners } from "./Methods/Mouse/Mouse";
import { Style } from "./Properties/Style";
import { Position } from "./Properties/Position";
import { React } from "../../../../../../../../../ReactTSX";
import { Document } from "../../Document";


export class Element {
    public static Properties = class Properties {
        
        public static htmlElement: HTMLElement;
        public static Position = Position;
        public static Style = Style;
        
        public static HTMLElementAttributes = class HTMLElementAttributes {
            public static Class = class Class {
                constructor(value) { this.Value = value; }
                public Value: string;
            }
        }
        public static Listeners = Listeners;
        public static Identificator: string;
    };
    public static Methods = class Methods {
        public static async Initialize() {
        }

        /* public static async All */
        
        //#region InstanceReference
        public static Element: typeof Element.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Element.Properties.Listeners.Initialize();
        }
        //#endregion
    }
    public static Elements = class Elements {
    }

    public static References = class References {
        public static Document: typeof Document;
        public static get Elements() {
           return References.Document.Methods.getStructureElementsByClass(Element.Properties.Identificator)
        }
        //#region Hidden
        private static InstanceElementsVariable: Promise<Element[]>;
        public static get InstanceElements(){
            if (References.InstanceElementsVariable == null) { References.InstanceElementsVariable = References.Elements; }
            return References.InstanceElementsVariable;
        }
        public static set InstanceElements(Function: (Element: Element) => void ) {
            (await References.InstanceElementsVariable).forEach(Function);
         }
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
        }
        function SetHTMLElement() {
            Element.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
    //#endregion
}


