/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeUserAppSession500ResponseErrorsInner } from './apps-revoke-user-app-session500-response-errors-inner';
import { AppsRevokeUserAppSession500ResponseJsonapi } from './apps-revoke-user-app-session500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeUserAppSession500Response
 */
export interface AppsRevokeUserAppSession500Response {
    /**
     * 
     * @type {Array<AppsRevokeUserAppSession500ResponseErrorsInner>}
     * @memberof AppsRevokeUserAppSession500Response
     */
    'errors': Array<AppsRevokeUserAppSession500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeUserAppSession500ResponseJsonapi}
     * @memberof AppsRevokeUserAppSession500Response
     */
    'jsonapi': AppsRevokeUserAppSession500ResponseJsonapi;
}
