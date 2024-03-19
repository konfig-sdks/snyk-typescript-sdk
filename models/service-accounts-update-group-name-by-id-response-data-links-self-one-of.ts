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
 * @interface ServiceAccountsUpdateGroupNameByIdResponseDataLinksSelfOneOf
 */
export interface ServiceAccountsUpdateGroupNameByIdResponseDataLinksSelfOneOf {
    /**
     * A string containing the link’s URL.
     * @type {string}
     * @memberof ServiceAccountsUpdateGroupNameByIdResponseDataLinksSelfOneOf
     */
    'href': string;
    /**
     * Free-form object that may contain non-standard information.
     * @type {{ [key: string]: any; }}
     * @memberof ServiceAccountsUpdateGroupNameByIdResponseDataLinksSelfOneOf
     */
    'meta'?: { [key: string]: any; };
}

