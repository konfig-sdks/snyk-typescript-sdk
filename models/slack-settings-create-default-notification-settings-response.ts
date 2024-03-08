/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { SelfLink } from './self-link';
import { SlackDefaultSettingsData } from './slack-default-settings-data';

/**
 * 
 * @export
 * @interface SlackSettingsCreateDefaultNotificationSettingsResponse
 */
export interface SlackSettingsCreateDefaultNotificationSettingsResponse {
    /**
     * 
     * @type {SlackDefaultSettingsData}
     * @memberof SlackSettingsCreateDefaultNotificationSettingsResponse
     */
    'data'?: SlackDefaultSettingsData;
    /**
     * 
     * @type {JsonApi}
     * @memberof SlackSettingsCreateDefaultNotificationSettingsResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof SlackSettingsCreateDefaultNotificationSettingsResponse
     */
    'links'?: SelfLink;
}
