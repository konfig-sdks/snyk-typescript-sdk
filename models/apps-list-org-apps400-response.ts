/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListOrgApps400ResponseErrorsInner } from './apps-list-org-apps400-response-errors-inner';
import { AppsListOrgApps400ResponseJsonapi } from './apps-list-org-apps400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListOrgApps400Response
 */
export interface AppsListOrgApps400Response {
    /**
     * 
     * @type {Array<AppsListOrgApps400ResponseErrorsInner>}
     * @memberof AppsListOrgApps400Response
     */
    'errors': Array<AppsListOrgApps400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListOrgApps400ResponseJsonapi}
     * @memberof AppsListOrgApps400Response
     */
    'jsonapi': AppsListOrgApps400ResponseJsonapi;
}
