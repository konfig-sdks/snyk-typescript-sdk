/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsUpdateCreationAttributesById400ResponseErrorsInnerSource } from './apps-update-creation-attributes-by-id400-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsUpdateCreationAttributesById400ResponseErrorsInner
 */
export interface AppsUpdateCreationAttributesById400ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsUpdateCreationAttributesById400ResponseErrorsInnerSource}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'source'?: AppsUpdateCreationAttributesById400ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsUpdateCreationAttributesById400ResponseErrorsInner
     */
    'status': string;
}

