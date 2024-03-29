/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppResourceAttributes } from './app-resource-attributes';

/**
 * 
 * @export
 * @interface AppData
 */
export interface AppData {
    /**
     * 
     * @type {AppResourceAttributes}
     * @memberof AppData
     */
    'attributes': AppResourceAttributes;
    /**
     * 
     * @type {string}
     * @memberof AppData
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof AppData
     */
    'type': string;
}

