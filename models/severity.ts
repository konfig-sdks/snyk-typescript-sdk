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
 * @interface Severity
 */
export interface Severity {
    /**
     * 
     * @type {string}
     * @memberof Severity
     */
    'level'?: string;
    /**
     * The CVSSv3 value of the vulnerability.
     * @type {number}
     * @memberof Severity
     */
    'score'?: number | null;
    /**
     * The source of this severity. The value must be the id of a referenced problem or class, in which case that problem or class is the source of this issue. If source is omitted, this severity is sourced internally in the Snyk application.
     * @type {string}
     * @memberof Severity
     */
    'source'?: string;
    /**
     * The CVSSv3 value of the vulnerability.
     * @type {string}
     * @memberof Severity
     */
    'vector'?: string | null;
}

