/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectRelationshipsTargetDataMeta } from './project-relationships-target-data-meta';
import { ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1DataAttributes } from './projects-get-by-project-id-response-data-relationships-target-one-of1-data-attributes';

/**
 * 
 * @export
 * @interface ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1Data
 */
export interface ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1Data {
    /**
     * 
     * @type {ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1DataAttributes}
     * @memberof ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1Data
     */
    'attributes': ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1DataAttributes;
    /**
     * The Resource ID.
     * @type {string}
     * @memberof ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1Data
     */
    'id': string;
    /**
     * 
     * @type {ProjectRelationshipsTargetDataMeta}
     * @memberof ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1Data
     */
    'meta'?: ProjectRelationshipsTargetDataMeta;
    /**
     * The Resource type.
     * @type {string}
     * @memberof ProjectsGetByProjectIdResponseDataRelationshipsTargetOneOf1Data
     */
    'type': string;
}

