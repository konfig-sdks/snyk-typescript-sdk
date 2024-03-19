/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesGetById401ResponseErrorsInner } from './issues-get-by-id401-response-errors-inner';
import { IssuesGetById401ResponseJsonapi } from './issues-get-by-id401-response-jsonapi';

/**
 * 
 * @export
 * @interface IssuesGetById401Response
 */
export interface IssuesGetById401Response {
    /**
     * 
     * @type {Array<IssuesGetById401ResponseErrorsInner>}
     * @memberof IssuesGetById401Response
     */
    'errors': Array<IssuesGetById401ResponseErrorsInner>;
    /**
     * 
     * @type {IssuesGetById401ResponseJsonapi}
     * @memberof IssuesGetById401Response
     */
    'jsonapi': IssuesGetById401ResponseJsonapi;
}

