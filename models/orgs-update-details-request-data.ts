/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrgUpdateAttributes } from './org-update-attributes';

/**
 * 
 * @export
 * @interface OrgsUpdateDetailsRequestData
 */
export interface OrgsUpdateDetailsRequestData {
    /**
     * 
     * @type {OrgUpdateAttributes}
     * @memberof OrgsUpdateDetailsRequestData
     */
    'attributes'?: OrgUpdateAttributes;
    /**
     * 
     * @type {string}
     * @memberof OrgsUpdateDetailsRequestData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrgsUpdateDetailsRequestData
     */
    'type'?: string;
}

