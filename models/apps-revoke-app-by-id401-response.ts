/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeAppById401ResponseErrorsInner } from './apps-revoke-app-by-id401-response-errors-inner';
import { AppsRevokeAppById401ResponseJsonapi } from './apps-revoke-app-by-id401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeAppById401Response
 */
export interface AppsRevokeAppById401Response {
    /**
     * 
     * @type {Array<AppsRevokeAppById401ResponseErrorsInner>}
     * @memberof AppsRevokeAppById401Response
     */
    'errors': Array<AppsRevokeAppById401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeAppById401ResponseJsonapi}
     * @memberof AppsRevokeAppById401Response
     */
    'jsonapi': AppsRevokeAppById401ResponseJsonapi;
}
