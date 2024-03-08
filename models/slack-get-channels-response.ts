/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { PaginatedLinks } from './paginated-links';
import { SlackChannel } from './slack-channel';

/**
 * 
 * @export
 * @interface SlackGetChannelsResponse
 */
export interface SlackGetChannelsResponse {
    /**
     * 
     * @type {Array<SlackChannel>}
     * @memberof SlackGetChannelsResponse
     */
    'data': Array<SlackChannel>;
    /**
     * 
     * @type {JsonApi}
     * @memberof SlackGetChannelsResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {PaginatedLinks}
     * @memberof SlackGetChannelsResponse
     */
    'links': PaginatedLinks;
}
