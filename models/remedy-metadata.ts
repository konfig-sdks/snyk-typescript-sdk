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
 * @interface RemedyMetadata
 */
export interface RemedyMetadata {
    /**
     * Metadata information related to apply a remedy. Limited in size to 100Kb when JSON serialized.
     * @type {{ [key: string]: any; }}
     * @memberof RemedyMetadata
     */
    'data': { [key: string]: any; };
    /**
     * A schema version identifier the metadata object validates against. Note: this information is only relevant in the domain of the API consumer: the issues system always considers metadata just as an arbitrary object. 
     * @type {string}
     * @memberof RemedyMetadata
     */
    'schema_version': string;
}

