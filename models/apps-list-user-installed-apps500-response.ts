/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListUserInstalledApps500ResponseErrorsInner } from './apps-list-user-installed-apps500-response-errors-inner';
import { AppsListUserInstalledApps500ResponseJsonapi } from './apps-list-user-installed-apps500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListUserInstalledApps500Response
 */
export interface AppsListUserInstalledApps500Response {
    /**
     * 
     * @type {Array<AppsListUserInstalledApps500ResponseErrorsInner>}
     * @memberof AppsListUserInstalledApps500Response
     */
    'errors': Array<AppsListUserInstalledApps500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListUserInstalledApps500ResponseJsonapi}
     * @memberof AppsListUserInstalledApps500Response
     */
    'jsonapi': AppsListUserInstalledApps500ResponseJsonapi;
}

