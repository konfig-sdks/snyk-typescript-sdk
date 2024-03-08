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
 * @interface ServiceAccountsCreateForOrganizationRequestDataAttributes
 */
export interface ServiceAccountsCreateForOrganizationRequestDataAttributes {
    /**
     * The time, in seconds, that a generated access token will be valid for. Defaults to 1 hour if unset. Only used when auth_type is one of the oauth_* variants.
     * @type {number}
     * @memberof ServiceAccountsCreateForOrganizationRequestDataAttributes
     */
    'access_token_ttl_seconds'?: number;
    /**
     * Authentication strategy for the service account:   * api_key - Regular Snyk API Key.   * oauth_client_secret - OAuth2 client_credentials grant, which returns a client secret that can be used to retrieve an access token.   * oauth_private_key_jwt - OAuth2 client_credentials grant, using private_key_jwt client_assertion as laid out in OIDC Connect Core 1.0, section 9.
     * @type {string}
     * @memberof ServiceAccountsCreateForOrganizationRequestDataAttributes
     */
    'auth_type': ServiceAccountsCreateForOrganizationRequestDataAttributesAuthTypeEnum;
    /**
     * A JWKs URL hosting your public keys, used to verify signed JWT requests. Must be https. Required only when auth_type is oauth_private_key_jwt.
     * @type {string}
     * @memberof ServiceAccountsCreateForOrganizationRequestDataAttributes
     */
    'jwks_url'?: string;
    /**
     * A human-friendly name for the service account.
     * @type {string}
     * @memberof ServiceAccountsCreateForOrganizationRequestDataAttributes
     */
    'name': string;
    /**
     * The ID of the role which the created service account should use. Obtained in the Snyk UI, via \"Group Page\" -> \"Settings\" -> \"Member Roles\" -> \"Create new Role\". Can be shared among multiple accounts.
     * @type {string}
     * @memberof ServiceAccountsCreateForOrganizationRequestDataAttributes
     */
    'role_id': string;
}

type ServiceAccountsCreateForOrganizationRequestDataAttributesAuthTypeEnum = 'api_key' | 'oauth_client_secret' | 'oauth_private_key_jwt'


