/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsGetByProjectIdResponseDataRelationshipsImporter } from './projects-get-by-project-id-response-data-relationships-importer';
import { ProjectsGetByProjectIdResponseDataRelationshipsOrganization } from './projects-get-by-project-id-response-data-relationships-organization';
import { ProjectsGetByProjectIdResponseDataRelationshipsOwner } from './projects-get-by-project-id-response-data-relationships-owner';
import { ProjectsGetByProjectIdResponseDataRelationshipsTarget } from './projects-get-by-project-id-response-data-relationships-target';

/**
 * 
 * @export
 * @interface ProjectsGetByProjectIdResponseDataRelationships
 */
export interface ProjectsGetByProjectIdResponseDataRelationships {
    /**
     * 
     * @type {ProjectsGetByProjectIdResponseDataRelationshipsImporter}
     * @memberof ProjectsGetByProjectIdResponseDataRelationships
     */
    'importer'?: ProjectsGetByProjectIdResponseDataRelationshipsImporter;
    /**
     * 
     * @type {ProjectsGetByProjectIdResponseDataRelationshipsOrganization}
     * @memberof ProjectsGetByProjectIdResponseDataRelationships
     */
    'organization': ProjectsGetByProjectIdResponseDataRelationshipsOrganization;
    /**
     * 
     * @type {ProjectsGetByProjectIdResponseDataRelationshipsOwner}
     * @memberof ProjectsGetByProjectIdResponseDataRelationships
     */
    'owner'?: ProjectsGetByProjectIdResponseDataRelationshipsOwner;
    /**
     * 
     * @type {ProjectsGetByProjectIdResponseDataRelationshipsTarget}
     * @memberof ProjectsGetByProjectIdResponseDataRelationships
     */
    'target': ProjectsGetByProjectIdResponseDataRelationshipsTarget;
}

