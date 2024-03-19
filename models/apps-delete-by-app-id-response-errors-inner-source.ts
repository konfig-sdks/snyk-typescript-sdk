/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AppsDeleteByAppIdResponseErrorsInnerSource
 */
export interface AppsDeleteByAppIdResponseErrorsInnerSource {
    /**
     * A string indicating which URI query parameter caused the error.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInnerSource
     */
    'parameter'?: string;
    /**
     * A JSON Pointer [RFC6901] to the associated entity in the request document.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInnerSource
     */
    'pointer'?: string;
}

