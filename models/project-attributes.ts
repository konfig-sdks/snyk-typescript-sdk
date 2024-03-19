/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectAttributesBuildArgs } from './project-attributes-build-args';
import { ProjectAttributesTagsInner } from './project-attributes-tags-inner';
import { ProjectSettings } from './project-settings';

/**
 * 
 * @export
 * @interface ProjectAttributes
 */
export interface ProjectAttributes {
    /**
     * 
     * @type {Array<ProjectAttributesTagsInner>}
     * @memberof ProjectAttributes
     */
    'tags'?: Array<ProjectAttributesTagsInner>;
    /**
     * 
     * @type {ProjectAttributesBuildArgs}
     * @memberof ProjectAttributes
     */
    'build_args'?: ProjectAttributesBuildArgs;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectAttributes
     */
    'business_criticality'?: Array<ProjectAttributesBusinessCriticalityEnum>;
    /**
     * The date that the project was created on
     * @type {string}
     * @memberof ProjectAttributes
     */
    'created': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectAttributes
     */
    'environment'?: Array<ProjectAttributesEnvironmentEnum>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProjectAttributes
     */
    'lifecycle'?: Array<ProjectAttributesLifecycleEnum>;
    /**
     * Project name.
     * @type {string}
     * @memberof ProjectAttributes
     */
    'name': string;
    /**
     * The origin the project was added from.
     * @type {string}
     * @memberof ProjectAttributes
     */
    'origin': string;
    /**
     * Whether the project is read-only
     * @type {boolean}
     * @memberof ProjectAttributes
     */
    'read_only': boolean;
    /**
     * 
     * @type {ProjectSettings}
     * @memberof ProjectAttributes
     */
    'settings': ProjectSettings;
    /**
     * Describes if a project is currently monitored or it is de-activated.
     * @type {string}
     * @memberof ProjectAttributes
     */
    'status': ProjectAttributesStatusEnum;
    /**
     * Path within the target to identify a specific file/directory/image etc. when scanning just part  of the target, and not the entity.
     * @type {string}
     * @memberof ProjectAttributes
     */
    'target_file': string;
    /**
     * The additional information required to resolve which revision of the resource should be scanned.
     * @type {string}
     * @memberof ProjectAttributes
     */
    'target_reference': string;
    /**
     * Dotnet Target, for relevant projects
     * @type {string}
     * @memberof ProjectAttributes
     */
    'target_runtime'?: string;
    /**
     * The package manager of the project.
     * @type {string}
     * @memberof ProjectAttributes
     */
    'type': string;
}

type ProjectAttributesBusinessCriticalityEnum = 'critical' | 'high' | 'medium' | 'low'
type ProjectAttributesEnvironmentEnum = 'frontend' | 'backend' | 'internal' | 'external' | 'mobile' | 'saas' | 'onprem' | 'hosted' | 'distributed'
type ProjectAttributesLifecycleEnum = 'production' | 'development' | 'sandbox'
type ProjectAttributesStatusEnum = 'active' | 'inactive'


