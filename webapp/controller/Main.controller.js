sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library"
], (Controller, mobileLibrary) => {
    "use strict";

    return Controller.extend("com.bootcamp.sapui5.sapguide.controller.Main", {
        onInit() {
        },

        formatMail: function(sFirstName, sLastName) {
			const oBundle = this.getView().getModel("i18n").getResourceBundle();

			return mobileLibrary.URLHelper.normalizeEmail(
				`${sFirstName}.${sLastName}@example.com`,
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		}
    });
});