/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateOrganizationApp404ResponseErrorsInner } from './apps-create-organization-app404-response-errors-inner';
import { AppsCreateOrganizationApp404ResponseJsonapi } from './apps-create-organization-app404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateOrganizationApp404Response
 */
export interface AppsCreateOrganizationApp404Response {
    /**
     * 
     * @type {Array<AppsCreateOrganizationApp404ResponseErrorsInner>}
     * @memberof AppsCreateOrganizationApp404Response
     */
    'errors': Array<AppsCreateOrganizationApp404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateOrganizationApp404ResponseJsonapi}
     * @memberof AppsCreateOrganizationApp404Response
     */
    'jsonapi': AppsCreateOrganizationApp404ResponseJsonapi;
}
