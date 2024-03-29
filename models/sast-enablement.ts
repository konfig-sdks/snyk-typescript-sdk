/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SastEnablementAttributes } from './sast-enablement-attributes';

/**
 * 
 * @export
 * @interface SastEnablement
 */
export interface SastEnablement {
    /**
     * 
     * @type {SastEnablementAttributes}
     * @memberof SastEnablement
     */
    'attributes': SastEnablementAttributes;
    /**
     * 
     * @type {string}
     * @memberof SastEnablement
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof SastEnablement
     */
    'type': string;
}

