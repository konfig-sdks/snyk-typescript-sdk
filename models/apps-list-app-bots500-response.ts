/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListAppBots500ResponseErrorsInner } from './apps-list-app-bots500-response-errors-inner';
import { AppsListAppBots500ResponseJsonapi } from './apps-list-app-bots500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListAppBots500Response
 */
export interface AppsListAppBots500Response {
    /**
     * 
     * @type {Array<AppsListAppBots500ResponseErrorsInner>}
     * @memberof AppsListAppBots500Response
     */
    'errors': Array<AppsListAppBots500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListAppBots500ResponseJsonapi}
     * @memberof AppsListAppBots500Response
     */
    'jsonapi': AppsListAppBots500ResponseJsonapi;
}
