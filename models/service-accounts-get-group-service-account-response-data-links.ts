/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountsGetGroupServiceAccountResponseDataLinksFirst } from './service-accounts-get-group-service-account-response-data-links-first';
import { ServiceAccountsGetGroupServiceAccountResponseDataLinksLast } from './service-accounts-get-group-service-account-response-data-links-last';
import { ServiceAccountsGetGroupServiceAccountResponseDataLinksNext } from './service-accounts-get-group-service-account-response-data-links-next';
import { ServiceAccountsGetGroupServiceAccountResponseDataLinksPrev } from './service-accounts-get-group-service-account-response-data-links-prev';
import { ServiceAccountsGetGroupServiceAccountResponseDataLinksRelated } from './service-accounts-get-group-service-account-response-data-links-related';
import { ServiceAccountsGetGroupServiceAccountResponseDataLinksSelf } from './service-accounts-get-group-service-account-response-data-links-self';

/**
 * 
 * @export
 * @interface ServiceAccountsGetGroupServiceAccountResponseDataLinks
 */
export interface ServiceAccountsGetGroupServiceAccountResponseDataLinks {
    /**
     * 
     * @type {ServiceAccountsGetGroupServiceAccountResponseDataLinksFirst}
     * @memberof ServiceAccountsGetGroupServiceAccountResponseDataLinks
     */
    'first'?: ServiceAccountsGetGroupServiceAccountResponseDataLinksFirst;
    /**
     * 
     * @type {ServiceAccountsGetGroupServiceAccountResponseDataLinksLast}
     * @memberof ServiceAccountsGetGroupServiceAccountResponseDataLinks
     */
    'last'?: ServiceAccountsGetGroupServiceAccountResponseDataLinksLast;
    /**
     * 
     * @type {ServiceAccountsGetGroupServiceAccountResponseDataLinksNext}
     * @memberof ServiceAccountsGetGroupServiceAccountResponseDataLinks
     */
    'next'?: ServiceAccountsGetGroupServiceAccountResponseDataLinksNext;
    /**
     * 
     * @type {ServiceAccountsGetGroupServiceAccountResponseDataLinksPrev}
     * @memberof ServiceAccountsGetGroupServiceAccountResponseDataLinks
     */
    'prev'?: ServiceAccountsGetGroupServiceAccountResponseDataLinksPrev;
    /**
     * 
     * @type {ServiceAccountsGetGroupServiceAccountResponseDataLinksRelated}
     * @memberof ServiceAccountsGetGroupServiceAccountResponseDataLinks
     */
    'related'?: ServiceAccountsGetGroupServiceAccountResponseDataLinksRelated;
    /**
     * 
     * @type {ServiceAccountsGetGroupServiceAccountResponseDataLinksSelf}
     * @memberof ServiceAccountsGetGroupServiceAccountResponseDataLinks
     */
    'self'?: ServiceAccountsGetGroupServiceAccountResponseDataLinksSelf;
}

