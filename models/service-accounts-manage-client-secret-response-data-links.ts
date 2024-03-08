/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountsManageClientSecretResponseDataLinksFirst } from './service-accounts-manage-client-secret-response-data-links-first';
import { ServiceAccountsManageClientSecretResponseDataLinksLast } from './service-accounts-manage-client-secret-response-data-links-last';
import { ServiceAccountsManageClientSecretResponseDataLinksNext } from './service-accounts-manage-client-secret-response-data-links-next';
import { ServiceAccountsManageClientSecretResponseDataLinksPrev } from './service-accounts-manage-client-secret-response-data-links-prev';
import { ServiceAccountsManageClientSecretResponseDataLinksRelated } from './service-accounts-manage-client-secret-response-data-links-related';
import { ServiceAccountsManageClientSecretResponseDataLinksSelf } from './service-accounts-manage-client-secret-response-data-links-self';

/**
 * 
 * @export
 * @interface ServiceAccountsManageClientSecretResponseDataLinks
 */
export interface ServiceAccountsManageClientSecretResponseDataLinks {
    /**
     * 
     * @type {ServiceAccountsManageClientSecretResponseDataLinksFirst}
     * @memberof ServiceAccountsManageClientSecretResponseDataLinks
     */
    'first'?: ServiceAccountsManageClientSecretResponseDataLinksFirst;
    /**
     * 
     * @type {ServiceAccountsManageClientSecretResponseDataLinksLast}
     * @memberof ServiceAccountsManageClientSecretResponseDataLinks
     */
    'last'?: ServiceAccountsManageClientSecretResponseDataLinksLast;
    /**
     * 
     * @type {ServiceAccountsManageClientSecretResponseDataLinksNext}
     * @memberof ServiceAccountsManageClientSecretResponseDataLinks
     */
    'next'?: ServiceAccountsManageClientSecretResponseDataLinksNext;
    /**
     * 
     * @type {ServiceAccountsManageClientSecretResponseDataLinksPrev}
     * @memberof ServiceAccountsManageClientSecretResponseDataLinks
     */
    'prev'?: ServiceAccountsManageClientSecretResponseDataLinksPrev;
    /**
     * 
     * @type {ServiceAccountsManageClientSecretResponseDataLinksRelated}
     * @memberof ServiceAccountsManageClientSecretResponseDataLinks
     */
    'related'?: ServiceAccountsManageClientSecretResponseDataLinksRelated;
    /**
     * 
     * @type {ServiceAccountsManageClientSecretResponseDataLinksSelf}
     * @memberof ServiceAccountsManageClientSecretResponseDataLinks
     */
    'self'?: ServiceAccountsManageClientSecretResponseDataLinksSelf;
}
