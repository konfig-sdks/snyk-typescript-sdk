/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetByAppId500ResponseErrorsInner } from './apps-get-by-app-id500-response-errors-inner';
import { AppsGetByAppId500ResponseJsonapi } from './apps-get-by-app-id500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsGetByAppId500Response
 */
export interface AppsGetByAppId500Response {
    /**
     * 
     * @type {Array<AppsGetByAppId500ResponseErrorsInner>}
     * @memberof AppsGetByAppId500Response
     */
    'errors': Array<AppsGetByAppId500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsGetByAppId500ResponseJsonapi}
     * @memberof AppsGetByAppId500Response
     */
    'jsonapi': AppsGetByAppId500ResponseJsonapi;
}

