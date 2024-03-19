/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecrets403ResponseErrorsInner } from './apps-manage-client-secrets403-response-errors-inner';
import { AppsManageClientSecrets403ResponseJsonapi } from './apps-manage-client-secrets403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsManageClientSecrets403Response
 */
export interface AppsManageClientSecrets403Response {
    /**
     * 
     * @type {Array<AppsManageClientSecrets403ResponseErrorsInner>}
     * @memberof AppsManageClientSecrets403Response
     */
    'errors': Array<AppsManageClientSecrets403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsManageClientSecrets403ResponseJsonapi}
     * @memberof AppsManageClientSecrets403Response
     */
    'jsonapi': AppsManageClientSecrets403ResponseJsonapi;
}

