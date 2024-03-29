/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeUserAppSession404ResponseErrorsInner } from './apps-revoke-user-app-session404-response-errors-inner';
import { AppsRevokeUserAppSession404ResponseJsonapi } from './apps-revoke-user-app-session404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeUserAppSession404Response
 */
export interface AppsRevokeUserAppSession404Response {
    /**
     * 
     * @type {Array<AppsRevokeUserAppSession404ResponseErrorsInner>}
     * @memberof AppsRevokeUserAppSession404Response
     */
    'errors': Array<AppsRevokeUserAppSession404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeUserAppSession404ResponseJsonapi}
     * @memberof AppsRevokeUserAppSession404Response
     */
    'jsonapi': AppsRevokeUserAppSession404ResponseJsonapi;
}

