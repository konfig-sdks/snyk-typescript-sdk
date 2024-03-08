/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AppsManageClientSecretsRequest
 */
export interface AppsManageClientSecretsRequest {
    /**
     * Operation to perform:   * `replace` - Replace existing secrets with a new generated secret   * `create` - Add a new secret, preserving existing secrets   * `delete` - Remove an existing secret by value 
     * @type {string}
     * @memberof AppsManageClientSecretsRequest
     */
    'mode': AppsManageClientSecretsRequestModeEnum;
    /**
     * Secret to delete when using `delete` mode
     * @type {string}
     * @memberof AppsManageClientSecretsRequest
     */
    'secret'?: string;
}

type AppsManageClientSecretsRequestModeEnum = 'replace' | 'create' | 'delete'

