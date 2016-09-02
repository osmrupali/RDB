sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, History, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ResultDisplay.controller.Table", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf QuickStartApplication.view.Table
		 */
			onInit: function() {
						var oModel = new JSONModel(jQuery.sap.getModulePath("ResultDisplay.data", "/result.json"));
        				this.getView().setModel(oModel);
        				this.getView().bindElement("/recipient/0");
			},
			onFilterResults : function (oEvent) {

				// build filter array
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");
				if (sQuery) {
					aFilter.push(new Filter("id", FilterOperator.Contains, sQuery));
				}

				// filter binding
				var oList = this.getView().byId("results");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			},
			
			onResultPress: function(oEvent) {
				var oItem = oEvent.getSource();
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("student", {
				resultPath: oItem.getBindingContext("result").getPath().substr(1)
			});
			},
		
			onNavBack: function () {
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
	
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("welcome", true);
				}
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf QuickStartApplication.view.Table
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf QuickStartApplication.view.Table
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf QuickStartApplication.view.Table
		 */
		//	onExit: function() {
		//
		//	}

	});

});