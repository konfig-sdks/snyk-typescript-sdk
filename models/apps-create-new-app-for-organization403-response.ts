/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateNewAppForOrganization403ResponseErrorsInner } from './apps-create-new-app-for-organization403-response-errors-inner';
import { AppsCreateNewAppForOrganization403ResponseJsonapi } from './apps-create-new-app-for-organization403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateNewAppForOrganization403Response
 */
export interface AppsCreateNewAppForOrganization403Response {
    /**
     * 
     * @type {Array<AppsCreateNewAppForOrganization403ResponseErrorsInner>}
     * @memberof AppsCreateNewAppForOrganization403Response
     */
    'errors': Array<AppsCreateNewAppForOrganization403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateNewAppForOrganization403ResponseJsonapi}
     * @memberof AppsCreateNewAppForOrganization403Response
     */
    'jsonapi': AppsCreateNewAppForOrganization403ResponseJsonapi;
}

