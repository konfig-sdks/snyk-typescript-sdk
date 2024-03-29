/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsUpdateCreationAttributesById500ResponseErrorsInner } from './apps-update-creation-attributes-by-id500-response-errors-inner';
import { AppsUpdateCreationAttributesById500ResponseJsonapi } from './apps-update-creation-attributes-by-id500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsUpdateCreationAttributesById500Response
 */
export interface AppsUpdateCreationAttributesById500Response {
    /**
     * 
     * @type {Array<AppsUpdateCreationAttributesById500ResponseErrorsInner>}
     * @memberof AppsUpdateCreationAttributesById500Response
     */
    'errors': Array<AppsUpdateCreationAttributesById500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsUpdateCreationAttributesById500ResponseJsonapi}
     * @memberof AppsUpdateCreationAttributesById500Response
     */
    'jsonapi': AppsUpdateCreationAttributesById500ResponseJsonapi;
}

