var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as strings from 'InsertCustomCssApplicationCustomizerStrings';
var LOG_SOURCE = 'InsertCustomCssApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var InsertCustomCssApplicationCustomizer = /** @class */ (function (_super) {
    __extends(InsertCustomCssApplicationCustomizer, _super);
    function InsertCustomCssApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsertCustomCssApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized ".concat(strings.Title));
        var cssUrl = this.context.pageContext.site.absoluteUrl + this.properties.urlCustomCss + "?v=" + (new Date().getTime()); // prevent caching
        var headDOM = document.getElementsByTagName("head")[0] || document.documentElement;
        var customStyle = document.createElement("link");
        customStyle.href = cssUrl;
        customStyle.rel = "stylesheet";
        customStyle.type = "text/css";
        headDOM.insertAdjacentElement("beforeEnd", customStyle);
        return Promise.resolve();
    };
    return InsertCustomCssApplicationCustomizer;
}(BaseApplicationCustomizer));
export default InsertCustomCssApplicationCustomizer;
//# sourceMappingURL=InsertCustomCssApplicationCustomizer.js.map