/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateNewAppForOrganization401ResponseErrorsInner } from './apps-create-new-app-for-organization401-response-errors-inner';
import { AppsCreateNewAppForOrganization401ResponseJsonapi } from './apps-create-new-app-for-organization401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateNewAppForOrganization401Response
 */
export interface AppsCreateNewAppForOrganization401Response {
    /**
     * 
     * @type {Array<AppsCreateNewAppForOrganization401ResponseErrorsInner>}
     * @memberof AppsCreateNewAppForOrganization401Response
     */
    'errors': Array<AppsCreateNewAppForOrganization401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateNewAppForOrganization401ResponseJsonapi}
     * @memberof AppsCreateNewAppForOrganization401Response
     */
    'jsonapi': AppsCreateNewAppForOrganization401ResponseJsonapi;
}

