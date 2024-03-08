/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Image } from './image';
import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';

/**
 * 
 * @export
 * @interface ContainerImageListInstancesOfContainerImageResponse
 */
export interface ContainerImageListInstancesOfContainerImageResponse {
    /**
     * 
     * @type {Array<Image>}
     * @memberof ContainerImageListInstancesOfContainerImageResponse
     */
    'data'?: Array<Image>;
    /**
     * 
     * @type {JsonApi}
     * @memberof ContainerImageListInstancesOfContainerImageResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof ContainerImageListInstancesOfContainerImageResponse
     */
    'links'?: PaginatedLinks;
}
