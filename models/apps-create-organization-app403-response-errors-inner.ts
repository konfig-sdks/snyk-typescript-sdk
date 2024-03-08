/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateOrganizationApp403ResponseErrorsInnerSource } from './apps-create-organization-app403-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsCreateOrganizationApp403ResponseErrorsInner
 */
export interface AppsCreateOrganizationApp403ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsCreateOrganizationApp403ResponseErrorsInnerSource}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'source'?: AppsCreateOrganizationApp403ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsCreateOrganizationApp403ResponseErrorsInner
     */
    'status': string;
}

