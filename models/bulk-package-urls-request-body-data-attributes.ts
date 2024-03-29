/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface BulkPackageUrlsRequestBodyDataAttributes
 */
export interface BulkPackageUrlsRequestBodyDataAttributes {
    /**
     * An array of Package URLs (purl). Supported purl types are apk, cargo, cocoapods, composer, deb, gem, generic, golang, hex, maven, npm, nuget, pub, pypi, rpm, and swift. A version for the package is also required.
     * @type {Array<string>}
     * @memberof BulkPackageUrlsRequestBodyDataAttributes
     */
    'purls': Array<string>;
}

