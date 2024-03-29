/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecrets500ResponseErrorsInner } from './apps-manage-client-secrets500-response-errors-inner';
import { AppsManageClientSecrets500ResponseJsonapi } from './apps-manage-client-secrets500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsManageClientSecrets500Response
 */
export interface AppsManageClientSecrets500Response {
    /**
     * 
     * @type {Array<AppsManageClientSecrets500ResponseErrorsInner>}
     * @memberof AppsManageClientSecrets500Response
     */
    'errors': Array<AppsManageClientSecrets500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsManageClientSecrets500ResponseJsonapi}
     * @memberof AppsManageClientSecrets500Response
     */
    'jsonapi': AppsManageClientSecrets500ResponseJsonapi;
}

