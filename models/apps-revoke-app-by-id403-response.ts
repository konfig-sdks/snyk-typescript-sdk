/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeAppById403ResponseErrorsInner } from './apps-revoke-app-by-id403-response-errors-inner';
import { AppsRevokeAppById403ResponseJsonapi } from './apps-revoke-app-by-id403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeAppById403Response
 */
export interface AppsRevokeAppById403Response {
    /**
     * 
     * @type {Array<AppsRevokeAppById403ResponseErrorsInner>}
     * @memberof AppsRevokeAppById403Response
     */
    'errors': Array<AppsRevokeAppById403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeAppById403ResponseJsonapi}
     * @memberof AppsRevokeAppById403Response
     */
    'jsonapi': AppsRevokeAppById403ResponseJsonapi;
}

