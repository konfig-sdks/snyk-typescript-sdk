/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectRelationshipsTargetDataMeta } from './project-relationships-target-data-meta';
import { ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1DataAttributes } from './projects-list-for-org-response-data-inner-relationships-target-one-of1-data-attributes';

/**
 * 
 * @export
 * @interface ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1Data
 */
export interface ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1Data {
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1DataAttributes}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1Data
     */
    'attributes': ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1DataAttributes;
    /**
     * The Resource ID.
     * @type {string}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1Data
     */
    'id': string;
    /**
     * 
     * @type {ProjectRelationshipsTargetDataMeta}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1Data
     */
    'meta'?: ProjectRelationshipsTargetDataMeta;
    /**
     * The Resource type.
     * @type {string}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsTargetOneOf1Data
     */
    'type': string;
}

