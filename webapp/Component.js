sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/bootcamp/sapui5/sapguide/model/models",
    "com/bootcamp/sapui5/sapguide/utils/HomeHelper",

], (UIComponent, models, HomeHelper) => {
    "use strict";

    return UIComponent.extend("com.bootcamp.sapui5.sapguide.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            this.initializeHomeLibrary();
        },

        initializeHomeLibrary(){
            HomeHelper.init(this.getModel())
        }
    });
});