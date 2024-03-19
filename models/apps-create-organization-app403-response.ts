/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateOrganizationApp403ResponseErrorsInner } from './apps-create-organization-app403-response-errors-inner';
import { AppsCreateOrganizationApp403ResponseJsonapi } from './apps-create-organization-app403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateOrganizationApp403Response
 */
export interface AppsCreateOrganizationApp403Response {
    /**
     * 
     * @type {Array<AppsCreateOrganizationApp403ResponseErrorsInner>}
     * @memberof AppsCreateOrganizationApp403Response
     */
    'errors': Array<AppsCreateOrganizationApp403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateOrganizationApp403ResponseJsonapi}
     * @memberof AppsCreateOrganizationApp403Response
     */
    'jsonapi': AppsCreateOrganizationApp403ResponseJsonapi;
}

