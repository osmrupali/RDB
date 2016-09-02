sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";
	var id,name,s1,s2,s3,s4,tot,email;
	return Controller.extend("ResultDisplay.controller.View1", {
		
		/*
		"routing": {
				"config":
				{
					"routerClass": "sap.m.routing.Router",
					"viewType": "XML",
					"viewPath": "QuickStartApplication.view",
					"controlId": "App",
					"controlAggregation": "pages",
					"transition": "slide"
					
				},
				"routes": [
					{
						"pattern": "",
						"name": "appHome",
						"target": "home"
						
					},
					{
						"pattern": "detail",
						"name": "appDetail",
						"target": "detail"
						
					}
					],
					"targets": {
						"home": 
						{
							"viewName": "View1",
							"viewLevel": 1
							
						},
						"detail":
						{
							"viewName": "Result",
							"viewLevel": 2
							
						}
						
					}
				
			},
		*/
		onPress: function() {
			
            id = this.getView().byId("id").getValue();
            name = this.getView().byId("name").getValue();
            email = this.getView().byId("email").getValue();
            s1 = this.getView().byId("s1").getValue();
            s2 = this.getView().byId("s2").getValue();
            s3 = this.getView().byId("s3").getValue();
            s4 = this.getView().byId("s4").getValue();
            tot = this.getView().byId("tot").getValue();

            var oModel = new JSONModel(jQuery.sap.getModulePath("ResultDisplay.data", "/result.json"));
			this.getView().setModel(oModel);
			var aData = oModel.getProperty("/recipient");
            aData.push({ id: id, name: name,email: email, s1: s1, s2: s2, s3: s3, s4: s4, tot: tot });
            oModel.setProperty("/recipient", aData);
            
            
        }
        /*onClick: function(){
		       var oRouter =sap.ui.core.UIComponent.getRouterFor(this);
		       oRouter.navTo("appDetail");
        }*/
		
	});

});