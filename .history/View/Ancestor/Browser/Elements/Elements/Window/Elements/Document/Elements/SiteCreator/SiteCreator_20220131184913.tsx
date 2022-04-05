import { React } from "../../../../../../../../../ReactTSX";
import { Listeners } from "../Element/Properties/Listeners";
import { Position } from "../Element/Properties/Position";
import { Form } from "../Element/Properties/Style";
import { ObjectCreator } from "./Elements/ObjectCreator/ObjectCreator";


export class SiteCreator {

    //#region InstanceREferenceOnStatic
    public Properties = SiteCreator.Properties;
    //#endregion
    public static Properties = class Properties {

        public static htmlElement: HTMLElement;
        public static Position = Position;
        public static Style = Form;

        public static HTMLElementAttributes = class HTMLElementAttributes {
            public static Class = class Class {
                constructor(value) { this.Value = value; }
                public Value: string;
            }
        }
        public static Listeners = Listeners;
    };

    //#region InstanceREferenceOnStatic
    public Methods = SiteCreator.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize() {
            return (
                <div
                    class="SiteCreator"
                >
                    {await (<SiteCreator.Elements.ObjectCreator.Methods.Initialize />)}
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof SiteCreator.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            SiteCreator.Methods.Information.Initialize();
            SiteCreator.Elements.ObjectCreator.Methods.InitializeListeners();
        }
        //#endregion
    }

    public static Elements = class Elements {
        public static ObjectCreator = ObjectCreator;
    }


    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            SiteCreator.Methods.Element = this;
            SiteCreator.Properties.Position.Element = this;
            SiteCreator.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            SiteCreator.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}


