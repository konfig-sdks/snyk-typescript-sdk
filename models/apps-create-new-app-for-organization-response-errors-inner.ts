/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateNewAppForOrganizationResponseErrorsInnerSource } from './apps-create-new-app-for-organization-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsCreateNewAppForOrganizationResponseErrorsInner
 */
export interface AppsCreateNewAppForOrganizationResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsCreateNewAppForOrganizationResponseErrorsInnerSource}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'source'?: AppsCreateNewAppForOrganizationResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateNewAppForOrganizationResponseErrorsInner
     */
    'status': string;
}

