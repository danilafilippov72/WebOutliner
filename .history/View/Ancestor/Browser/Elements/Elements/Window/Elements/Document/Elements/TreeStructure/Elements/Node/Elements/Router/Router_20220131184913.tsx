
import { React } from "../../../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../Element/Properties/Position";
import { Form } from "../../../../../Element/Properties/Style";
import { Minus } from "./Elements/Routing/Elements/Cube/Elements/Minus/Minus";


export class Router {
    //#region InstanceREferenceOnStatic
    public Properties = Router.Properties;
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
    public Methods = Router.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize() {
            return (
                <div
                    class="Router"
                    Style={
                        Router.Properties.Style.newDisplay("Grid")
                        +
                        `
                            pointer-events: all;
                            grid-area: Router;
                            grid-template: "a" auto / auto;
                            place-items: center center;
                            `
                        +
                        Router.Properties.Style.newBorder({
                            width: 9,
                            height: 9,
                            borderWidth: 1,
                            borderType: "solid",
                            borderColor: "white",
                            backgroundColor: "rgb(59, 59, 59)"
                        })
                    }
                >
                    {Router.Elements.Minus.Methods.Initialize}
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof Router.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Router.Methods.Information.Initialize();
        }
        //#endregion
    }

    public static Elements = class Elements {
        public static Minus = Minus;
    }

    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            Router.Methods.Element = this;
            Router.Properties.Position.Element = this;
            Router.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}


