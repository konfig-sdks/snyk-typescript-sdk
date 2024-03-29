/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListUserInstalledApps401ResponseErrorsInner } from './apps-list-user-installed-apps401-response-errors-inner';
import { AppsListUserInstalledApps401ResponseJsonapi } from './apps-list-user-installed-apps401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListUserInstalledApps401Response
 */
export interface AppsListUserInstalledApps401Response {
    /**
     * 
     * @type {Array<AppsListUserInstalledApps401ResponseErrorsInner>}
     * @memberof AppsListUserInstalledApps401Response
     */
    'errors': Array<AppsListUserInstalledApps401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListUserInstalledApps401ResponseJsonapi}
     * @memberof AppsListUserInstalledApps401Response
     */
    'jsonapi': AppsListUserInstalledApps401ResponseJsonapi;
}

