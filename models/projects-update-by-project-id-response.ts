/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { ProjectsUpdateByProjectIdResponseData } from './projects-update-by-project-id-response-data';

/**
 * 
 * @export
 * @interface ProjectsUpdateByProjectIdResponse
 */
export interface ProjectsUpdateByProjectIdResponse {
    /**
     * 
     * @type {ProjectsUpdateByProjectIdResponseData}
     * @memberof ProjectsUpdateByProjectIdResponse
     */
    'data': ProjectsUpdateByProjectIdResponseData;
    /**
     * 
     * @type {JsonApi}
     * @memberof ProjectsUpdateByProjectIdResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof ProjectsUpdateByProjectIdResponse
     */
    'links': Links;
}

