/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppsCreateInstallSecretRequestDataAttributes } from './apps-create-install-secret-request-data-attributes';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecretRequestData
 */
export interface AppsCreateInstallSecretRequestData {
    /**
     * 
     * @type {AppsCreateInstallSecretRequestDataAttributes}
     * @memberof AppsCreateInstallSecretRequestData
     */
    'attributes': AppsCreateInstallSecretRequestDataAttributes;
    /**
     * 
     * @type {string}
     * @memberof AppsCreateInstallSecretRequestData
     */
    'type': AppsCreateInstallSecretRequestDataTypeEnum;
}

type AppsCreateInstallSecretRequestDataTypeEnum = 'app'


