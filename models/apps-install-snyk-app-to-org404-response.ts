/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsInstallSnykAppToOrg404ResponseErrorsInner } from './apps-install-snyk-app-to-org404-response-errors-inner';
import { AppsInstallSnykAppToOrg404ResponseJsonapi } from './apps-install-snyk-app-to-org404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsInstallSnykAppToOrg404Response
 */
export interface AppsInstallSnykAppToOrg404Response {
    /**
     * 
     * @type {Array<AppsInstallSnykAppToOrg404ResponseErrorsInner>}
     * @memberof AppsInstallSnykAppToOrg404Response
     */
    'errors': Array<AppsInstallSnykAppToOrg404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsInstallSnykAppToOrg404ResponseJsonapi}
     * @memberof AppsInstallSnykAppToOrg404Response
     */
    'jsonapi': AppsInstallSnykAppToOrg404ResponseJsonapi;
}

