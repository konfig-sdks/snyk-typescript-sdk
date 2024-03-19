/* tslint:disable */
/* eslint-disable */
/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

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
import { ErrorDocument } from '../models';
// @ts-ignore
import { InvitesListPendingUserInvitationsResponse } from '../models';
// @ts-ignore
import { InvitesUserToOrganizationRequest } from '../models';
// @ts-ignore
import { InvitesUserToOrganizationResponse } from '../models';
// @ts-ignore
import { OrgInvitationPostData } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * InvitesApi - axios parameter creator
 * @export
 */
export const InvitesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Cancel a pending user invitations to an organization.
         * @summary Cancel a pending user invitations to an organization.
         * @param {string} orgId The id of the org the user is being invited to
         * @param {string} inviteId The id of the pending invite to cancel
         * @param {string} version The requested version of the endpoint to process the request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelPendingInvitation: async (orgId: string, inviteId: string, version: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('cancelPendingInvitation', 'orgId', orgId)
            // verify required parameter 'inviteId' is not null or undefined
            assertParamExists('cancelPendingInvitation', 'inviteId', inviteId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('cancelPendingInvitation', 'version', version)
            const localVarPath = `/orgs/{org_id}/invites/{invite_id}`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId !== undefined ? orgId : `-org_id-`)))
                .replace(`{${"invite_id"}}`, encodeURIComponent(String(inviteId !== undefined ? inviteId : `-invite_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/orgs/{org_id}/invites/{invite_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List pending user invitations to an organization.
         * @summary List pending user invitations to an organization.
         * @param {string} orgId The id of the org the user is being invited to
         * @param {string} version The requested version of the endpoint to process the request
         * @param {string} [startingAfter] Return the page of results immediately after this cursor
         * @param {string} [endingBefore] Return the page of results immediately before this cursor
         * @param {number} [limit] Number of results to return per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPendingUserInvitations: async (orgId: string, version: string, startingAfter?: string, endingBefore?: string, limit?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('listPendingUserInvitations', 'orgId', orgId)
            // verify required parameter 'version' is not null or undefined
            assertParamExists('listPendingUserInvitations', 'version', version)
            const localVarPath = `/orgs/{org_id}/invites`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId !== undefined ? orgId : `-org_id-`)));
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

            if (startingAfter !== undefined) {
                localVarQueryParameter['starting_after'] = startingAfter;
            }

            if (endingBefore !== undefined) {
                localVarQueryParameter['ending_before'] = endingBefore;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/orgs/{org_id}/invites',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invite a user to an organization with a role.
         * @summary Invite a user to an organization
         * @param {string} version The requested version of the endpoint to process the request
         * @param {string} orgId The id of the org the user is being invited to
         * @param {InvitesUserToOrganizationRequest} [invitesUserToOrganizationRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userToOrganization: async (version: string, orgId: string, invitesUserToOrganizationRequest?: InvitesUserToOrganizationRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'version' is not null or undefined
            assertParamExists('userToOrganization', 'version', version)
            // verify required parameter 'orgId' is not null or undefined
            assertParamExists('userToOrganization', 'orgId', orgId)
            const localVarPath = `/orgs/{org_id}/invites`
                .replace(`{${"org_id"}}`, encodeURIComponent(String(orgId !== undefined ? orgId : `-org_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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


    
            localVarHeaderParameter['Content-Type'] = 'application/vnd.api+json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: invitesUserToOrganizationRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/orgs/{org_id}/invites',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(invitesUserToOrganizationRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InvitesApi - functional programming interface
 * @export
 */
export const InvitesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InvitesApiAxiosParamCreator(configuration)
    return {
        /**
         * Cancel a pending user invitations to an organization.
         * @summary Cancel a pending user invitations to an organization.
         * @param {InvitesApiCancelPendingInvitationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelPendingInvitation(requestParameters: InvitesApiCancelPendingInvitationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelPendingInvitation(requestParameters.orgId, requestParameters.inviteId, requestParameters.version, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List pending user invitations to an organization.
         * @summary List pending user invitations to an organization.
         * @param {InvitesApiListPendingUserInvitationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPendingUserInvitations(requestParameters: InvitesApiListPendingUserInvitationsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitesListPendingUserInvitationsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPendingUserInvitations(requestParameters.orgId, requestParameters.version, requestParameters.startingAfter, requestParameters.endingBefore, requestParameters.limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invite a user to an organization with a role.
         * @summary Invite a user to an organization
         * @param {InvitesApiUserToOrganizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userToOrganization(requestParameters: InvitesApiUserToOrganizationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InvitesUserToOrganizationResponse>> {
            const invitesUserToOrganizationRequest: InvitesUserToOrganizationRequest = {
                data: requestParameters.data
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.userToOrganization(requestParameters.version, requestParameters.orgId, invitesUserToOrganizationRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InvitesApi - factory interface
 * @export
 */
export const InvitesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InvitesApiFp(configuration)
    return {
        /**
         * Cancel a pending user invitations to an organization.
         * @summary Cancel a pending user invitations to an organization.
         * @param {InvitesApiCancelPendingInvitationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelPendingInvitation(requestParameters: InvitesApiCancelPendingInvitationRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cancelPendingInvitation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List pending user invitations to an organization.
         * @summary List pending user invitations to an organization.
         * @param {InvitesApiListPendingUserInvitationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPendingUserInvitations(requestParameters: InvitesApiListPendingUserInvitationsRequest, options?: AxiosRequestConfig): AxiosPromise<InvitesListPendingUserInvitationsResponse> {
            return localVarFp.listPendingUserInvitations(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Invite a user to an organization with a role.
         * @summary Invite a user to an organization
         * @param {InvitesApiUserToOrganizationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userToOrganization(requestParameters: InvitesApiUserToOrganizationRequest, options?: AxiosRequestConfig): AxiosPromise<InvitesUserToOrganizationResponse> {
            return localVarFp.userToOrganization(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelPendingInvitation operation in InvitesApi.
 * @export
 * @interface InvitesApiCancelPendingInvitationRequest
 */
export type InvitesApiCancelPendingInvitationRequest = {
    
    /**
    * The id of the org the user is being invited to
    * @type {string}
    * @memberof InvitesApiCancelPendingInvitation
    */
    readonly orgId: string
    
    /**
    * The id of the pending invite to cancel
    * @type {string}
    * @memberof InvitesApiCancelPendingInvitation
    */
    readonly inviteId: string
    
    /**
    * The requested version of the endpoint to process the request
    * @type {string}
    * @memberof InvitesApiCancelPendingInvitation
    */
    readonly version: string
    
}

/**
 * Request parameters for listPendingUserInvitations operation in InvitesApi.
 * @export
 * @interface InvitesApiListPendingUserInvitationsRequest
 */
export type InvitesApiListPendingUserInvitationsRequest = {
    
    /**
    * The id of the org the user is being invited to
    * @type {string}
    * @memberof InvitesApiListPendingUserInvitations
    */
    readonly orgId: string
    
    /**
    * The requested version of the endpoint to process the request
    * @type {string}
    * @memberof InvitesApiListPendingUserInvitations
    */
    readonly version: string
    
    /**
    * Return the page of results immediately after this cursor
    * @type {string}
    * @memberof InvitesApiListPendingUserInvitations
    */
    readonly startingAfter?: string
    
    /**
    * Return the page of results immediately before this cursor
    * @type {string}
    * @memberof InvitesApiListPendingUserInvitations
    */
    readonly endingBefore?: string
    
    /**
    * Number of results to return per page
    * @type {number}
    * @memberof InvitesApiListPendingUserInvitations
    */
    readonly limit?: number
    
}

/**
 * Request parameters for userToOrganization operation in InvitesApi.
 * @export
 * @interface InvitesApiUserToOrganizationRequest
 */
export type InvitesApiUserToOrganizationRequest = {
    
    /**
    * The requested version of the endpoint to process the request
    * @type {string}
    * @memberof InvitesApiUserToOrganization
    */
    readonly version: string
    
    /**
    * The id of the org the user is being invited to
    * @type {string}
    * @memberof InvitesApiUserToOrganization
    */
    readonly orgId: string
    
} & InvitesUserToOrganizationRequest

/**
 * InvitesApiGenerated - object-oriented interface
 * @export
 * @class InvitesApiGenerated
 * @extends {BaseAPI}
 */
export class InvitesApiGenerated extends BaseAPI {
    /**
     * Cancel a pending user invitations to an organization.
     * @summary Cancel a pending user invitations to an organization.
     * @param {InvitesApiCancelPendingInvitationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitesApiGenerated
     */
    public cancelPendingInvitation(requestParameters: InvitesApiCancelPendingInvitationRequest, options?: AxiosRequestConfig) {
        return InvitesApiFp(this.configuration).cancelPendingInvitation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List pending user invitations to an organization.
     * @summary List pending user invitations to an organization.
     * @param {InvitesApiListPendingUserInvitationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitesApiGenerated
     */
    public listPendingUserInvitations(requestParameters: InvitesApiListPendingUserInvitationsRequest, options?: AxiosRequestConfig) {
        return InvitesApiFp(this.configuration).listPendingUserInvitations(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invite a user to an organization with a role.
     * @summary Invite a user to an organization
     * @param {InvitesApiUserToOrganizationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InvitesApiGenerated
     */
    public userToOrganization(requestParameters: InvitesApiUserToOrganizationRequest, options?: AxiosRequestConfig) {
        return InvitesApiFp(this.configuration).userToOrganization(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
