/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListGroupAppInstalls500ResponseErrorsInner } from './apps-list-group-app-installs500-response-errors-inner';
import { AppsListGroupAppInstalls500ResponseJsonapi } from './apps-list-group-app-installs500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListGroupAppInstalls500Response
 */
export interface AppsListGroupAppInstalls500Response {
    /**
     * 
     * @type {Array<AppsListGroupAppInstalls500ResponseErrorsInner>}
     * @memberof AppsListGroupAppInstalls500Response
     */
    'errors': Array<AppsListGroupAppInstalls500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListGroupAppInstalls500ResponseJsonapi}
     * @memberof AppsListGroupAppInstalls500Response
     */
    'jsonapi': AppsListGroupAppInstalls500ResponseJsonapi;
}
