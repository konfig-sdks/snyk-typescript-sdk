/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

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

