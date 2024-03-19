/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CommonIssueModelAttributesCoordinatesInnerRemediesInnerDetails } from './common-issue-model-attributes-coordinates-inner-remedies-inner-details';

/**
 * 
 * @export
 * @interface CommonIssueModelAttributesCoordinatesInnerRemediesInner
 */
export interface CommonIssueModelAttributesCoordinatesInnerRemediesInner {
    /**
     * A markdown-formatted optional description of this remedy.
     * @type {string}
     * @memberof CommonIssueModelAttributesCoordinatesInnerRemediesInner
     */
    'description'?: string;
    /**
     * 
     * @type {CommonIssueModelAttributesCoordinatesInnerRemediesInnerDetails}
     * @memberof CommonIssueModelAttributesCoordinatesInnerRemediesInner
     */
    'details'?: CommonIssueModelAttributesCoordinatesInnerRemediesInnerDetails;
    /**
     * The type of the remedy. Always ‘indeterminate’.
     * @type {string}
     * @memberof CommonIssueModelAttributesCoordinatesInnerRemediesInner
     */
    'type'?: string;
}

