
import { React } from "../../../../../../../../../../../../../ReactTSX";
import { Listeners } from "../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../Element/Properties/Position";
import { Style } from "../../../../../Element/Properties/Style";
import { Minus } from "./Elements/Minus/Minus";


export class Cube {
    //#region InstanceREferenceOnStatic
    public Properties = Cube.Properties;
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
    public Methods = Cube.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize() {
            return (
                <div
                    class="Router"
                    Style={
                        Cube.Properties.Style.Display("Grid")
                        +
                            `
                            pointer-events: all;
                            grid-area: Router;
                            grid-template: "a" auto / auto;
                            place-items: center center;
                            `
                        +
                        Cube.Properties.Style.newBorder({
                            width: 9,
                            height: 9,
                            borderWidth: 1,
                            borderType: "solid",
                            borderColor: "white",
                            backgroundColor: "rgb(59, 59, 59)"
                        })
                    }
                >
                    {Cube.Elements.Minus.Methods.Initialize}
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof Cube.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Cube.Properties.Listeners.Initialize();
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
            Cube.Methods.Element = this;
            Cube.Properties.Position.Element = this;
            Cube.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}


