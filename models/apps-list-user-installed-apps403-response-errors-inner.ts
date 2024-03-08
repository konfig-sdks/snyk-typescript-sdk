/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsListUserInstalledApps403ResponseErrorsInnerSource } from './apps-list-user-installed-apps403-response-errors-inner-source';

/**
 * 
 * @export
 * @interface AppsListUserInstalledApps403ResponseErrorsInner
 */
export interface AppsListUserInstalledApps403ResponseErrorsInner {
    /**
     * A short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.
     * @type {string}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'title'?: string;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {string}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'code'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'detail': string;
    /**
     * A unique identifier for this particular occurrence of the problem.
     * @type {string}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'meta'?: { [key: string]: any; };
    /**
     * 
     * @type {AppsListUserInstalledApps403ResponseErrorsInnerSource}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'source'?: AppsListUserInstalledApps403ResponseErrorsInnerSource;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {string}
     * @memberof AppsListUserInstalledApps403ResponseErrorsInner
     */
    'status': string;
}

