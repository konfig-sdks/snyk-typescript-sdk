/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IssuesByGroupId500ResponseErrorsInnerSource } from './issues-by-group-id500-response-errors-inner-source';

/**
 * 
 * @export
 * @interface IssuesByGroupId500ResponseErrorsInner
 */
export interface IssuesByGroupId500ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {IssuesByGroupId500ResponseErrorsInnerSource}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'source'?: IssuesByGroupId500ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof IssuesByGroupId500ResponseErrorsInner
     */
    'status': string;
}

