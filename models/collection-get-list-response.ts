/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CollectionResponse } from './collection-response';
import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';

/**
 * 
 * @export
 * @interface CollectionGetListResponse
 */
export interface CollectionGetListResponse {
    /**
     * 
     * @type {Array<CollectionResponse>}
     * @memberof CollectionGetListResponse
     */
    'data'?: Array<CollectionResponse>;
    /**
     * 
     * @type {JsonApi}
     * @memberof CollectionGetListResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof CollectionGetListResponse
     */
    'links'?: PaginatedLinks;
}

