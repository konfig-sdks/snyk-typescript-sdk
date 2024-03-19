/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrgIacSettingsResponseAttributesCustomRulesParentsGroup } from './org-iac-settings-response-attributes-custom-rules-parents-group';

/**
 * Contains all parents the org can inherit settings from.
 * @export
 * @interface OrgIacSettingsResponseAttributesCustomRulesParents
 */
export interface OrgIacSettingsResponseAttributesCustomRulesParents {
    /**
     * 
     * @type {OrgIacSettingsResponseAttributesCustomRulesParentsGroup}
     * @memberof OrgIacSettingsResponseAttributesCustomRulesParents
     */
    'group'?: OrgIacSettingsResponseAttributesCustomRulesParentsGroup;
}

