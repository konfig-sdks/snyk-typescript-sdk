/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetByClientId500ResponseErrorsInner } from './apps-get-by-client-id500-response-errors-inner';
import { AppsGetByClientId500ResponseJsonapi } from './apps-get-by-client-id500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsGetByClientId500Response
 */
export interface AppsGetByClientId500Response {
    /**
     * 
     * @type {Array<AppsGetByClientId500ResponseErrorsInner>}
     * @memberof AppsGetByClientId500Response
     */
    'errors': Array<AppsGetByClientId500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsGetByClientId500ResponseJsonapi}
     * @memberof AppsGetByClientId500Response
     */
    'jsonapi': AppsGetByClientId500ResponseJsonapi;
}

