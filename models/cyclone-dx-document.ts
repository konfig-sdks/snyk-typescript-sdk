/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CycloneDxComponent } from './cyclone-dx-component';
import { CycloneDxDependency } from './cyclone-dx-dependency';
import { CycloneDxMetadata } from './cyclone-dx-metadata';

/**
 * 
 * @export
 * @interface CycloneDxDocument
 */
export interface CycloneDxDocument {
    /**
     * A list of included software components
     * @type {Array<CycloneDxComponent>}
     * @memberof CycloneDxDocument
     */
    'components'?: Array<CycloneDxComponent>;
    /**
     * 
     * @type {number}
     * @memberof CycloneDxDocument
     */
    'version': number;
    /**
     * 
     * @type {string}
     * @memberof CycloneDxDocument
     */
    'bomFormat': CycloneDxDocumentBomFormatEnum;
    /**
     * 
     * @type {Array<CycloneDxDependency>}
     * @memberof CycloneDxDocument
     */
    'dependencies': Array<CycloneDxDependency>;
    /**
     * 
     * @type {CycloneDxMetadata}
     * @memberof CycloneDxDocument
     */
    'metadata': CycloneDxMetadata;
    /**
     * 
     * @type {string}
     * @memberof CycloneDxDocument
     */
    'specVersion': string;
}

type CycloneDxDocumentBomFormatEnum = 'CycloneDX'

