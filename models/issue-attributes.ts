/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Class } from './class';
import { Coordinate } from './coordinate';
import { Problem } from './problem';
import { Resolution } from './resolution';
import { Risk } from './risk';
import { TypeDef } from './type-def';

/**
 * issue attributes
 * @export
 * @interface IssueAttributes
 */
export interface IssueAttributes {
    /**
     * A human-readable title for this issue.
     * @type {string}
     * @memberof IssueAttributes
     */
    'title': string;
    /**
     * A markdown-formatted optional description of this issue. Links are not permitted.
     * @type {string}
     * @memberof IssueAttributes
     */
    'description'?: string;
    /**
     * A list of details for weakness data, policy, etc that are the class of this issue\'s source.
     * @type {Array<Class>}
     * @memberof IssueAttributes
     */
    'classes'?: Array<Class>;
    /**
     * Where the issue originated, specific to issue type. Details on what code, package, etc introduced the issue. An issue may be caused by more than one coordinate. 
     * @type {Array<Coordinate>}
     * @memberof IssueAttributes
     */
    'coordinates'?: Array<Coordinate>;
    /**
     * The creation time of this issue.
     * @type {string}
     * @memberof IssueAttributes
     */
    'created_at': string;
    /**
     * The computed effective severity of this issue. This is either the highest level from all included severities, or an overridden value set via group level policy. 
     * @type {string}
     * @memberof IssueAttributes
     */
    'effective_severity_level': IssueAttributesEffectiveSeverityLevelEnum;
    /**
     * A flag indicating if the issue is being ignored. Derived from the issue\'s ignore, which provides more details.
     * @type {boolean}
     * @memberof IssueAttributes
     */
    'ignored': boolean;
    /**
     * An opaque key used for uniquely identifying this issue across test runs, within a project.
     * @type {string}
     * @memberof IssueAttributes
     */
    'key': string;
    /**
     * A list of details for vulnerability data, policy, etc that are the source of this issue.
     * @type {Array<Problem>}
     * @memberof IssueAttributes
     */
    'problems'?: Array<Problem>;
    /**
     * 
     * @type {Resolution}
     * @memberof IssueAttributes
     */
    'resolution'?: Resolution;
    /**
     * 
     * @type {Risk}
     * @memberof IssueAttributes
     */
    'risk'?: Risk;
    /**
     * The issue\'s status. Derived from the issue\'s resolution, which provides more details.
     * @type {string}
     * @memberof IssueAttributes
     */
    'status': IssueAttributesStatusEnum;
    /**
     * An opaque identifier for corelating across test runs.
     * @type {string}
     * @memberof IssueAttributes
     */
    'tool'?: string;
    /**
     * The type of an issue.
     * @type {TypeDef}
     * @memberof IssueAttributes
     */
    'type': TypeDef;
    /**
     * The time when this issue was last modified.
     * @type {string}
     * @memberof IssueAttributes
     */
    'updated_at': string;
}

type IssueAttributesEffectiveSeverityLevelEnum = 'info' | 'low' | 'medium' | 'high' | 'critical'
type IssueAttributesStatusEnum = 'open' | 'resolved'


