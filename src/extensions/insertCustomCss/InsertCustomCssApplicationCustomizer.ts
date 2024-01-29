import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';

import * as strings from 'InsertCustomCssApplicationCustomizerStrings';

const LOG_SOURCE: string = 'InsertCustomCssApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IInsertCustomCssApplicationCustomizerProperties {
    urlCustomCss: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class InsertCustomCssApplicationCustomizer
  extends BaseApplicationCustomizer<IInsertCustomCssApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    const cssUrl: string = this.context.pageContext.site.absoluteUrl + this.properties.urlCustomCss + "?v=" + (new Date().getTime()); // prevent caching
    
    const headDOM: any = document.getElementsByTagName("head")[0] || document.documentElement;
    const customStyle: HTMLLinkElement = document.createElement("link");
    customStyle.href = cssUrl;
    customStyle.rel = "stylesheet";
    customStyle.type = "text/css";
    headDOM.insertAdjacentElement("beforeEnd", customStyle);

    Log.info(LOG_SOURCE, "Css injected");

    return Promise.resolve();
  }
}
