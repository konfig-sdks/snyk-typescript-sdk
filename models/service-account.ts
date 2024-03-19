/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountAttributes } from './service-account-attributes';
import { ServiceAccountLinks } from './service-account-links';

/**
 * 
 * @export
 * @interface ServiceAccount
 */
export interface ServiceAccount {
    /**
     * 
     * @type {ServiceAccountAttributes}
     * @memberof ServiceAccount
     */
    'attributes': ServiceAccountAttributes;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccount
     */
    'id': string;
    /**
     * 
     * @type {ServiceAccountLinks}
     * @memberof ServiceAccount
     */
    'links'?: ServiceAccountLinks;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccount
     */
    'type': string;
}

