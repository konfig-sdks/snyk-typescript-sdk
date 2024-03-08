/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsUpdateAttributes400ResponseErrorsInner } from './apps-update-attributes400-response-errors-inner';
import { AppsUpdateAttributes400ResponseJsonapi } from './apps-update-attributes400-response-jsonapi';

/**
 * 
 * @export
 * @interface AppsUpdateAttributes400Response
 */
export interface AppsUpdateAttributes400Response {
    /**
     * 
     * @type {Array<AppsUpdateAttributes400ResponseErrorsInner>}
     * @memberof AppsUpdateAttributes400Response
     */
    'errors': Array<AppsUpdateAttributes400ResponseErrorsInner>;
    /**
     * 
     * @type {AppsUpdateAttributes400ResponseJsonapi}
     * @memberof AppsUpdateAttributes400Response
     */
    'jsonapi': AppsUpdateAttributes400ResponseJsonapi;
}
