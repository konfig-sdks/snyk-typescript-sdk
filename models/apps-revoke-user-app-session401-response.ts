/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeUserAppSession401ResponseErrorsInner } from './apps-revoke-user-app-session401-response-errors-inner';
import { AppsRevokeUserAppSession401ResponseJsonapi } from './apps-revoke-user-app-session401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeUserAppSession401Response
 */
export interface AppsRevokeUserAppSession401Response {
    /**
     * 
     * @type {Array<AppsRevokeUserAppSession401ResponseErrorsInner>}
     * @memberof AppsRevokeUserAppSession401Response
     */
    'errors': Array<AppsRevokeUserAppSession401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeUserAppSession401ResponseJsonapi}
     * @memberof AppsRevokeUserAppSession401Response
     */
    'jsonapi': AppsRevokeUserAppSession401ResponseJsonapi;
}

