/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeBotAuthorization404ResponseErrorsInnerSource } from './apps-revoke-bot-authorization404-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsRevokeBotAuthorization404ResponseErrorsInner
 */
export interface AppsRevokeBotAuthorization404ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsRevokeBotAuthorization404ResponseErrorsInnerSource}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'source'?: AppsRevokeBotAuthorization404ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeBotAuthorization404ResponseErrorsInner
     */
    'status': string;
}
