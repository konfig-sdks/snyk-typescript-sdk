/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesGetById409ResponseErrorsInner } from './issues-get-by-id409-response-errors-inner';
import { IssuesGetById409ResponseJsonapi } from './issues-get-by-id409-response-jsonapi';

/**
 * 
 * @export
 * @interface IssuesGetById409Response
 */
export interface IssuesGetById409Response {
    /**
     * 
     * @type {Array<IssuesGetById409ResponseErrorsInner>}
     * @memberof IssuesGetById409Response
     */
    'errors': Array<IssuesGetById409ResponseErrorsInner>;
    /**
     * 
     * @type {IssuesGetById409ResponseJsonapi}
     * @memberof IssuesGetById409Response
     */
    'jsonapi': IssuesGetById409ResponseJsonapi;
}
