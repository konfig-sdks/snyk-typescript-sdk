/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListAppBots404ResponseErrorsInner } from './apps-list-app-bots404-response-errors-inner';
import { AppsListAppBots404ResponseJsonapi } from './apps-list-app-bots404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsListAppBots404Response
 */
export interface AppsListAppBots404Response {
    /**
     * 
     * @type {Array<AppsListAppBots404ResponseErrorsInner>}
     * @memberof AppsListAppBots404Response
     */
    'errors': Array<AppsListAppBots404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsListAppBots404ResponseJsonapi}
     * @memberof AppsListAppBots404Response
     */
    'jsonapi': AppsListAppBots404ResponseJsonapi;
}
