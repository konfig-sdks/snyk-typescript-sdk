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
 * @interface SettingsAttributes
 */
export interface SettingsAttributes {
    /**
     * Minimum Snyk issue severity to send a notification for, messages will not be sent for any issue below this value
     * @type {SeverityThreshold}
     * @memberof SettingsAttributes
     */
    'severity_threshold': SeverityThreshold;
    /**
     * 
     * @type {string}
     * @memberof SettingsAttributes
     */
    'target_channel_id': string;
}
