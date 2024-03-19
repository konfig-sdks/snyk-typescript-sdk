/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollectionCreateNewResponseData } from './collection-create-new-response-data';
import { JsonApi } from './json-api';
import { SelfLink } from './self-link';

/**
 * 
 * @export
 * @interface CollectionCreateNewResponse
 */
export interface CollectionCreateNewResponse {
    /**
     * 
     * @type {CollectionCreateNewResponseData}
     * @memberof CollectionCreateNewResponse
     */
    'data'?: CollectionCreateNewResponseData;
    /**
     * 
     * @type {JsonApi}
     * @memberof CollectionCreateNewResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof CollectionCreateNewResponse
     */
    'links'?: SelfLink;
}

