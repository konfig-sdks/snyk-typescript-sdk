/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Dependency
 */
export interface Dependency {
    /**
     * The package name the issue was found in
     * @type {string}
     * @memberof Dependency
     */
    'package_name': string;
    /**
     * The package version the issue was found in
     * @type {string}
     * @memberof Dependency
     */
    'package_version': string;
}

