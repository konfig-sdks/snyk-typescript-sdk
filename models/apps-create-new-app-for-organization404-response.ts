/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateNewAppForOrganization404ResponseErrorsInner } from './apps-create-new-app-for-organization404-response-errors-inner';
import { AppsCreateNewAppForOrganization404ResponseJsonapi } from './apps-create-new-app-for-organization404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateNewAppForOrganization404Response
 */
export interface AppsCreateNewAppForOrganization404Response {
    /**
     * 
     * @type {Array<AppsCreateNewAppForOrganization404ResponseErrorsInner>}
     * @memberof AppsCreateNewAppForOrganization404Response
     */
    'errors': Array<AppsCreateNewAppForOrganization404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateNewAppForOrganization404ResponseJsonapi}
     * @memberof AppsCreateNewAppForOrganization404Response
     */
    'jsonapi': AppsCreateNewAppForOrganization404ResponseJsonapi;
}

