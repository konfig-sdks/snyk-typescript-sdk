/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface IssuesGetByIssueId409ResponseErrorsInnerSource
 */
export interface IssuesGetByIssueId409ResponseErrorsInnerSource {
    /**
     * A string indicating which URI query parameter caused the error.
     * @type {string}
     * @memberof IssuesGetByIssueId409ResponseErrorsInnerSource
     */
    'parameter'?: string;
    /**
     * A JSON Pointer [RFC6901] to the associated entity in the request document.
     * @type {string}
     * @memberof IssuesGetByIssueId409ResponseErrorsInnerSource
     */
    'pointer'?: string;
}
