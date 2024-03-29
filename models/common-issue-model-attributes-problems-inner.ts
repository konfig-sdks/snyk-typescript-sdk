/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface CommonIssueModelAttributesProblemsInner
 */
export interface CommonIssueModelAttributesProblemsInner {
    /**
     * When this problem was disclosed to the public.
     * @type {string}
     * @memberof CommonIssueModelAttributesProblemsInner
     */
    'disclosed_at'?: string;
    /**
     * When this problem was first discovered.
     * @type {string}
     * @memberof CommonIssueModelAttributesProblemsInner
     */
    'discovered_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommonIssueModelAttributesProblemsInner
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof CommonIssueModelAttributesProblemsInner
     */
    'source': string;
    /**
     * When this problem was last updated.
     * @type {string}
     * @memberof CommonIssueModelAttributesProblemsInner
     */
    'updated_at'?: string;
    /**
     * An optional URL for this problem.
     * @type {string}
     * @memberof CommonIssueModelAttributesProblemsInner
     */
    'url'?: string;
}

