/*
Resources and endpoints

When I started SignWell in 2019, I saw there was a need for an alternative to the hard-to-use and expensive e-signature software already out there. Documents can be complicated enough, but getting a document signed shouldn't be complicated too.

At SignWell, we pride ourselves not only on the ease and affordability of our e-signature process but also on our personalized and industry-leading customer support — whether it's for individual use or larger team accounts, SignWell is here to help you feel comfortable and confident getting your documents signed.

The SignWell mission? Simplify how documents get signed for millions of people and businesses. We're excited to help you continue to move toward the future of paperless document signing.

Ruben Gamez
Founder, SignWell

The version of the OpenAPI document: 1


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TemplateCreateNewResponseCopiedPlaceholdersInner } from './template-create-new-response-copied-placeholders-inner';
import { TemplateCreateNewResponseFieldsInnerInner } from './template-create-new-response-fields-inner-inner';
import { TemplateCreateNewResponseFilesInner } from './template-create-new-response-files-inner';
import { TemplateCreateNewResponseMetadata } from './template-create-new-response-metadata';
import { TemplateCreateNewResponsePlaceholdersInner } from './template-create-new-response-placeholders-inner';

/**
 * 
 * @export
 * @interface TemplateCreateNewResponse
 */
export interface TemplateCreateNewResponse {
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateCreateNewResponse
     */
    'archived'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'embedded_edit_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'requester_email_address'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'template_link'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateCreateNewResponse
     */
    'allow_decline'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'allow_reassign'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'api_application_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'decline_redirect_url'?: string;
    /**
     * 
     * @type {number}
     * @memberof TemplateCreateNewResponse
     */
    'expires_in'?: number;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'redirect_url'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateCreateNewResponse
     */
    'reminders'?: boolean;
    /**
     * 
     * @type {TemplateCreateNewResponseMetadata}
     * @memberof TemplateCreateNewResponse
     */
    'metadata'?: TemplateCreateNewResponseMetadata;
    /**
     * 
     * @type {boolean}
     * @memberof TemplateCreateNewResponse
     */
    'apply_signing_order'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateCreateNewResponse
     */
    'subject'?: string;
    /**
     * 
     * @type {Array<Array<TemplateCreateNewResponseFieldsInnerInner>>}
     * @memberof TemplateCreateNewResponse
     */
    'fields'?: Array<Array<TemplateCreateNewResponseFieldsInnerInner>>;
    /**
     * 
     * @type {Array<TemplateCreateNewResponseFilesInner>}
     * @memberof TemplateCreateNewResponse
     */
    'files'?: Array<TemplateCreateNewResponseFilesInner>;
    /**
     * 
     * @type {Array<TemplateCreateNewResponseCopiedPlaceholdersInner>}
     * @memberof TemplateCreateNewResponse
     */
    'copied_placeholders'?: Array<TemplateCreateNewResponseCopiedPlaceholdersInner>;
    /**
     * 
     * @type {Array<TemplateCreateNewResponsePlaceholdersInner>}
     * @memberof TemplateCreateNewResponse
     */
    'placeholders'?: Array<TemplateCreateNewResponsePlaceholdersInner>;
}

