/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecretForSnykApp401ResponseErrorsInner } from './apps-manage-client-secret-for-snyk-app401-response-errors-inner';
import { AppsManageClientSecretForSnykApp401ResponseJsonapi } from './apps-manage-client-secret-for-snyk-app401-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsManageClientSecretForSnykApp401Response
 */
export interface AppsManageClientSecretForSnykApp401Response {
    /**
     * 
     * @type {Array<AppsManageClientSecretForSnykApp401ResponseErrorsInner>}
     * @memberof AppsManageClientSecretForSnykApp401Response
     */
    'errors': Array<AppsManageClientSecretForSnykApp401ResponseErrorsInner>;
    /**
     * 
     * @type {AppsManageClientSecretForSnykApp401ResponseJsonapi}
     * @memberof AppsManageClientSecretForSnykApp401Response
     */
    'jsonapi': AppsManageClientSecretForSnykApp401ResponseJsonapi;
}

