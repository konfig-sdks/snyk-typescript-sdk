/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomBaseImageSnapshot } from './custom-base-image-snapshot';

/**
 * 
 * @export
 * @interface CustomBaseImageCollectionResponseDataInner
 */
export interface CustomBaseImageCollectionResponseDataInner {
    /**
     * 
     * @type {CustomBaseImageSnapshot}
     * @memberof CustomBaseImageCollectionResponseDataInner
     */
    'attributes'?: CustomBaseImageSnapshot;
    /**
     * 
     * @type {string}
     * @memberof CustomBaseImageCollectionResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomBaseImageCollectionResponseDataInner
     */
    'type'?: string;
}

