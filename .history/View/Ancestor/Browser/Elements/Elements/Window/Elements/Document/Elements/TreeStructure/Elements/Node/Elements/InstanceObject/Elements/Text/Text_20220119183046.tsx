import { React } from "../../../../../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../../../Element/Properties/Position";
import { Style } from "../../../../../../../Element/Properties/Style";


export class Text {
    //#region InstanceREferenceOnStatic
    public Properties = Text.Properties;
    //#endregion
    public static Properties = class Properties {
        public static htmlElement: HTMLElement;
        public static Position = Position;
        public static Style = Style;
        public static Listeners = Listeners;
        public static HTMLElementAttributes = class HTMLElementAttributes {
            public static Class = class Class {
                constructor(value) { this.Value = value; }
                public Value: string;
            }
        }
    };

    //#region InstanceREferenceOnStatic
    public Methods = Text.Methods;
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
        public static Element: typeof Text.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Text.Methods.Information.Initialize();
        }
        //#endregion
    }

    public static Elements = class Elements {
    }

    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            Text.Methods.Element = this;
            Text.Properties.Position.Element = this;
            Text.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion

}
