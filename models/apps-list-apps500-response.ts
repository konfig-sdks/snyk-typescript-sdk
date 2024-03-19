/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListApps500ResponseErrorsInner } from './apps-list-apps500-response-errors-inner';
import { AppsListApps500ResponseJsonapi } from './apps-list-apps500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListApps500Response
 */
export interface AppsListApps500Response {
    /**
     * 
     * @type {Array<AppsListApps500ResponseErrorsInner>}
     * @memberof AppsListApps500Response
     */
    'errors': Array<AppsListApps500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListApps500ResponseJsonapi}
     * @memberof AppsListApps500Response
     */
    'jsonapi': AppsListApps500ResponseJsonapi;
}

