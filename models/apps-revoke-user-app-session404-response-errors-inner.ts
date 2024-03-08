/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeUserAppSession404ResponseErrorsInnerSource } from './apps-revoke-user-app-session404-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsRevokeUserAppSession404ResponseErrorsInner
 */
export interface AppsRevokeUserAppSession404ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsRevokeUserAppSession404ResponseErrorsInnerSource}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'source'?: AppsRevokeUserAppSession404ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsRevokeUserAppSession404ResponseErrorsInner
     */
    'status': string;
}

