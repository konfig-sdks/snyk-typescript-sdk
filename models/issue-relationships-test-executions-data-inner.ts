/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TestExecutionType } from './test-execution-type';

/**
 * 
 * @export
 * @interface IssueRelationshipsTestExecutionsDataInner
 */
export interface IssueRelationshipsTestExecutionsDataInner {
    /**
     * 
     * @type {string}
     * @memberof IssueRelationshipsTestExecutionsDataInner
     */
    'id': string;
    /**
     * 
     * @type {TestExecutionType}
     * @memberof IssueRelationshipsTestExecutionsDataInner
     */
    'type': TestExecutionType;
}
