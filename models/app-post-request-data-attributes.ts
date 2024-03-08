/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Context } from './context';

/**
 * 
 * @export
 * @interface AppPostRequestDataAttributes
 */
export interface AppPostRequestDataAttributes {
    /**
     * The access token time to live for your app, in seconds. It only affects the newly generated access tokens, existing access token will  continue to have their previous time to live as expiration.
     * @type {number}
     * @memberof AppPostRequestDataAttributes
     */
    'access_token_ttl_seconds'?: number;
    /**
     * Allow installing the app to a org/group or to a user, default tenant.
     * @type {Context}
     * @memberof AppPostRequestDataAttributes
     */
    'context': Context;
    /**
     * New name of the app to display to users during authorization flow.
     * @type {string}
     * @memberof AppPostRequestDataAttributes
     */
    'name': string;
    /**
     * List of allowed redirect URIs to call back after authentication.
     * @type {Array<string>}
     * @memberof AppPostRequestDataAttributes
     */
    'redirect_uris': Array<string>;
    /**
     * The scopes this app is allowed to request during authorization.
     * @type {Array<string>}
     * @memberof AppPostRequestDataAttributes
     */
    'scopes': Array<string>;
}

