sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Text",
    "co/project1/js/Moment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller,Text,Moment) {
        "use strict";

        return Controller.extend("co.project1.controller.View1", {
            onAfterRendering: function () {
                var oPage = this.getView().byId("page");
                oPage.addContent(new Text({ text: Moment().format("[Today is] dddd") }));
            }
        });
    });
