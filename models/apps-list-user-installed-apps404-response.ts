/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListUserInstalledApps404ResponseErrorsInner } from './apps-list-user-installed-apps404-response-errors-inner';
import { AppsListUserInstalledApps404ResponseJsonapi } from './apps-list-user-installed-apps404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListUserInstalledApps404Response
 */
export interface AppsListUserInstalledApps404Response {
    /**
     * 
     * @type {Array<AppsListUserInstalledApps404ResponseErrorsInner>}
     * @memberof AppsListUserInstalledApps404Response
     */
    'errors': Array<AppsListUserInstalledApps404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListUserInstalledApps404ResponseJsonapi}
     * @memberof AppsListUserInstalledApps404Response
     */
    'jsonapi': AppsListUserInstalledApps404ResponseJsonapi;
}
