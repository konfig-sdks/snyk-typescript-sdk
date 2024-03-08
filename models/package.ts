/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Package
 */
export interface Package {
    /**
     * The version of the package
     * @type {string}
     * @memberof Package
     */
    'version': string;
    /**
     * The package’s name
     * @type {string}
     * @memberof Package
     */
    'name': string;
    /**
     * A name prefix, such as a maven group id or docker image owner
     * @type {string}
     * @memberof Package
     */
    'namespace'?: string;
    /**
     * The package type or protocol
     * @type {string}
     * @memberof Package
     */
    'type': string;
    /**
     * The purl of the package
     * @type {string}
     * @memberof Package
     */
    'url': string;
}

