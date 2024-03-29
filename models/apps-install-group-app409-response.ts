/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsInstallGroupApp409ResponseErrorsInner } from './apps-install-group-app409-response-errors-inner';
import { AppsInstallGroupApp409ResponseJsonapi } from './apps-install-group-app409-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsInstallGroupApp409Response
 */
export interface AppsInstallGroupApp409Response {
    /**
     * 
     * @type {Array<AppsInstallGroupApp409ResponseErrorsInner>}
     * @memberof AppsInstallGroupApp409Response
     */
    'errors': Array<AppsInstallGroupApp409ResponseErrorsInner>;
    /**
     * 
     * @type {AppsInstallGroupApp409ResponseJsonapi}
     * @memberof AppsInstallGroupApp409Response
     */
    'jsonapi': AppsInstallGroupApp409ResponseJsonapi;
}

