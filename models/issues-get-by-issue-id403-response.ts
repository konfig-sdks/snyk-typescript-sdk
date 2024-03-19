/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesGetByIssueId403ResponseErrorsInner } from './issues-get-by-issue-id403-response-errors-inner';
import { IssuesGetByIssueId403ResponseJsonapi } from './issues-get-by-issue-id403-response-jsonapi';

/**
 * 
 * @export
 * @interface IssuesGetByIssueId403Response
 */
export interface IssuesGetByIssueId403Response {
    /**
     * 
     * @type {Array<IssuesGetByIssueId403ResponseErrorsInner>}
     * @memberof IssuesGetByIssueId403Response
     */
    'errors': Array<IssuesGetByIssueId403ResponseErrorsInner>;
    /**
     * 
     * @type {IssuesGetByIssueId403ResponseJsonapi}
     * @memberof IssuesGetByIssueId403Response
     */
    'jsonapi': IssuesGetByIssueId403ResponseJsonapi;
}

