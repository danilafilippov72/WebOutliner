import { Document } from "../../../../../../../../Document";
import { Listeners } from "../../../../../../../Element/Properties/Listeners";
import { Position } from "../../../../../../../Element/Properties/Position";
import { Style } from "../../../../../../../Element/Properties/Style";
import { React } from "../.././../../../../../../../../../../../../../ReactTSX";
import { CenterAddition } from "./Elements/CenterAddition/CenterAddition";


export class ViewElement {
    static Document: Document;
    
    //#region InstanceREferenceOnStatic
    public Properties = ViewElement.Properties;
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
    public Methods = ViewElement.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize() {
            ViewElement.Properties.Listeners.MouseEventHandler = {
                structureElementClass: "ViewElement",
                MouseOverIn: async (element) => {
                    (await ViewElement.Document.Methods.getStructureElementsByClass("TopAddition")).forEach(element => {
                        element
                    }
                    BottomAddition
                }
            }
            return (
                <div
                    class="ViewElement"
                    style={
                        ViewElement.Properties.Style.newBorder({
                            borderColor: "black",
                            borderType: "dashed",
                            borderWidth: 1,
                            width: "100%",
                            minHeight: 70
                        })
                    }
                >
                    {await (<ViewElement.Elements.CenterAddition.Methods.Initialize/>)}
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof ViewElement.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            ViewElement.Properties.Listeners.Initialize();
            ViewElement.Elements.CenterAddition.Methods.InitializeListeners();
        }
        //#endregion
    }

    public static Elements = class Elements {
        public static CenterAddition = CenterAddition;
    }


    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            ViewElement.Methods.Element = this;
            ViewElement.Properties.Position.Element = this;
            ViewElement.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            ViewElement.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}