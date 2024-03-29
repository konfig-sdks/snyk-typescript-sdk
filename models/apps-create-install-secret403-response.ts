/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateInstallSecret403ResponseErrorsInner } from './apps-create-install-secret403-response-errors-inner';
import { AppsCreateInstallSecret403ResponseJsonapi } from './apps-create-install-secret403-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecret403Response
 */
export interface AppsCreateInstallSecret403Response {
    /**
     * 
     * @type {Array<AppsCreateInstallSecret403ResponseErrorsInner>}
     * @memberof AppsCreateInstallSecret403Response
     */
    'errors': Array<AppsCreateInstallSecret403ResponseErrorsInner>;
    /**
     * 
     * @type {AppsCreateInstallSecret403ResponseJsonapi}
     * @memberof AppsCreateInstallSecret403Response
     */
    'jsonapi': AppsCreateInstallSecret403ResponseJsonapi;
}

