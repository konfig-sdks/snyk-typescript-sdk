/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeGroupAppInstall500ResponseErrorsInner } from './apps-revoke-group-app-install500-response-errors-inner';
import { AppsRevokeGroupAppInstall500ResponseJsonapi } from './apps-revoke-group-app-install500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeGroupAppInstall500Response
 */
export interface AppsRevokeGroupAppInstall500Response {
    /**
     * 
     * @type {Array<AppsRevokeGroupAppInstall500ResponseErrorsInner>}
     * @memberof AppsRevokeGroupAppInstall500Response
     */
    'errors': Array<AppsRevokeGroupAppInstall500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeGroupAppInstall500ResponseJsonapi}
     * @memberof AppsRevokeGroupAppInstall500Response
     */
    'jsonapi': AppsRevokeGroupAppInstall500ResponseJsonapi;
}

