/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface SlackChannelAttributes
 */
export interface SlackChannelAttributes {
    /**
     * Name of the Slack Channel
     * @type {string}
     * @memberof SlackChannelAttributes
     */
    'name'?: string;
    /**
     * Channel type
     * @type {string}
     * @memberof SlackChannelAttributes
     */
    'type'?: SlackChannelAttributesTypeEnum;
}

type SlackChannelAttributesTypeEnum = 'public' | 'private' | 'direct_message' | 'multiparty_direct_message'


