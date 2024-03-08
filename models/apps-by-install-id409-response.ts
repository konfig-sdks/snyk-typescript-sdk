/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsByInstallId409ResponseErrorsInner } from './apps-by-install-id409-response-errors-inner';
import { AppsByInstallId409ResponseJsonapi } from './apps-by-install-id409-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsByInstallId409Response
 */
export interface AppsByInstallId409Response {
    /**
     * 
     * @type {Array<AppsByInstallId409ResponseErrorsInner>}
     * @memberof AppsByInstallId409Response
     */
    'errors': Array<AppsByInstallId409ResponseErrorsInner>;
    /**
     * 
     * @type {AppsByInstallId409ResponseJsonapi}
     * @memberof AppsByInstallId409Response
     */
    'jsonapi': AppsByInstallId409ResponseJsonapi;
}
