/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsByInstallId404ResponseErrorsInner } from './apps-by-install-id404-response-errors-inner';
import { AppsByInstallId404ResponseJsonapi } from './apps-by-install-id404-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsByInstallId404Response
 */
export interface AppsByInstallId404Response {
    /**
     * 
     * @type {Array<AppsByInstallId404ResponseErrorsInner>}
     * @memberof AppsByInstallId404Response
     */
    'errors': Array<AppsByInstallId404ResponseErrorsInner>;
    /**
     * 
     * @type {AppsByInstallId404ResponseJsonapi}
     * @memberof AppsByInstallId404Response
     */
    'jsonapi': AppsByInstallId404ResponseJsonapi;
}

