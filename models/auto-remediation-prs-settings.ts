/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Automatically raise pull requests on recurring tests to fix new and existing vulnerabilities. If not specified, settings will be inherited from the Project\'s integration.
 * @export
 * @interface AutoRemediationPRsSettings
 */
export interface AutoRemediationPRsSettings {
    /**
     * Automatically create pull requests on scheduled tests for known (backlog) vulnerabilities.
     * @type {boolean}
     * @memberof AutoRemediationPRsSettings
     */
    'is_backlog_prs_enabled'?: boolean;
    /**
     * Automatically create pull requests on scheduled tests for new vulnerabilities.
     * @type {boolean}
     * @memberof AutoRemediationPRsSettings
     */
    'is_fresh_prs_enabled'?: boolean;
    /**
     * Include vulnerability patches in automatic pull requests.
     * @type {boolean}
     * @memberof AutoRemediationPRsSettings
     */
    'is_patch_remediation_enabled'?: boolean;
}

