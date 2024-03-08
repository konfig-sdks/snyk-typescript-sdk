/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsDeleteByAppIdResponseErrorsInnerSource } from './apps-delete-by-app-id-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsDeleteByAppIdResponseErrorsInner
 */
export interface AppsDeleteByAppIdResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsDeleteByAppIdResponseErrorsInnerSource}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'source'?: AppsDeleteByAppIdResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsDeleteByAppIdResponseErrorsInner
     */
    'status': string;
}

