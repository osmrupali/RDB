sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("ResultDisplay.controller.Result", {

			onInit: function() {
				var oModel = new JSONModel(jQuery.sap.getModulePath("ResultDisplay.data", "/result.json"));
        		this.getView().setModel(oModel);
        		this.getView().bindElement("/recipient/0");
			}

	

	});

});