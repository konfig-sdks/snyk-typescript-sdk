/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeGroupAppInstall403ResponseErrorsInner } from './apps-revoke-group-app-install403-response-errors-inner';
import { AppsRevokeGroupAppInstall403ResponseJsonapi } from './apps-revoke-group-app-install403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeGroupAppInstall403Response
 */
export interface AppsRevokeGroupAppInstall403Response {
    /**
     * 
     * @type {Array<AppsRevokeGroupAppInstall403ResponseErrorsInner>}
     * @memberof AppsRevokeGroupAppInstall403Response
     */
    'errors': Array<AppsRevokeGroupAppInstall403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeGroupAppInstall403ResponseJsonapi}
     * @memberof AppsRevokeGroupAppInstall403Response
     */
    'jsonapi': AppsRevokeGroupAppInstall403ResponseJsonapi;
}

