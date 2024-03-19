/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LinkProperty } from './link-property';

/**
 * A link that leads to further details about this particular occurrance of the problem.
 * @export
 * @interface ErrorLink
 */
export interface ErrorLink {
    /**
     * 
     * @type {LinkProperty}
     * @memberof ErrorLink
     */
    'about'?: LinkProperty;
}

