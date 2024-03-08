/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesByGroupId500ResponseErrorsInner } from './issues-by-group-id500-response-errors-inner';
import { IssuesByGroupId500ResponseJsonapi } from './issues-by-group-id500-response-jsonapi';

/**
 * 
 * @export
 * @interface IssuesByGroupId500Response
 */
export interface IssuesByGroupId500Response {
    /**
     * 
     * @type {Array<IssuesByGroupId500ResponseErrorsInner>}
     * @memberof IssuesByGroupId500Response
     */
    'errors': Array<IssuesByGroupId500ResponseErrorsInner>;
    /**
     * 
     * @type {IssuesByGroupId500ResponseJsonapi}
     * @memberof IssuesByGroupId500Response
     */
    'jsonapi': IssuesByGroupId500ResponseJsonapi;
}

