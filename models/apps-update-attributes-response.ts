/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppData } from './app-data';
import { JsonApi } from './json-api';
import { SelfLink } from './self-link';

/**
 * 
 * @export
 * @interface AppsUpdateAttributesResponse
 */
export interface AppsUpdateAttributesResponse {
    /**
     * 
     * @type {AppData}
     * @memberof AppsUpdateAttributesResponse
     */
    'data'?: AppData;
    /**
     * 
     * @type {JsonApi}
     * @memberof AppsUpdateAttributesResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof AppsUpdateAttributesResponse
     */
    'links'?: SelfLink;
}

