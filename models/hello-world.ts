/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HelloWorldAttributes } from './hello-world-attributes';

/**
 * 
 * @export
 * @interface HelloWorld
 */
export interface HelloWorld {
    /**
     * 
     * @type {HelloWorldAttributes}
     * @memberof HelloWorld
     */
    'attributes': HelloWorldAttributes;
    /**
     * 
     * @type {string}
     * @memberof HelloWorld
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof HelloWorld
     */
    'type': string;
}
