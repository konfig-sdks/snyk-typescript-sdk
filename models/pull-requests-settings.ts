/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Settings which describe how pull requests for a project are tested.
 * @export
 * @interface PullRequestsSettings
 */
export interface PullRequestsSettings {
    /**
     * Only fail when the issues found have a fix available.
     * @type {boolean}
     * @memberof PullRequestsSettings
     */
    'fail_only_for_issues_with_fix'?: boolean;
    /**
     * Fail if the project has any issues (\"all\"), or fail if a PR is introducing a new dependency with issues (\"only_new\"). If this value is unset, the setting is inherited from the org default.
     * @type {string}
     * @memberof PullRequestsSettings
     */
    'policy'?: PullRequestsSettingsPolicyEnum;
    /**
     * Only fail for issues greater than or equal to the specified severity. If this value is unset, the setting is inherited from the org default.
     * @type {string}
     * @memberof PullRequestsSettings
     */
    'severity_threshold'?: PullRequestsSettingsSeverityThresholdEnum;
}

type PullRequestsSettingsPolicyEnum = 'all' | 'only_new'
type PullRequestsSettingsSeverityThresholdEnum = 'low' | 'medium' | 'high' | 'critical'

