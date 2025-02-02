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

import { AdditionalFieldsMapInnerInner } from './additional-fields-map-inner-inner';
import { AdditionalFilesMapInner } from './additional-files-map-inner';
import { AttachmentRequestsMapInner } from './attachment-requests-map-inner';
import { CopiedContactsMapInner } from './copied-contacts-map-inner';
import { TemplateFieldsMapInner } from './template-fields-map-inner';
import { TemplateRecipientsMapInner } from './template-recipients-map-inner';

/**
 * 
 * @export
 * @interface DocumentFromTemplateRequest
 */
export interface DocumentFromTemplateRequest {
    /**
     * Set to `true` to enable Test Mode. Documents created with Test Mode do not count towards API billing and are not legally binding. Defaults to `false`
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'test_mode'?: boolean;
    /**
     * Use when you have to create a document from a single template. Either :template_id or :template_ids must be present in the request, not both.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'template_id'?: string;
    /**
     * Use when you have to create a document from multiple templates. Either :template_id or :template_ids must be present in the request, not both.
     * @type {Array<string>}
     * @memberof DocumentFromTemplateRequest
     */
    'template_ids'?: Array<string>;
    /**
     * The name of the document.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'name'?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template).
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'subject'?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template).
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'message'?: string;
    /**
     * Document recipients are people that must complete and/or sign a document. Recipients of the document must be assigned to a placeholder of the template. Recipients will inherit all placeholder fields and settings.
     * @type {Array<TemplateRecipientsMapInner>}
     * @memberof DocumentFromTemplateRequest
     */
    'recipients': Array<TemplateRecipientsMapInner>;
    /**
     * Whether the document can still be updated before sending a signature request. If set to `false` the document is sent for signing as part of this request. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'draft'?: boolean;
    /**
     * When set to `true` the document will have a signature page added to the end, and all signers will be required to add their signature on that page.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'with_signature_page'?: boolean;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof DocumentFromTemplateRequest
     */
    'expires_in'?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'reminders'?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'apply_signing_order'?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'api_application_id'?: string;
    /**
     * When set to `true` it enables embedded signing in your website/web application. Embedded functionality works with an iFrame and email authentication is disabled. :embedded_signinig defaults to `false`.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'embedded_signing'?: boolean;
    /**
     * On embedding signing, document owners (and CC\'d contacts) do not get a notification email when documents have been completed. Setting this param to `true` will send out those final completed notifications. Default is `false`
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'embedded_signing_notifications'?: boolean;
    /**
     * An alternative way (if you can’t use the recommended way) of placing fields in specific locations of your document by using special text tags. Useful when changing the content of your files changes the location of fields. See API documentation for “Text Tags” for details. Defaults to false.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'text_tags'?: boolean;
    /**
     * Sets the custom requester name for the document. When set, this is the name used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'custom_requester_name'?: string;
    /**
     * Sets the custom requester email for the document. When set, this is the email used for all email communications, signing notifications, and in the audit file.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'custom_requester_email'?: string;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'redirect_url'?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'allow_decline'?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else.
     * @type {boolean}
     * @memberof DocumentFromTemplateRequest
     */
    'allow_reassign'?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof DocumentFromTemplateRequest
     */
    'decline_redirect_url'?: string;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {object}
     * @memberof DocumentFromTemplateRequest
     */
    'metadata'?: object;
    /**
     * Fields of your template(s) that you can prepopulate with values. Signature and Initials fields cannot be signed through the API.
     * @type {Array<TemplateFieldsMapInner>}
     * @memberof DocumentFromTemplateRequest
     */
    'template_fields'?: Array<TemplateFieldsMapInner>;
    /**
     * 
     * @type {Array<AdditionalFilesMapInner>}
     * @memberof DocumentFromTemplateRequest
     */
    'files'?: Array<AdditionalFilesMapInner>;
    /**
     * Fields to be added to any appended files (not existing files). Document fields placed on a document for collecting data or signatures from recipients. Field data should be sent as a 2-dimensional JSON array. One array of fields is needed for each file in the files array. An array of fields can be empty if you have a file that does not contain any fields.
     * @type {Array<Array<AdditionalFieldsMapInnerInner>>}
     * @memberof DocumentFromTemplateRequest
     */
    'fields'?: Array<Array<AdditionalFieldsMapInnerInner>>;
    /**
     * Attachments that a recipient must upload to complete the signing process. Attachment requests are shown after all document fields have been completed.
     * @type {Array<AttachmentRequestsMapInner>}
     * @memberof DocumentFromTemplateRequest
     */
    'attachment_requests'?: Array<AttachmentRequestsMapInner>;
    /**
     * Copied contacts are emailed the final document once it has been completed by all recipients.
     * @type {Array<CopiedContactsMapInner>}
     * @memberof DocumentFromTemplateRequest
     */
    'copied_contacts'?: Array<CopiedContactsMapInner>;
}

