/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecrets404ResponseErrorsInner } from './apps-manage-client-secrets404-response-errors-inner';
import { AppsManageClientSecrets404ResponseJsonapi } from './apps-manage-client-secrets404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsManageClientSecrets404Response
 */
export interface AppsManageClientSecrets404Response {
    /**
     * 
     * @type {Array<AppsManageClientSecrets404ResponseErrorsInner>}
     * @memberof AppsManageClientSecrets404Response
     */
    'errors': Array<AppsManageClientSecrets404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsManageClientSecrets404ResponseJsonapi}
     * @memberof AppsManageClientSecrets404Response
     */
    'jsonapi': AppsManageClientSecrets404ResponseJsonapi;
}

