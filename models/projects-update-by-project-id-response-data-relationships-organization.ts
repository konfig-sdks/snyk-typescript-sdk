/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsUpdateByProjectIdResponseDataRelationshipsOrganizationData } from './projects-update-by-project-id-response-data-relationships-organization-data';
import { ProjectsUpdateByProjectIdResponseDataRelationshipsOrganizationLinks } from './projects-update-by-project-id-response-data-relationships-organization-links';

/**
 * 
 * @export
 * @interface ProjectsUpdateByProjectIdResponseDataRelationshipsOrganization
 */
export interface ProjectsUpdateByProjectIdResponseDataRelationshipsOrganization {
    /**
     * 
     * @type {ProjectsUpdateByProjectIdResponseDataRelationshipsOrganizationData}
     * @memberof ProjectsUpdateByProjectIdResponseDataRelationshipsOrganization
     */
    'data': ProjectsUpdateByProjectIdResponseDataRelationshipsOrganizationData;
    /**
     * 
     * @type {ProjectsUpdateByProjectIdResponseDataRelationshipsOrganizationLinks}
     * @memberof ProjectsUpdateByProjectIdResponseDataRelationshipsOrganization
     */
    'links': ProjectsUpdateByProjectIdResponseDataRelationshipsOrganizationLinks;
    /**
     * Free-form object that may contain non-standard information.
     * @type {{ [key: string]: any; }}
     * @memberof ProjectsUpdateByProjectIdResponseDataRelationshipsOrganization
     */
    'meta'?: { [key: string]: any; };
}

