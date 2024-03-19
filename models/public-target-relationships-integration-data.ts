/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PublicTargetRelationshipsIntegrationDataAttributes } from './public-target-relationships-integration-data-attributes';

/**
 * 
 * @export
 * @interface PublicTargetRelationshipsIntegrationData
 */
export interface PublicTargetRelationshipsIntegrationData {
    /**
     * 
     * @type {PublicTargetRelationshipsIntegrationDataAttributes}
     * @memberof PublicTargetRelationshipsIntegrationData
     */
    'attributes': PublicTargetRelationshipsIntegrationDataAttributes;
    /**
     * 
     * @type {string}
     * @memberof PublicTargetRelationshipsIntegrationData
     */
    'id': string | null;
    /**
     * Content type.
     * @type {string}
     * @memberof PublicTargetRelationshipsIntegrationData
     */
    'type': string;
}

