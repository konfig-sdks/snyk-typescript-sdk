/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsDeleteAppById404ResponseErrorsInnerSource } from './apps-delete-app-by-id404-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsDeleteAppById404ResponseErrorsInner
 */
export interface AppsDeleteAppById404ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsDeleteAppById404ResponseErrorsInnerSource}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'source'?: AppsDeleteAppById404ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsDeleteAppById404ResponseErrorsInner
     */
    'status': string;
}

