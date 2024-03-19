/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListGroupAppInstalls403ResponseErrorsInnerSource } from './apps-list-group-app-installs403-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsListGroupAppInstalls403ResponseErrorsInner
 */
export interface AppsListGroupAppInstalls403ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsListGroupAppInstalls403ResponseErrorsInnerSource}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'source'?: AppsListGroupAppInstalls403ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsListGroupAppInstalls403ResponseErrorsInner
     */
    'status': string;
}

