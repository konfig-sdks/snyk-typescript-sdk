/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeUserAppSession403ResponseErrorsInner } from './apps-revoke-user-app-session403-response-errors-inner';
import { AppsRevokeUserAppSession403ResponseJsonapi } from './apps-revoke-user-app-session403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeUserAppSession403Response
 */
export interface AppsRevokeUserAppSession403Response {
    /**
     * 
     * @type {Array<AppsRevokeUserAppSession403ResponseErrorsInner>}
     * @memberof AppsRevokeUserAppSession403Response
     */
    'errors': Array<AppsRevokeUserAppSession403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeUserAppSession403ResponseJsonapi}
     * @memberof AppsRevokeUserAppSession403Response
     */
    'jsonapi': AppsRevokeUserAppSession403ResponseJsonapi;
}
