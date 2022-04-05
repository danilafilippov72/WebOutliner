import { React } from "../../../../../../../../../../../ReactTSX";
import { Element as ElementO } from "../../../Element/Element";
import { Listeners } from "../../../Element/Properties/Listeners";
import { Position } from "../../../Element/Properties/Position";
import { Style } from "../../../Element/Properties/Style";
import { InstanceObject } from "./Elements/InstanceObject/InstanceObject";
import { Router } from "./Elements/Router/Router";

export class Node {
    //#region InstanceREferenceOnStatic
    public Properties = Node.Properties;
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
    public Methods = Node.Methods;
    //#endregion
    public static Methods = class Methods {
        public static async Initialize(properties: { Instance }) {
            Node.Elements.InstanceObject.Elements.ObjectTab.Elements.Description.Elements.Node = Node;
            Node.Properties.Listeners.MouseEventHandler = {
                structureElementClass: "TabNode",
                HoldingDelay: 500,
                DoubleClickDelay: 200,
                Click: (element: ElementO) => {
                    console.log("Click")
                },
                HoldingClick: (element: ElementO) => {
                    console.log("Holding")
                    //const StructureElement = Document.Methods.findStructureElementByItsAttribute(event, new Document.Elements.StructureElement.Properties.Class("TabASM"));
                    Node.Properties.Position.RelativeToWindow.State = "Moving";
                    /* const TabBorder: (typeof Style.BorderI) = {
                        borderType: "solid",
                        borderWidth: 1,

                        borderRadius: 15
                    }; */

                    //new Document.Elements.StructureElement(structureElement.htmlElement).Properties.Style.Border = TabBorder;
                },
                DoubleClick: () => {
                    console.log("DoubleClick")
                },
                DoubleHoldingClick: () => {
                    console.log("DoubleHoldingClick")
                }
            }
            return (
                <div
                    class="Node"
                    Style={
                        Node.Properties.Style.newDisplay("Grid")
                        + `
                        width: fit-content;
                            grid-template:
                            "Router InstanceObject" auto
                            "ElementsConnections InstanceElements" auto
                            /  auto auto;
                        `
                    }
                >
                    {await (<Node.Elements.Router.Methods.Initialize />)}
                    {await (<Node.Elements.InstanceObject.Methods.Initialize Instance={properties.Instance}/>)}
                </div>
            )
        }
        //#region InstanceReference
        public static Element: typeof Element.prototype;
        //#endregion
        //#region InitializeListeners
        public static InitializeListeners() {
            Node.Properties.Listeners.Initialize();
        }
        //#endregion
    }

    public static Elements = class Elements {
        public static Router = Router;
        public static InstanceObject = InstanceObject;
    }

    //#region Constructor
    constructor(HTMLElement: HTMLElement) {
        SetReferencesOnImportProperties();
        SetHTMLElement();

        function SetReferencesOnImportProperties() {
            Node.Methods.Element = this;
            Node.Properties.Position.Element = this;
            Node.Properties.Style.Element = this;
        }
        function SetHTMLElement() {
            this.Properties.htmlElement = HTMLElement;
        }
    }
    //#endregion
}



/* 
grid-template:
                            "structureLineFromChild margin margin margin margin margin" auto
                            "structureLineFromChild q upperRouter upperRouter favicon nodeName" 1fr
                            "structureLineFromChild leftLine router router favicon nodeName" 11px
                            "structureLineFromChild w lowerRouter lowerRouter favicon nodeName" 1fr
                            "structureLineFromChild structureLine structureLine treeContent  treeContent  treeContent" auto
                            "structureLineFromChild bottomMargin  bottomMargin  bottomMargin bottomMargin bottomMargin" auto
                            / 0px auto auto auto auto 1fr;
                             */