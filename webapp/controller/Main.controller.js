sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/bootcamp/sapui5/sapguide/utils/HomeHelper",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Filter",
    "sap/ui/model/json/JSONModel",
], (Controller, HomeHelper, FilterOperator, Filter) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.sapguide.controller.Main", {
        onInit() {
            
            let oDatos = this.initializeAndRetrieveProducts()
        },

        async initializeAndRetrieveProducts (){
            let oDatos = await HomeHelper.getDataProducts([]); 
            const ProductStoreInitialState = {
                products: [],
                search: ""
            }

            ProductStoreInitialState.products = [...oDatos[0].results]

            await HomeHelper.setProductModel(this, ProductStoreInitialState, "ProductsStore")
            const algo = this.getOwnerComponent().getModel("ProductsStore").getData()
            console.log(algo, 'aca')
        }   

    });
});