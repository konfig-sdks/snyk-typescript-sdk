/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeBotAuthorization401ResponseErrorsInnerSource } from './apps-revoke-bot-authorization401-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsRevokeBotAuthorization401ResponseErrorsInner
 */
export interface AppsRevokeBotAuthorization401ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsRevokeBotAuthorization401ResponseErrorsInnerSource}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'source'?: AppsRevokeBotAuthorization401ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization401ResponseErrorsInner
     */
    'status': string;
}

