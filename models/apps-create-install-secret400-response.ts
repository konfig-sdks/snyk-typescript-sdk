/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateInstallSecret400ResponseErrorsInner } from './apps-create-install-secret400-response-errors-inner';
import { AppsCreateInstallSecret400ResponseJsonapi } from './apps-create-install-secret400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecret400Response
 */
export interface AppsCreateInstallSecret400Response {
    /**
     * 
     * @type {Array<AppsCreateInstallSecret400ResponseErrorsInner>}
     * @memberof AppsCreateInstallSecret400Response
     */
    'errors': Array<AppsCreateInstallSecret400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateInstallSecret400ResponseJsonapi}
     * @memberof AppsCreateInstallSecret400Response
     */
    'jsonapi': AppsCreateInstallSecret400ResponseJsonapi;
}
