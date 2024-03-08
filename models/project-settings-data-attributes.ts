/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SeverityThreshold } from './severity-threshold';

/**
 * 
 * @export
 * @interface ProjectSettingsDataAttributes
 */
export interface ProjectSettingsDataAttributes {
    /**
     * Current status of the project settings.
     * @type {boolean}
     * @memberof ProjectSettingsDataAttributes
     */
    'is_active': boolean;
    /**
     * Minimum Snyk issue severity to send a notification for, messages will not be sent for any issue below this value
     * @type {SeverityThreshold}
     * @memberof ProjectSettingsDataAttributes
     */
    'severity_threshold': SeverityThreshold;
    /**
     * 
     * @type {string}
     * @memberof ProjectSettingsDataAttributes
     */
    'target_channel_id': string;
    /**
     * 
     * @type {string}
     * @memberof ProjectSettingsDataAttributes
     */
    'target_channel_name': string;
    /**
     * The target file name for the project.
     * @type {string}
     * @memberof ProjectSettingsDataAttributes
     */
    'target_project_name': string;
}
