/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsListForOrgResponseDataInnerRelationshipsImporterData } from './projects-list-for-org-response-data-inner-relationships-importer-data';
import { ProjectsListForOrgResponseDataInnerRelationshipsImporterLinks } from './projects-list-for-org-response-data-inner-relationships-importer-links';

/**
 * 
 * @export
 * @interface ProjectsListForOrgResponseDataInnerRelationshipsImporter
 */
export interface ProjectsListForOrgResponseDataInnerRelationshipsImporter {
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsImporterData}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsImporter
     */
    'data': ProjectsListForOrgResponseDataInnerRelationshipsImporterData;
    /**
     * 
     * @type {ProjectsListForOrgResponseDataInnerRelationshipsImporterLinks}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsImporter
     */
    'links': ProjectsListForOrgResponseDataInnerRelationshipsImporterLinks;
    /**
     * Free-form object that may contain non-standard information.
     * @type {{ [key: string]: any; }}
     * @memberof ProjectsListForOrgResponseDataInnerRelationshipsImporter
     */
    'meta'?: { [key: string]: any; };
}

