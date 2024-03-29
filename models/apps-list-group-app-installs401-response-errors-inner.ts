/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListGroupAppInstalls401ResponseErrorsInnerSource } from './apps-list-group-app-installs401-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsListGroupAppInstalls401ResponseErrorsInner
 */
export interface AppsListGroupAppInstalls401ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsListGroupAppInstalls401ResponseErrorsInnerSource}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'source'?: AppsListGroupAppInstalls401ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsListGroupAppInstalls401ResponseErrorsInner
     */
    'status': string;
}

