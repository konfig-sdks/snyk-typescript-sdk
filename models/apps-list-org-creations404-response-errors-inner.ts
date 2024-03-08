/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListOrgCreations404ResponseErrorsInnerSource } from './apps-list-org-creations404-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsListOrgCreations404ResponseErrorsInner
 */
export interface AppsListOrgCreations404ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsListOrgCreations404ResponseErrorsInnerSource}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'source'?: AppsListOrgCreations404ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsListOrgCreations404ResponseErrorsInner
     */
    'status': string;
}
