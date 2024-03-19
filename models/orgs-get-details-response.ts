/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Org } from './org';
import { SelfLink } from './self-link';

/**
 * 
 * @export
 * @interface OrgsGetDetailsResponse
 */
export interface OrgsGetDetailsResponse {
    /**
     * 
     * @type {Org}
     * @memberof OrgsGetDetailsResponse
     */
    'data'?: Org;
    /**
     * 
     * @type {JsonApi}
     * @memberof OrgsGetDetailsResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof OrgsGetDetailsResponse
     */
    'links'?: SelfLink;
}

