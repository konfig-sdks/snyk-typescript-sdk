/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListUserInstalledApps409ResponseErrorsInner } from './apps-list-user-installed-apps409-response-errors-inner';
import { AppsListUserInstalledApps409ResponseJsonapi } from './apps-list-user-installed-apps409-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListUserInstalledApps409Response
 */
export interface AppsListUserInstalledApps409Response {
    /**
     * 
     * @type {Array<AppsListUserInstalledApps409ResponseErrorsInner>}
     * @memberof AppsListUserInstalledApps409Response
     */
    'errors': Array<AppsListUserInstalledApps409ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListUserInstalledApps409ResponseJsonapi}
     * @memberof AppsListUserInstalledApps409Response
     */
    'jsonapi': AppsListUserInstalledApps409ResponseJsonapi;
}

