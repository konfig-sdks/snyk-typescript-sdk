/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListOrgCreations404ResponseErrorsInner } from './apps-list-org-creations404-response-errors-inner';
import { AppsListOrgCreations404ResponseJsonapi } from './apps-list-org-creations404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListOrgCreations404Response
 */
export interface AppsListOrgCreations404Response {
    /**
     * 
     * @type {Array<AppsListOrgCreations404ResponseErrorsInner>}
     * @memberof AppsListOrgCreations404Response
     */
    'errors': Array<AppsListOrgCreations404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListOrgCreations404ResponseJsonapi}
     * @memberof AppsListOrgCreations404Response
     */
    'jsonapi': AppsListOrgCreations404ResponseJsonapi;
}

