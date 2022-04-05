import { React } from "../../../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../Element/Properties/Position";
import { Form } from "../../../../../Element/Properties/Style";


export class Element {
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
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion

    //#region InstanceREferenceOnStatic
    public Properties = Element.Properties;
    //#endregion
    public static Properties = class Properties {
        public static htmlElement: HTMLElement;
        public static Position = Position;
        public static Style = Form;
        public static Listeners = Listeners;
        public static HTMLElementAttributes = class HTMLElementAttributes {
            public static Class = class Class {
                constructor(value) { this.Value = value; }
                public Value: string;
            }
        }
    };

    //#region InstanceREferenceOnStatic
    public Methods = Element.Methods;
    //#endregion
    public static Methods = class Methods {
        public static get Initialize() {
            return (
                <div

                >

                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof Element.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Element.Methods.Information.Initialize();
        }
        //#endregion
    }

    public static Elements = class Elements {
    }
}


