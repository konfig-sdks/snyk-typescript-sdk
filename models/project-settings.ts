/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AutoDependencyUpgradeSettings } from './auto-dependency-upgrade-settings';
import { AutoRemediationPRsSettings } from './auto-remediation-prs-settings';
import { ManualRemediationPRsSettings } from './manual-remediation-prs-settings';
import { PullRequestAssignmentSettings } from './pull-request-assignment-settings';
import { PullRequestsSettings } from './pull-requests-settings';
import { RecurringTestsSettings } from './recurring-tests-settings';

/**
 * 
 * @export
 * @interface ProjectSettings
 */
export interface ProjectSettings {
    /**
     * 
     * @type {AutoDependencyUpgradeSettings}
     * @memberof ProjectSettings
     */
    'auto_dependency_upgrade'?: AutoDependencyUpgradeSettings;
    /**
     * 
     * @type {AutoRemediationPRsSettings}
     * @memberof ProjectSettings
     */
    'auto_remediation_prs'?: AutoRemediationPRsSettings;
    /**
     * 
     * @type {ManualRemediationPRsSettings}
     * @memberof ProjectSettings
     */
    'manual_remediation_prs'?: ManualRemediationPRsSettings;
    /**
     * 
     * @type {PullRequestAssignmentSettings}
     * @memberof ProjectSettings
     */
    'pull_request_assignment'?: PullRequestAssignmentSettings;
    /**
     * 
     * @type {PullRequestsSettings}
     * @memberof ProjectSettings
     */
    'pull_requests': PullRequestsSettings;
    /**
     * 
     * @type {RecurringTestsSettings}
     * @memberof ProjectSettings
     */
    'recurring_tests': RecurringTestsSettings;
}

