/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsManageClientSecretForSnykApp500ResponseErrorsInner } from './apps-manage-client-secret-for-snyk-app500-response-errors-inner';
import { AppsManageClientSecretForSnykApp500ResponseJsonapi } from './apps-manage-client-secret-for-snyk-app500-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsManageClientSecretForSnykApp500Response
 */
export interface AppsManageClientSecretForSnykApp500Response {
    /**
     * 
     * @type {Array<AppsManageClientSecretForSnykApp500ResponseErrorsInner>}
     * @memberof AppsManageClientSecretForSnykApp500Response
     */
    'errors': Array<AppsManageClientSecretForSnykApp500ResponseErrorsInner>;
    /**
     * 
     * @type {AppsManageClientSecretForSnykApp500ResponseJsonapi}
     * @memberof AppsManageClientSecretForSnykApp500Response
     */
    'jsonapi': AppsManageClientSecretForSnykApp500ResponseJsonapi;
}

