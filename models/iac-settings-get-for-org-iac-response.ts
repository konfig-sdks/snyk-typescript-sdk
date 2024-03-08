/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { OrgIacSettingsResponse } from './org-iac-settings-response';

/**
 * 
 * @export
 * @interface IacSettingsGetForOrgIacResponse
 */
export interface IacSettingsGetForOrgIacResponse {
    /**
     * 
     * @type {OrgIacSettingsResponse}
     * @memberof IacSettingsGetForOrgIacResponse
     */
    'data': OrgIacSettingsResponse;
    /**
     * 
     * @type {JsonApi}
     * @memberof IacSettingsGetForOrgIacResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof IacSettingsGetForOrgIacResponse
     */
    'links': Links;
}
