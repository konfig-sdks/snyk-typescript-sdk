/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Links } from './links';
import { PublicAppAttributes } from './public-app-attributes';

/**
 * 
 * @export
 * @interface PublicApp
 */
export interface PublicApp {
    /**
     * 
     * @type {PublicAppAttributes}
     * @memberof PublicApp
     */
    'attributes'?: PublicAppAttributes;
    /**
     * 
     * @type {string}
     * @memberof PublicApp
     */
    'id': string;
    /**
     * 
     * @type {Links}
     * @memberof PublicApp
     */
    'links'?: Links;
    /**
     * 
     * @type {string}
     * @memberof PublicApp
     */
    'type': string;
}
