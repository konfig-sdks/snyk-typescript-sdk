/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesGetById500ResponseErrorsInner } from './issues-get-by-id500-response-errors-inner';
import { IssuesGetById500ResponseJsonapi } from './issues-get-by-id500-response-jsonapi';

/**
 * 
 * @export
 * @interface IssuesGetById500Response
 */
export interface IssuesGetById500Response {
    /**
     * 
     * @type {Array<IssuesGetById500ResponseErrorsInner>}
     * @memberof IssuesGetById500Response
     */
    'errors': Array<IssuesGetById500ResponseErrorsInner>;
    /**
     * 
     * @type {IssuesGetById500ResponseJsonapi}
     * @memberof IssuesGetById500Response
     */
    'jsonapi': IssuesGetById500ResponseJsonapi;
}

