/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsGetActiveSessions500ResponseErrorsInner } from './apps-get-active-sessions500-response-errors-inner';
import { AppsGetActiveSessions500ResponseJsonapi } from './apps-get-active-sessions500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsGetActiveSessions500Response
 */
export interface AppsGetActiveSessions500Response {
    /**
     * 
     * @type {Array<AppsGetActiveSessions500ResponseErrorsInner>}
     * @memberof AppsGetActiveSessions500Response
     */
    'errors': Array<AppsGetActiveSessions500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsGetActiveSessions500ResponseJsonapi}
     * @memberof AppsGetActiveSessions500Response
     */
    'jsonapi': AppsGetActiveSessions500ResponseJsonapi;
}
