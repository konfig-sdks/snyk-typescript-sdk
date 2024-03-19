/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsUpdateAttributes401ResponseErrorsInner } from './apps-update-attributes401-response-errors-inner';
import { AppsUpdateAttributes401ResponseJsonapi } from './apps-update-attributes401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsUpdateAttributes401Response
 */
export interface AppsUpdateAttributes401Response {
    /**
     * 
     * @type {Array<AppsUpdateAttributes401ResponseErrorsInner>}
     * @memberof AppsUpdateAttributes401Response
     */
    'errors': Array<AppsUpdateAttributes401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsUpdateAttributes401ResponseJsonapi}
     * @memberof AppsUpdateAttributes401Response
     */
    'jsonapi': AppsUpdateAttributes401ResponseJsonapi;
}

