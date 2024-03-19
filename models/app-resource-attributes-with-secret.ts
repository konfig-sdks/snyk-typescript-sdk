/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Context } from './context';
import { GrantType } from './grant-type';

/**
 * 
 * @export
 * @interface AppResourceAttributesWithSecret
 */
export interface AppResourceAttributesWithSecret {
    /**
     * The access token time to live for your app, in seconds. It only affects the newly generated access tokens, existing access token will  continue to have their previous time to live as expiration.
     * @type {number}
     * @memberof AppResourceAttributesWithSecret
     */
    'access_token_ttl_seconds': number;
    /**
     * The oauth2 client id for the app.
     * @type {string}
     * @memberof AppResourceAttributesWithSecret
     */
    'client_id': string;
    /**
     * The oauth2 client secret for the app. This is the only time this secret will be returned, store it securely and don’t lose it.
     * @type {string}
     * @memberof AppResourceAttributesWithSecret
     */
    'client_secret': string;
    /**
     * Allow installing the app to a org/group or to a user, default tenant.
     * @type {Context}
     * @memberof AppResourceAttributesWithSecret
     */
    'context': Context;
    /**
     * An authorization grant is a credential representing the resource owner\'s authorization (to access its protected resources) used by the client to obtain an access token. The grant type represents the way your app will get the access token.
     * @type {GrantType}
     * @memberof AppResourceAttributesWithSecret
     */
    'grant_type': GrantType;
    /**
     * A boolean to indicate if an app is confidential or not as per the OAuth2 RFC. Confidential apps can securely store secrets. Examples of non-confidential apps are full web-based or CLIs.
     * @type {boolean}
     * @memberof AppResourceAttributesWithSecret
     */
    'is_confidential': boolean;
    /**
     * A boolean to indicate if an app is publicly available or not.
     * @type {boolean}
     * @memberof AppResourceAttributesWithSecret
     */
    'is_public': boolean;
    /**
     * New name of the app to display to users during authorization flow.
     * @type {string}
     * @memberof AppResourceAttributesWithSecret
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof AppResourceAttributesWithSecret
     */
    'org_public_id'?: string;
    /**
     * List of allowed redirect URIs to call back after authentication.
     * @type {Array<string>}
     * @memberof AppResourceAttributesWithSecret
     */
    'redirect_uris': Array<string>;
    /**
     * The scopes this app is allowed to request during authorization.
     * @type {Array<string>}
     * @memberof AppResourceAttributesWithSecret
     */
    'scopes': Array<string>;
}

