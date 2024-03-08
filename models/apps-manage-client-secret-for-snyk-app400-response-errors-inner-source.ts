/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AppsManageClientSecretForSnykApp400ResponseErrorsInnerSource
 */
export interface AppsManageClientSecretForSnykApp400ResponseErrorsInnerSource {
    /**
     * A string indicating which URI query parameter caused the error.
     * @type {string}
     * @memberof AppsManageClientSecretForSnykApp400ResponseErrorsInnerSource
     */
    'parameter'?: string;
    /**
     * A JSON Pointer [RFC6901] to the associated entity in the request document.
     * @type {string}
     * @memberof AppsManageClientSecretForSnykApp400ResponseErrorsInnerSource
     */
    'pointer'?: string;
}
