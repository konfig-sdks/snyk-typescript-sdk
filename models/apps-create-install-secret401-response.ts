/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateInstallSecret401ResponseErrorsInner } from './apps-create-install-secret401-response-errors-inner';
import { AppsCreateInstallSecret401ResponseJsonapi } from './apps-create-install-secret401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecret401Response
 */
export interface AppsCreateInstallSecret401Response {
    /**
     * 
     * @type {Array<AppsCreateInstallSecret401ResponseErrorsInner>}
     * @memberof AppsCreateInstallSecret401Response
     */
    'errors': Array<AppsCreateInstallSecret401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateInstallSecret401ResponseJsonapi}
     * @memberof AppsCreateInstallSecret401Response
     */
    'jsonapi': AppsCreateInstallSecret401ResponseJsonapi;
}

