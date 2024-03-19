/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesGetById403ResponseErrorsInner } from './issues-get-by-id403-response-errors-inner';
import { IssuesGetById403ResponseJsonapi } from './issues-get-by-id403-response-jsonapi';

/**
 * 
 * @export
 * @interface IssuesGetById403Response
 */
export interface IssuesGetById403Response {
    /**
     * 
     * @type {Array<IssuesGetById403ResponseErrorsInner>}
     * @memberof IssuesGetById403Response
     */
    'errors': Array<IssuesGetById403ResponseErrorsInner>;
    /**
     * 
     * @type {IssuesGetById403ResponseJsonapi}
     * @memberof IssuesGetById403Response
     */
    'jsonapi': IssuesGetById403ResponseJsonapi;
}

