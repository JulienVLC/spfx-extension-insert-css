import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IInsertCustomCssApplicationCustomizerProperties {
    urlCustomCss: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class InsertCustomCssApplicationCustomizer extends BaseApplicationCustomizer<IInsertCustomCssApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
//# sourceMappingURL=InsertCustomCssApplicationCustomizer.d.ts.map