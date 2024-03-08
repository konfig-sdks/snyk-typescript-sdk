/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VersioningSchema } from './versioning-schema';

/**
 * 
 * @export
 * @interface CustomBaseImagePatchRequestDataAttributes
 */
export interface CustomBaseImagePatchRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof CustomBaseImagePatchRequestDataAttributes
     */
    'include_in_recommendations'?: boolean;
    /**
     * 
     * @type {VersioningSchema}
     * @memberof CustomBaseImagePatchRequestDataAttributes
     */
    'versioning_schema'?: VersioningSchema;
}

