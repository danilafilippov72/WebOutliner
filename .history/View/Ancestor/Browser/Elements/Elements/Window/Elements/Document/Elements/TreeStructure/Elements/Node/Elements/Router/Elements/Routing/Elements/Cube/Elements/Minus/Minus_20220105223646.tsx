
import { React } from "../../../../../../../../../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../../../../../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../../../../../../../Element/Properties/Position";
import { Style } from "../../../../../../../../../../../Element/Properties/Style";


export class Minus {
    //#region InstanceREferenceOnStatic
    public Properties = Minus.Properties;
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
    public Methods = Minus.Methods;
    //#endregion
    public static Methods = class Methods {
        public static get Initialize() {
            return (
                <div
                    Style={
                        Minus.Properties.Style.newBorder({
                            width: 7,
                            height: 7,
                            borderWidth: {
                                bottom: 1,
                                left: 0,
                                right: 0,
                                top: 0
                            },
                            borderType: "solid",
                            borderColor: "white"
                        })
                    }
                >
                    
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof Minus.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Minus.Properties.Listeners.Initialize();
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
            Minus.Methods.Element = this;
            Minus.Properties.Position.Element = this;
            Minus.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}


