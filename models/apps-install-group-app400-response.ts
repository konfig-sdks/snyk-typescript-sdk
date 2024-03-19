/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsInstallGroupApp400ResponseErrorsInner } from './apps-install-group-app400-response-errors-inner';
import { AppsInstallGroupApp400ResponseJsonapi } from './apps-install-group-app400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsInstallGroupApp400Response
 */
export interface AppsInstallGroupApp400Response {
    /**
     * 
     * @type {Array<AppsInstallGroupApp400ResponseErrorsInner>}
     * @memberof AppsInstallGroupApp400Response
     */
    'errors': Array<AppsInstallGroupApp400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsInstallGroupApp400ResponseJsonapi}
     * @memberof AppsInstallGroupApp400Response
     */
    'jsonapi': AppsInstallGroupApp400ResponseJsonapi;
}

