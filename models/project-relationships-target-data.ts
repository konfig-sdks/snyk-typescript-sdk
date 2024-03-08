/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectRelationshipsTargetDataAttributes } from './project-relationships-target-data-attributes';
import { ProjectRelationshipsTargetDataMeta } from './project-relationships-target-data-meta';

/**
 * 
 * @export
 * @interface ProjectRelationshipsTargetData
 */
export interface ProjectRelationshipsTargetData {
    /**
     * 
     * @type {ProjectRelationshipsTargetDataAttributes}
     * @memberof ProjectRelationshipsTargetData
     */
    'attributes': ProjectRelationshipsTargetDataAttributes;
    /**
     * The Resource ID.
     * @type {string}
     * @memberof ProjectRelationshipsTargetData
     */
    'id': string;
    /**
     * 
     * @type {ProjectRelationshipsTargetDataMeta}
     * @memberof ProjectRelationshipsTargetData
     */
    'meta'?: ProjectRelationshipsTargetDataMeta;
    /**
     * The Resource type.
     * @type {string}
     * @memberof ProjectRelationshipsTargetData
     */
    'type': string;
}
