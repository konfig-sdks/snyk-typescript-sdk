/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RiskFactorLinks } from './risk-factor-links';

/**
 * 
 * @export
 * @interface PublicFacingRiskFactor
 */
export interface PublicFacingRiskFactor {
    /**
     * 
     * @type {boolean}
     * @memberof PublicFacingRiskFactor
     */
    'included_in_score'?: boolean;
    /**
     * 
     * @type {RiskFactorLinks}
     * @memberof PublicFacingRiskFactor
     */
    'links'?: RiskFactorLinks;
    /**
     * 
     * @type {string}
     * @memberof PublicFacingRiskFactor
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof PublicFacingRiskFactor
     */
    'updated_at': string;
    /**
     * 
     * @type {boolean}
     * @memberof PublicFacingRiskFactor
     */
    'value': boolean;
}
