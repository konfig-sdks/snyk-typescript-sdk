/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InheritFromParent } from './inherit-from-parent';

/**
 * The Infrastructure as Code custom rules settings for an org.
 * @export
 * @interface OrgIacSettingsRequestAttributesCustomRules
 */
export interface OrgIacSettingsRequestAttributesCustomRules {
    /**
     * Which parent to inherit settings from.
     * @type {InheritFromParent}
     * @memberof OrgIacSettingsRequestAttributesCustomRules
     */
    'inherit_from_parent'?: InheritFromParent;
    /**
     * Whether the custom rules feature is enabled or not.
     * @type {boolean}
     * @memberof OrgIacSettingsRequestAttributesCustomRules
     */
    'is_enabled'?: boolean;
    /**
     * The tag for an OCI artifact inside an OCI registry.
     * @type {string}
     * @memberof OrgIacSettingsRequestAttributesCustomRules
     */
    'oci_registry_tag'?: string;
    /**
     * The URL to an OCI registry.
     * @type {string}
     * @memberof OrgIacSettingsRequestAttributesCustomRules
     */
    'oci_registry_url'?: string;
}

