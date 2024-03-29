/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecretForSnykApp400ResponseErrorsInner } from './apps-manage-client-secret-for-snyk-app400-response-errors-inner';
import { AppsManageClientSecretForSnykApp400ResponseJsonapi } from './apps-manage-client-secret-for-snyk-app400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsManageClientSecretForSnykApp400Response
 */
export interface AppsManageClientSecretForSnykApp400Response {
    /**
     * 
     * @type {Array<AppsManageClientSecretForSnykApp400ResponseErrorsInner>}
     * @memberof AppsManageClientSecretForSnykApp400Response
     */
    'errors': Array<AppsManageClientSecretForSnykApp400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsManageClientSecretForSnykApp400ResponseJsonapi}
     * @memberof AppsManageClientSecretForSnykApp400Response
     */
    'jsonapi': AppsManageClientSecretForSnykApp400ResponseJsonapi;
}

