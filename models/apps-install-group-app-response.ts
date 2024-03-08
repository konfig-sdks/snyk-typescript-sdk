/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppInstallWithClient } from './app-install-with-client';
import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';

/**
 * 
 * @export
 * @interface AppsInstallGroupAppResponse
 */
export interface AppsInstallGroupAppResponse {
    /**
     * 
     * @type {AppInstallWithClient}
     * @memberof AppsInstallGroupAppResponse
     */
    'data': AppInstallWithClient;
    /**
     * 
     * @type {JsonApi}
     * @memberof AppsInstallGroupAppResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof AppsInstallGroupAppResponse
     */
    'links': PaginatedLinks;
}

