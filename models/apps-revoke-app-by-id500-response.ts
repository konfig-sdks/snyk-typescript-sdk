/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeAppById500ResponseErrorsInner } from './apps-revoke-app-by-id500-response-errors-inner';
import { AppsRevokeAppById500ResponseJsonapi } from './apps-revoke-app-by-id500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeAppById500Response
 */
export interface AppsRevokeAppById500Response {
    /**
     * 
     * @type {Array<AppsRevokeAppById500ResponseErrorsInner>}
     * @memberof AppsRevokeAppById500Response
     */
    'errors': Array<AppsRevokeAppById500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeAppById500ResponseJsonapi}
     * @memberof AppsRevokeAppById500Response
     */
    'jsonapi': AppsRevokeAppById500ResponseJsonapi;
}
