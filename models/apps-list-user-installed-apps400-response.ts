/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListUserInstalledApps400ResponseErrorsInner } from './apps-list-user-installed-apps400-response-errors-inner';
import { AppsListUserInstalledApps400ResponseJsonapi } from './apps-list-user-installed-apps400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListUserInstalledApps400Response
 */
export interface AppsListUserInstalledApps400Response {
    /**
     * 
     * @type {Array<AppsListUserInstalledApps400ResponseErrorsInner>}
     * @memberof AppsListUserInstalledApps400Response
     */
    'errors': Array<AppsListUserInstalledApps400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListUserInstalledApps400ResponseJsonapi}
     * @memberof AppsListUserInstalledApps400Response
     */
    'jsonapi': AppsListUserInstalledApps400ResponseJsonapi;
}
