/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ServiceAccountsManageClientSecretRequestDataAttributes
 */
export interface ServiceAccountsManageClientSecretRequestDataAttributes {
    /**
     * Operation to perform:   * `replace` - Replace existing secrets with a new generated secret.   * `create` - Add a new secret, preserving existing secrets. A maximum of to two secrets can exist at a time.   * `delete` - Remove an existing secret by value. At least one secret must remain per service account. 
     * @type {string}
     * @memberof ServiceAccountsManageClientSecretRequestDataAttributes
     */
    'mode': ServiceAccountsManageClientSecretRequestDataAttributesModeEnum;
    /**
     * Secret to delete when using `delete` mode
     * @type {string}
     * @memberof ServiceAccountsManageClientSecretRequestDataAttributes
     */
    'secret'?: string;
}

type ServiceAccountsManageClientSecretRequestDataAttributesModeEnum = 'replace' | 'create' | 'delete'


