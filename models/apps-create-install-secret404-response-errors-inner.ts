/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateInstallSecret404ResponseErrorsInnerSource } from './apps-create-install-secret404-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecret404ResponseErrorsInner
 */
export interface AppsCreateInstallSecret404ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsCreateInstallSecret404ResponseErrorsInnerSource}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'source'?: AppsCreateInstallSecret404ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateInstallSecret404ResponseErrorsInner
     */
    'status': string;
}

