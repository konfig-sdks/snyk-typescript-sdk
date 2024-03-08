/*
Snyk API

Missing description placeholder

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
 * @interface CollectionEditCollectionResponse
 */
export interface CollectionEditCollectionResponse {
    /**
     * 
     * @type {CollectionCreateNewResponseData}
     * @memberof CollectionEditCollectionResponse
     */
    'data'?: CollectionCreateNewResponseData;
    /**
     * 
     * @type {JsonApi}
     * @memberof CollectionEditCollectionResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof CollectionEditCollectionResponse
     */
    'links'?: SelfLink;
}

