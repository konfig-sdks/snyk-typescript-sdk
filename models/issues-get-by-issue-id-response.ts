/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Issue } from './issue';
import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';

/**
 * 
 * @export
 * @interface IssuesGetByIssueIdResponse
 */
export interface IssuesGetByIssueIdResponse {
    /**
     * 
     * @type {Issue}
     * @memberof IssuesGetByIssueIdResponse
     */
    'data': Issue;
    /**
     * 
     * @type {JsonApi}
     * @memberof IssuesGetByIssueIdResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof IssuesGetByIssueIdResponse
     */
    'links'?: PaginatedLinks;
}

