/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListOrgInstalls409ResponseErrorsInnerSource } from './apps-list-org-installs409-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsListOrgInstalls409ResponseErrorsInner
 */
export interface AppsListOrgInstalls409ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsListOrgInstalls409ResponseErrorsInnerSource}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'source'?: AppsListOrgInstalls409ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsListOrgInstalls409ResponseErrorsInner
     */
    'status': string;
}

