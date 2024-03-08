/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Links } from './links';
import { ProjectAttributes } from './project-attributes';
import { ProjectsUpdateByProjectIdResponseDataMeta } from './projects-update-by-project-id-response-data-meta';
import { ProjectsUpdateByProjectIdResponseDataRelationships } from './projects-update-by-project-id-response-data-relationships';

/**
 * 
 * @export
 * @interface ProjectsUpdateByProjectIdResponseData
 */
export interface ProjectsUpdateByProjectIdResponseData {
    /**
     * 
     * @type {ProjectAttributes}
     * @memberof ProjectsUpdateByProjectIdResponseData
     */
    'attributes': ProjectAttributes;
    /**
     * The Resource ID.
     * @type {string}
     * @memberof ProjectsUpdateByProjectIdResponseData
     */
    'id': string;
    /**
     * 
     * @type {Links}
     * @memberof ProjectsUpdateByProjectIdResponseData
     */
    'links'?: Links;
    /**
     * 
     * @type {ProjectsUpdateByProjectIdResponseDataMeta}
     * @memberof ProjectsUpdateByProjectIdResponseData
     */
    'meta'?: ProjectsUpdateByProjectIdResponseDataMeta;
    /**
     * 
     * @type {ProjectsUpdateByProjectIdResponseDataRelationships}
     * @memberof ProjectsUpdateByProjectIdResponseData
     */
    'relationships'?: ProjectsUpdateByProjectIdResponseDataRelationships;
    /**
     * The Resource type.
     * @type {string}
     * @memberof ProjectsUpdateByProjectIdResponseData
     */
    'type': string;
}
