/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsListForOrgResponseDataInnerRelationshipsOwnerData } from './projects-list-for-org-response-data-inner-relationships-owner-data';
import { ProjectsListForOrgResponseDataInnerRelationshipsOwnerLinks } from './projects-list-for-org-response-data-inner-relationships-owner-links';

/**
 * 
 * @export
 * @interface ProjectsListForOrgResponseDataInnerRelationshipsOwner
 */
export interface ProjectsListForOrgResponseDataInnerRelationshipsOwner {
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsOwnerData}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsOwner
     */
    'data': ProjectsListForOrgResponseDataInnerRelationshipsOwnerData;
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsOwnerLinks}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsOwner
     */
    'links': ProjectsListForOrgResponseDataInnerRelationshipsOwnerLinks;
    /**
     * Free-form object that may contain non-standard information.
     * @type {{ [key: string]: any; }}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsOwner
     */
    'meta'?: { [key: string]: any; };
}

