/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetByAppId409ResponseErrorsInner } from './apps-get-by-app-id409-response-errors-inner';
import { AppsGetByAppId409ResponseJsonapi } from './apps-get-by-app-id409-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsGetByAppId409Response
 */
export interface AppsGetByAppId409Response {
    /**
     * 
     * @type {Array<AppsGetByAppId409ResponseErrorsInner>}
     * @memberof AppsGetByAppId409Response
     */
    'errors': Array<AppsGetByAppId409ResponseErrorsInner>;
    /**
     * 
     * @type {AppsGetByAppId409ResponseJsonapi}
     * @memberof AppsGetByAppId409Response
     */
    'jsonapi': AppsGetByAppId409ResponseJsonapi;
}

