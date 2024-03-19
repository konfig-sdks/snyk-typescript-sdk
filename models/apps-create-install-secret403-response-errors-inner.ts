/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateInstallSecret403ResponseErrorsInnerSource } from './apps-create-install-secret403-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecret403ResponseErrorsInner
 */
export interface AppsCreateInstallSecret403ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsCreateInstallSecret403ResponseErrorsInnerSource}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'source'?: AppsCreateInstallSecret403ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateInstallSecret403ResponseErrorsInner
     */
    'status': string;
}

