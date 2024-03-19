/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BulkPackageUrlsRequestBodyDataAttributes } from './bulk-package-urls-request-body-data-attributes';

/**
 * 
 * @export
 * @interface BulkPackageUrlsRequestBodyData
 */
export interface BulkPackageUrlsRequestBodyData {
    /**
     * 
     * @type {BulkPackageUrlsRequestBodyDataAttributes}
     * @memberof BulkPackageUrlsRequestBodyData
     */
    'attributes': BulkPackageUrlsRequestBodyDataAttributes;
    /**
     * 
     * @type {string}
     * @memberof BulkPackageUrlsRequestBodyData
     */
    'type'?: string;
}

