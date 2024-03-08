/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountsCreateGroupResponseDataLinksFirst } from './service-accounts-create-group-response-data-links-first';
import { ServiceAccountsCreateGroupResponseDataLinksLast } from './service-accounts-create-group-response-data-links-last';
import { ServiceAccountsCreateGroupResponseDataLinksNext } from './service-accounts-create-group-response-data-links-next';
import { ServiceAccountsCreateGroupResponseDataLinksPrev } from './service-accounts-create-group-response-data-links-prev';
import { ServiceAccountsCreateGroupResponseDataLinksRelated } from './service-accounts-create-group-response-data-links-related';
import { ServiceAccountsCreateGroupResponseDataLinksSelf } from './service-accounts-create-group-response-data-links-self';

/**
 * 
 * @export
 * @interface ServiceAccountsCreateGroupResponseDataLinks
 */
export interface ServiceAccountsCreateGroupResponseDataLinks {
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseDataLinksFirst}
     * @memberof ServiceAccountsCreateGroupResponseDataLinks
     */
    'first'?: ServiceAccountsCreateGroupResponseDataLinksFirst;
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseDataLinksLast}
     * @memberof ServiceAccountsCreateGroupResponseDataLinks
     */
    'last'?: ServiceAccountsCreateGroupResponseDataLinksLast;
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseDataLinksNext}
     * @memberof ServiceAccountsCreateGroupResponseDataLinks
     */
    'next'?: ServiceAccountsCreateGroupResponseDataLinksNext;
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseDataLinksPrev}
     * @memberof ServiceAccountsCreateGroupResponseDataLinks
     */
    'prev'?: ServiceAccountsCreateGroupResponseDataLinksPrev;
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseDataLinksRelated}
     * @memberof ServiceAccountsCreateGroupResponseDataLinks
     */
    'related'?: ServiceAccountsCreateGroupResponseDataLinksRelated;
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseDataLinksSelf}
     * @memberof ServiceAccountsCreateGroupResponseDataLinks
     */
    'self'?: ServiceAccountsCreateGroupResponseDataLinksSelf;
}
