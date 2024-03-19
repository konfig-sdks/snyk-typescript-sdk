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
 * @interface ServiceAccountAttributes
 */
export interface ServiceAccountAttributes {
    /**
     * The time, in seconds, that a generated access token will be valid for. Defaults to 1hr if unset. Only provided when auth_type is oauth_private_key_jwt.
     * @type {number}
     * @memberof ServiceAccountAttributes
     */
    'access_token_ttl_seconds'?: number;
    /**
     * The Snyk API Key for this service account. Only returned on creation, and only when auth_type is api_key.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'api_key'?: string;
    /**
     * The authentication strategy for the service account:   * api_key - Regular Snyk API Key.   * oauth_client_secret - OAuth2 client_credentials grant, which returns a client secret that can be used to retrieve an access token.   * oauth_private_key_jwt - OAuth2 client_credentials grant, using private_key_jwt client_assertion as laid out OIDC Connect Core 1.0, section 9.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'auth_type': ServiceAccountAttributesAuthTypeEnum;
    /**
     * The service account\'s attached client-id. Used to request an access-token. Only provided when auth_type is oauth_private_key_jwt.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'client_id'?: string;
    /**
     * The client secret used for obtaining access tokens. Only sent on creation of new service accounts and cannot be retrieved thereafter. Only provided when auth_type is oauth_client_secret.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'client_secret'?: string;
    /**
     * A JWKs URL used to verify signed JWT requests against. Must be https. Only provided when auth_type is oauth_private_key_jwt.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'jwks_url'?: string;
    /**
     * The level of access for the service account:   * Group - the service account was created at the Group level.   * Org - the service account was created at the Org level.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'level'?: ServiceAccountAttributesLevelEnum;
    /**
     * A human-friendly name of the service account.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'name': string;
    /**
     * The ID of the role which the Service Account is associated with.
     * @type {string}
     * @memberof ServiceAccountAttributes
     */
    'role_id': string;
}

type ServiceAccountAttributesAuthTypeEnum = 'api_key' | 'oauth_client_secret' | 'oauth_private_key_jwt'
type ServiceAccountAttributesLevelEnum = 'Group' | 'Org'


