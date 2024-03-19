/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LinkProperty } from './link-property';

/**
 * 
 * @export
 * @interface Links
 */
export interface Links {
    /**
     * 
     * @type {LinkProperty}
     * @memberof Links
     */
    'first'?: LinkProperty;
    /**
     * 
     * @type {LinkProperty}
     * @memberof Links
     */
    'last'?: LinkProperty;
    /**
     * 
     * @type {LinkProperty}
     * @memberof Links
     */
    'next'?: LinkProperty;
    /**
     * 
     * @type {LinkProperty}
     * @memberof Links
     */
    'prev'?: LinkProperty;
    /**
     * 
     * @type {LinkProperty}
     * @memberof Links
     */
    'related'?: LinkProperty;
    /**
     * 
     * @type {LinkProperty}
     * @memberof Links
     */
    'self'?: LinkProperty;
}

