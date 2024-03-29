/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Environment } from './environment';
import { Resource } from './resource';

/**
 * 
 * @export
 * @interface CloudResource
 */
export interface CloudResource {
    /**
     * 
     * @type {Environment}
     * @memberof CloudResource
     */
    'environment': Environment;
    /**
     * 
     * @type {Resource}
     * @memberof CloudResource
     */
    'resource'?: Resource;
}

