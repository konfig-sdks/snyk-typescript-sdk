/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateNewAppForOrganizationResponseErrorsInner } from './apps-create-new-app-for-organization-response-errors-inner';
import { AppsCreateNewAppForOrganizationResponseJsonapi } from './apps-create-new-app-for-organization-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateNewAppForOrganizationResponse
 */
export interface AppsCreateNewAppForOrganizationResponse {
    /**
     * 
     * @type {Array<AppsCreateNewAppForOrganizationResponseErrorsInner>}
     * @memberof AppsCreateNewAppForOrganizationResponse
     */
    'errors': Array<AppsCreateNewAppForOrganizationResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateNewAppForOrganizationResponseJsonapi}
     * @memberof AppsCreateNewAppForOrganizationResponse
     */
    'jsonapi': AppsCreateNewAppForOrganizationResponseJsonapi;
}
