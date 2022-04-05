import { React } from "../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../Element/Properties/Listeners";
import { Position } from "../../../Element/Properties/Position";
import { Style } from "../../../Element/Properties/Style";
import { ElementInstance } from "./Elements/ElementInstance/ElementInstance";


export class ObjectCreator {
    
    //#region InstanceREferenceOnStatic
    public Properties = ObjectCreator.Properties;
    //#endregion
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
    };

    //#region InstanceREferenceOnStatic
    public Methods = ObjectCreator.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize() {
            return (
                <div
                    class="ObjectCreator"
                    Style={
                        ObjectCreator.Properties.Style.newBorder({
                            borderColor: "black",
                            width: "100%",
                            height: "100%"
                        })
                    }
                >
                    {await (<ObjectCreator.Elements.ElementInstance.Methods.Initialize />)}
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof ObjectCreator.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            ObjectCreator.Properties.Listeners.Initialize();
            ObjectCreator.Elements.ElementInstance.Methods.InitializeListeners();
        }
        //#endregion
    }

    public static Elements = class Elements {
        public static ElementInstance = ElementInstance;
    }


    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            ObjectCreator.Methods.Element = this;
            ObjectCreator.Properties.Position.Element = this;
            ObjectCreator.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            ObjectCreator.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}