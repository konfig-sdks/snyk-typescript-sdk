/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomBaseImageCollectionResponseDataInner } from './custom-base-image-collection-response-data-inner';
import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';

/**
 * 
 * @export
 * @interface CustomBaseImageCollectionResponse
 */
export interface CustomBaseImageCollectionResponse {
    /**
     * 
     * @type {Array<CustomBaseImageCollectionResponseDataInner>}
     * @memberof CustomBaseImageCollectionResponse
     */
    'data': Array<CustomBaseImageCollectionResponseDataInner>;
    /**
     * 
     * @type {JsonApi}
     * @memberof CustomBaseImageCollectionResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof CustomBaseImageCollectionResponse
     */
    'links'?: PaginatedLinks;
}

