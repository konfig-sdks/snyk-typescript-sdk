/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CommonIssueModelVTwo } from './common-issue-model-vtwo';
import { IssuesWithPurlsResponseMeta } from './issues-with-purls-response-meta';
import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';

/**
 * 
 * @export
 * @interface IssuesWithPurlsResponse
 */
export interface IssuesWithPurlsResponse {
    /**
     * 
     * @type {Array<CommonIssueModelVTwo>}
     * @memberof IssuesWithPurlsResponse
     */
    'data'?: Array<CommonIssueModelVTwo>;
    /**
     * 
     * @type {JsonApi}
     * @memberof IssuesWithPurlsResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof IssuesWithPurlsResponse
     */
    'links'?: PaginatedLinks;
    /**
     * 
     * @type {IssuesWithPurlsResponseMeta}
     * @memberof IssuesWithPurlsResponse
     */
    'meta'?: IssuesWithPurlsResponseMeta;
}

