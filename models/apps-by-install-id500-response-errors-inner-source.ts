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
 * @interface AppsByInstallId500ResponseErrorsInnerSource
 */
export interface AppsByInstallId500ResponseErrorsInnerSource {
    /**
     * A string indicating which URI query parameter caused the error.
     * @type {string}
     * @memberof AppsByInstallId500ResponseErrorsInnerSource
     */
    'parameter'?: string;
    /**
     * A JSON Pointer [RFC6901] to the associated entity in the request document.
     * @type {string}
     * @memberof AppsByInstallId500ResponseErrorsInnerSource
     */
    'pointer'?: string;
}

