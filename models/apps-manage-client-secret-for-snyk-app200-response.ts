/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppInstallDataWithSecret } from './app-install-data-with-secret';
import { JsonApi } from './json-api';
import { SelfLink } from './self-link';

/**
 * 
 * @export
 * @interface AppsManageClientSecretForSnykApp200Response
 */
export interface AppsManageClientSecretForSnykApp200Response {
    /**
     * 
     * @type {AppInstallDataWithSecret}
     * @memberof AppsManageClientSecretForSnykApp200Response
     */
    'data'?: AppInstallDataWithSecret;
    /**
     * 
     * @type {JsonApi}
     * @memberof AppsManageClientSecretForSnykApp200Response
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof AppsManageClientSecretForSnykApp200Response
     */
    'links'?: SelfLink;
}

