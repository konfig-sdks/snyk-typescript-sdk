/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Context } from './context';

/**
 * 
 * @export
 * @interface PublicAppAttributes
 */
export interface PublicAppAttributes {
    /**
     * The oauth2 client id for the app.
     * @type {string}
     * @memberof PublicAppAttributes
     */
    'client_id': string;
    /**
     * Allow installing the app to a org/group or to a user, default tenant.
     * @type {Context}
     * @memberof PublicAppAttributes
     */
    'context'?: Context;
    /**
     * New name of the app to display to users during authorization flow.
     * @type {string}
     * @memberof PublicAppAttributes
     */
    'name': string;
    /**
     * The scopes this app is allowed to request during authorization.
     * @type {Array<string>}
     * @memberof PublicAppAttributes
     */
    'scopes'?: Array<string>;
}

