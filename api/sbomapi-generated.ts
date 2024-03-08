/* tslint:disable */
/* eslint-disable */
/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CycloneDxDocument } from '../models';
// @ts-ignore
import { CycloneDxXmlDocument } from '../models';
// @ts-ignore
import { ErrorDocument } from '../models';
// @ts-ignore
import { SbomResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SBOMApi - axios parameter creator
 * @export
 */
export const SBOMApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint lets you retrieve the SBOM document of a software project. It supports the following formats: * CycloneDX version 1.4 in JSON (set `format` to `cyclonedx1.4+json`). * CycloneDX version 1.4 in XML (set `format` to `cyclonedx1.4+xml`). * SPDX version 2.3 in JSON (set `format` to `spdx2.3+json`).  By default it will respond with an empty JSON:API response.
         * @summary Get a project’s SBOM document
         * @param {string} version The requested version of the endpoint to process the request
         * @param {string} orgId Unique identifier for an organization
         * @param {string} projectId Unique identifier for a project
         * @param {'cyclonedx1.4+json' | 'cyclonedx1.4+xml' | 'spdx2.3+json'} [format] The desired SBOM format of the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectDocument: async (version: string, orgId: string, projectId: string, format?: 'cyclonedx1.4+json' | 'cyclonedx1.4+xml' | 'spdx2.3+json', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'version' is not null or undefined
            assertParamExists('getProjectDocument', 'version', version)
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('getProjectDocument', 'orgId', orgId)
            // verify required parameter 'projectId' is not null or undefined
            assertParamExists('getProjectDocument', 'projectId', projectId)
            const localVarPath = `/orgs/{org_id}/projects/{project_id}/sbom`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId !== undefined ? orgId : `-org_id-`)))
                .replace(`{${"project_id"}}`, encodeURIComponent(String(projectId !== undefined ? projectId : `-project_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIToken required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "aPIToken", configuration })
            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/orgs/{org_id}/projects/{project_id}/sbom',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SBOMApi - functional programming interface
 * @export
 */
export const SBOMApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SBOMApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint lets you retrieve the SBOM document of a software project. It supports the following formats: * CycloneDX version 1.4 in JSON (set `format` to `cyclonedx1.4+json`). * CycloneDX version 1.4 in XML (set `format` to `cyclonedx1.4+xml`). * SPDX version 2.3 in JSON (set `format` to `spdx2.3+json`).  By default it will respond with an empty JSON:API response.
         * @summary Get a project’s SBOM document
         * @param {SBOMApiGetProjectDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProjectDocument(requestParameters: SBOMApiGetProjectDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: any; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectDocument(requestParameters.version, requestParameters.orgId, requestParameters.projectId, requestParameters.format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SBOMApi - factory interface
 * @export
 */
export const SBOMApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SBOMApiFp(configuration)
    return {
        /**
         * This endpoint lets you retrieve the SBOM document of a software project. It supports the following formats: * CycloneDX version 1.4 in JSON (set `format` to `cyclonedx1.4+json`). * CycloneDX version 1.4 in XML (set `format` to `cyclonedx1.4+xml`). * SPDX version 2.3 in JSON (set `format` to `spdx2.3+json`).  By default it will respond with an empty JSON:API response.
         * @summary Get a project’s SBOM document
         * @param {SBOMApiGetProjectDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProjectDocument(requestParameters: SBOMApiGetProjectDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<{ [key: string]: any; }> {
            return localVarFp.getProjectDocument(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getProjectDocument operation in SBOMApi.
 * @export
 * @interface SBOMApiGetProjectDocumentRequest
 */
export type SBOMApiGetProjectDocumentRequest = {
    
    /**
    * The requested version of the endpoint to process the request
    * @type {string}
    * @memberof SBOMApiGetProjectDocument
    */
    readonly version: string
    
    /**
    * Unique identifier for an organization
    * @type {string}
    * @memberof SBOMApiGetProjectDocument
    */
    readonly orgId: string
    
    /**
    * Unique identifier for a project
    * @type {string}
    * @memberof SBOMApiGetProjectDocument
    */
    readonly projectId: string
    
    /**
    * The desired SBOM format of the response.
    * @type {'cyclonedx1.4+json' | 'cyclonedx1.4+xml' | 'spdx2.3+json'}
    * @memberof SBOMApiGetProjectDocument
    */
    readonly format?: 'cyclonedx1.4+json' | 'cyclonedx1.4+xml' | 'spdx2.3+json'
    
}

/**
 * SBOMApiGenerated - object-oriented interface
 * @export
 * @class SBOMApiGenerated
 * @extends {BaseAPI}
 */
export class SBOMApiGenerated extends BaseAPI {
    /**
     * This endpoint lets you retrieve the SBOM document of a software project. It supports the following formats: * CycloneDX version 1.4 in JSON (set `format` to `cyclonedx1.4+json`). * CycloneDX version 1.4 in XML (set `format` to `cyclonedx1.4+xml`). * SPDX version 2.3 in JSON (set `format` to `spdx2.3+json`).  By default it will respond with an empty JSON:API response.
     * @summary Get a project’s SBOM document
     * @param {SBOMApiGetProjectDocumentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SBOMApiGenerated
     */
    public getProjectDocument(requestParameters: SBOMApiGetProjectDocumentRequest, options?: AxiosRequestConfig) {
        return SBOMApiFp(this.configuration).getProjectDocument(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
