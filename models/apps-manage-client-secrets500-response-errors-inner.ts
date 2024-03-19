/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecrets500ResponseErrorsInnerSource } from './apps-manage-client-secrets500-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsManageClientSecrets500ResponseErrorsInner
 */
export interface AppsManageClientSecrets500ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsManageClientSecrets500ResponseErrorsInnerSource}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'source'?: AppsManageClientSecrets500ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsManageClientSecrets500ResponseErrorsInner
     */
    'status': string;
}

