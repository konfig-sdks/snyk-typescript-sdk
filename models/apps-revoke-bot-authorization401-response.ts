/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsRevokeBotAuthorization401ResponseErrorsInner } from './apps-revoke-bot-authorization401-response-errors-inner';
import { AppsRevokeBotAuthorization401ResponseJsonapi } from './apps-revoke-bot-authorization401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsRevokeBotAuthorization401Response
 */
export interface AppsRevokeBotAuthorization401Response {
    /**
     * 
     * @type {Array<AppsRevokeBotAuthorization401ResponseErrorsInner>}
     * @memberof AppsRevokeBotAuthorization401Response
     */
    'errors': Array<AppsRevokeBotAuthorization401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsRevokeBotAuthorization401ResponseJsonapi}
     * @memberof AppsRevokeBotAuthorization401Response
     */
    'jsonapi': AppsRevokeBotAuthorization401ResponseJsonapi;
}
