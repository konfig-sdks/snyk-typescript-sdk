/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetActiveSessions400ResponseErrorsInnerSource } from './apps-get-active-sessions400-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsGetActiveSessions400ResponseErrorsInner
 */
export interface AppsGetActiveSessions400ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsGetActiveSessions400ResponseErrorsInnerSource}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'source'?: AppsGetActiveSessions400ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsGetActiveSessions400ResponseErrorsInner
     */
    'status': string;
}

