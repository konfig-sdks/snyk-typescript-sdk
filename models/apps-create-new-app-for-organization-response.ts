/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

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

