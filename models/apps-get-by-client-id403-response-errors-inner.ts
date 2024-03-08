/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetByClientId403ResponseErrorsInnerSource } from './apps-get-by-client-id403-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsGetByClientId403ResponseErrorsInner
 */
export interface AppsGetByClientId403ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsGetByClientId403ResponseErrorsInnerSource}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'source'?: AppsGetByClientId403ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsGetByClientId403ResponseErrorsInner
     */
    'status': string;
}

