/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsListForOrgResponseDataInnerRelationshipsOrganizationData } from './projects-list-for-org-response-data-inner-relationships-organization-data';
import { ProjectsListForOrgResponseDataInnerRelationshipsOrganizationLinks } from './projects-list-for-org-response-data-inner-relationships-organization-links';

/**
 * 
 * @export
 * @interface ProjectsListForOrgResponseDataInnerRelationshipsOrganization
 */
export interface ProjectsListForOrgResponseDataInnerRelationshipsOrganization {
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsOrganizationData}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsOrganization
     */
    'data': ProjectsListForOrgResponseDataInnerRelationshipsOrganizationData;
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsOrganizationLinks}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsOrganization
     */
    'links': ProjectsListForOrgResponseDataInnerRelationshipsOrganizationLinks;
    /**
     * Free-form object that may contain non-standard information.
     * @type {{ [key: string]: any; }}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsOrganization
     */
    'meta'?: { [key: string]: any; };
}

