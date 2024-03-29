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
 * @interface AppPatchRequestDataAttributes
 */
export interface AppPatchRequestDataAttributes {
    /**
     * The access token time to live for your app, in seconds. It only affects the newly generated access tokens, existing access token will  continue to have their previous time to live as expiration.
     * @type {number}
     * @memberof AppPatchRequestDataAttributes
     */
    'access_token_ttl_seconds'?: number;
    /**
     * New name of the app to display to users during authorization flow.
     * @type {string}
     * @memberof AppPatchRequestDataAttributes
     */
    'name'?: string;
    /**
     * List of allowed redirect URIs to call back after authentication.
     * @type {Array<string>}
     * @memberof AppPatchRequestDataAttributes
     */
    'redirect_uris'?: Array<string>;
}

