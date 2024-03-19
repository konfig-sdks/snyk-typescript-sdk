/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetActiveSessions400ResponseErrorsInner } from './apps-get-active-sessions400-response-errors-inner';
import { AppsGetActiveSessions400ResponseJsonapi } from './apps-get-active-sessions400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsGetActiveSessions400Response
 */
export interface AppsGetActiveSessions400Response {
    /**
     * 
     * @type {Array<AppsGetActiveSessions400ResponseErrorsInner>}
     * @memberof AppsGetActiveSessions400Response
     */
    'errors': Array<AppsGetActiveSessions400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsGetActiveSessions400ResponseJsonapi}
     * @memberof AppsGetActiveSessions400Response
     */
    'jsonapi': AppsGetActiveSessions400ResponseJsonapi;
}

