/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrgAttributes } from './org-attributes';

/**
 * 
 * @export
 * @interface Org
 */
export interface Org {
    /**
     * 
     * @type {OrgAttributes}
     * @memberof Org
     */
    'attributes': OrgAttributes;
    /**
     * The Snyk ID of the organization.
     * @type {string}
     * @memberof Org
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    'type': string;
}
