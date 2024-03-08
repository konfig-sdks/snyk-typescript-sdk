/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListGroupAppInstalls404ResponseErrorsInnerSource } from './apps-list-group-app-installs404-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsListGroupAppInstalls404ResponseErrorsInner
 */
export interface AppsListGroupAppInstalls404ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsListGroupAppInstalls404ResponseErrorsInnerSource}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'source'?: AppsListGroupAppInstalls404ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsListGroupAppInstalls404ResponseErrorsInner
     */
    'status': string;
}

