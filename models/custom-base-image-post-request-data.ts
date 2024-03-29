/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomBaseImageAttributes } from './custom-base-image-attributes';

/**
 * 
 * @export
 * @interface CustomBaseImagePostRequestData
 */
export interface CustomBaseImagePostRequestData {
    /**
     * 
     * @type {CustomBaseImageAttributes}
     * @memberof CustomBaseImagePostRequestData
     */
    'attributes': CustomBaseImageAttributes;
    /**
     * This should always be \"custom_base_image\"
     * @type {string}
     * @memberof CustomBaseImagePostRequestData
     */
    'type': string;
}

