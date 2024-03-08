/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsUpdateAttributes400ResponseErrorsInnerSource } from './apps-update-attributes400-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsUpdateAttributes400ResponseErrorsInner
 */
export interface AppsUpdateAttributes400ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsUpdateAttributes400ResponseErrorsInnerSource}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'source'?: AppsUpdateAttributes400ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsUpdateAttributes400ResponseErrorsInner
     */
    'status': string;
}

