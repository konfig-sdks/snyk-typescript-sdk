/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeAppById409ResponseErrorsInnerSource } from './apps-revoke-app-by-id409-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsRevokeAppById409ResponseErrorsInner
 */
export interface AppsRevokeAppById409ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsRevokeAppById409ResponseErrorsInnerSource}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'source'?: AppsRevokeAppById409ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeAppById409ResponseErrorsInner
     */
    'status': string;
}

