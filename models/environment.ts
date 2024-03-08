/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EnvironmentTypeDef } from './environment-type-def';

/**
 * 
 * @export
 * @interface Environment
 */
export interface Environment {
    /**
     * Internal ID for an environment.
     * @type {string}
     * @memberof Environment
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Environment
     */
    'name': string;
    /**
     * An optional native identifier for this environment. For example, a cloud account id.
     * @type {string}
     * @memberof Environment
     */
    'native_id'?: string;
    /**
     * 
     * @type {EnvironmentTypeDef}
     * @memberof Environment
     */
    'type': EnvironmentTypeDef;
}
