sap.ui.define([
    "com/bootcamp/sapui5/sapguide/utils/HomeService",
    "sap/ui/model/json/JSONModel",
    "com/bootcamp/sapui5/sapguide/utils/HomeHelper",
], function (HomeService, JSONModel){
    "use strict"

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;

		},
        
		getProposalBystatus: async function(oFilters) {
            //let oFilters = [];
            return HomeService.readProducts(this._oNorthwindModel, oFilters);
        },
        
        getDataProducts: async function (oFilters){
            console.log(oFilters, 'filtros in fn')
            // let oFilters = [];
            console.log(this._oNorthwindModel,oFilters, 'this._oNorthwindModel')
            return await HomeService.readProducts(this._oNorthwindModel, oFilters)
        },

        setProductModel: async function (oController, oDatos, ModelName) {
            let oListModel = oController.getOwnerComponent().getModel(ModelName || "Model1");
            if(!oListModel){
                const oModel  = new JSONModel([]);
                oModel.setSizeLimit(1000000);	
                oController.getOwnerComponent().setModel(oModel, ModelName || "Model1");  
                oListModel = oController.getOwnerComponent().getModel(ModelName || "Model1");
            }
            
            oListModel.setData(oDatos);
        },

    }
}

)