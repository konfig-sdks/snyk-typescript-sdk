/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetActiveSessions404ResponseErrorsInner } from './apps-get-active-sessions404-response-errors-inner';
import { AppsGetActiveSessions404ResponseJsonapi } from './apps-get-active-sessions404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsGetActiveSessions404Response
 */
export interface AppsGetActiveSessions404Response {
    /**
     * 
     * @type {Array<AppsGetActiveSessions404ResponseErrorsInner>}
     * @memberof AppsGetActiveSessions404Response
     */
    'errors': Array<AppsGetActiveSessions404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsGetActiveSessions404ResponseJsonapi}
     * @memberof AppsGetActiveSessions404Response
     */
    'jsonapi': AppsGetActiveSessions404ResponseJsonapi;
}

