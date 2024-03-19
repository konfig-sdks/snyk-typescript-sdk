/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsDeleteAppByIdResponseErrorsInner } from './apps-delete-app-by-id-response-errors-inner';
import { AppsDeleteAppByIdResponseJsonapi } from './apps-delete-app-by-id-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsDeleteAppByIdResponse
 */
export interface AppsDeleteAppByIdResponse {
    /**
     * 
     * @type {Array<AppsDeleteAppByIdResponseErrorsInner>}
     * @memberof AppsDeleteAppByIdResponse
     */
    'errors': Array<AppsDeleteAppByIdResponseErrorsInner>;
    /**
     * 
     * @type {AppsDeleteAppByIdResponseJsonapi}
     * @memberof AppsDeleteAppByIdResponse
     */
    'jsonapi': AppsDeleteAppByIdResponseJsonapi;
}

