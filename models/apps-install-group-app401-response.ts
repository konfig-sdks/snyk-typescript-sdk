/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsInstallGroupApp401ResponseErrorsInner } from './apps-install-group-app401-response-errors-inner';
import { AppsInstallGroupApp401ResponseJsonapi } from './apps-install-group-app401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsInstallGroupApp401Response
 */
export interface AppsInstallGroupApp401Response {
    /**
     * 
     * @type {Array<AppsInstallGroupApp401ResponseErrorsInner>}
     * @memberof AppsInstallGroupApp401Response
     */
    'errors': Array<AppsInstallGroupApp401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsInstallGroupApp401ResponseJsonapi}
     * @memberof AppsInstallGroupApp401Response
     */
    'jsonapi': AppsInstallGroupApp401ResponseJsonapi;
}

