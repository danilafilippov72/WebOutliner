
import { React } from "../../../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../Element/Properties/Position";
import { Form } from "../../../../../Element/Properties/Style";
import { ObjectTab } from "./Elements/ObjectTab/ObjectTab";
import { Tab } from "./Elements/Tab/Tab";


export class InstanceObject {
    //#region InstanceREferenceOnStatic
    public Properties = InstanceObject.Properties;
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
    public Methods = InstanceObject.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize(properties: { Instance }) {
            console.log(properties.Instance as { objectTab: any })
            return (
                <div
                    class="InstanceObject"
                    Style={
                        "grid-area: InstanceObject"
                    }
                >
                    {
                        properties.Instance?.tab == null ?
                            await (<InstanceObject.Elements.ObjectTab.Methods.Initialize Instance={properties.Instance} />)
                            : await (<InstanceObject.Elements.Tab.Methods.Initialize Instance={properties.Instance} />)
                    }
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof InstanceObject.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            InstanceObject.Methods.Information.Initialize();
        }
        //#endregion
    }

    public static Elements = class Elements {
        public static Text = Text;
        public static Tab = Tab;
        public static ObjectTab = ObjectTab;
    }

    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            InstanceObject.Methods.Element = this;
            InstanceObject.Properties.Position.Element = this;
            InstanceObject.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}


