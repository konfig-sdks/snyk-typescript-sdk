/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListGroupAppInstalls409ResponseErrorsInner } from './apps-list-group-app-installs409-response-errors-inner';
import { AppsListGroupAppInstalls409ResponseJsonapi } from './apps-list-group-app-installs409-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListGroupAppInstalls409Response
 */
export interface AppsListGroupAppInstalls409Response {
    /**
     * 
     * @type {Array<AppsListGroupAppInstalls409ResponseErrorsInner>}
     * @memberof AppsListGroupAppInstalls409Response
     */
    'errors': Array<AppsListGroupAppInstalls409ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListGroupAppInstalls409ResponseJsonapi}
     * @memberof AppsListGroupAppInstalls409Response
     */
    'jsonapi': AppsListGroupAppInstalls409ResponseJsonapi;
}

