/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetByAppId409ResponseErrorsInnerSource } from './apps-get-by-app-id409-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsGetByAppId409ResponseErrorsInner
 */
export interface AppsGetByAppId409ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsGetByAppId409ResponseErrorsInnerSource}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'source'?: AppsGetByAppId409ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsGetByAppId409ResponseErrorsInner
     */
    'status': string;
}
