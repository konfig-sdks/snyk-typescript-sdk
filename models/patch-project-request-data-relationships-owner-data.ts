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
 * @interface PatchProjectRequestDataRelationshipsOwnerData
 */
export interface PatchProjectRequestDataRelationshipsOwnerData {
    /**
     * The public ID of the user that owns the project
     * @type {string}
     * @memberof PatchProjectRequestDataRelationshipsOwnerData
     */
    'id': string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchProjectRequestDataRelationshipsOwnerData
     */
    'type': PatchProjectRequestDataRelationshipsOwnerDataTypeEnum;
}

type PatchProjectRequestDataRelationshipsOwnerDataTypeEnum = 'user'


