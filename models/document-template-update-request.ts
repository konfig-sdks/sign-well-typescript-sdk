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


/**
 * 
 * @export
 * @interface DocumentTemplateUpdateRequest
 */
export interface DocumentTemplateUpdateRequest {
    /**
     * The name of the template.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    'name'?: string;
    /**
     * Email subject for the signature request that recipients will see. Defaults to the default system subject or a template subject (if the document is created from a template).
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    'subject'?: string;
    /**
     * Email message for the signature request that recipients will see. Defaults to the default system message or a template message (if the document is created from a template).
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    'message'?: string;
    /**
     * Whether the template can still be updated before it is ready for usage. If set to `false` the template is marked as `Available` and it will be ready for use. Defaults to `false`.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    'draft'?: boolean;
    /**
     * Number of days before the signature request expires. Defaults to the account expiration setting or template expiration (if the document is created from a template).
     * @type {number}
     * @memberof DocumentTemplateUpdateRequest
     */
    'expires_in'?: number;
    /**
     * Whether to send signing reminders to recipients. Reminders are sent on day 3, day 6, and day 10 if set to `true`. Defaults to `true`.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    'reminders'?: boolean;
    /**
     * When set to `true` recipients will sign one at a time in the order of the `recipients` collection of this request.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    'apply_signing_order'?: boolean;
    /**
     * Unique identifier for API Application settings to use. API Applications are optional and mainly used when isolating OAuth apps or for more control over embedded API settings
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    'api_application_id'?: string;
    /**
     * A URL that recipients are redirected to after successfully signing a document.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    'redirect_url'?: string;
    /**
     * Whether to allow recipients the option to decline signing a document. If multiple signers are involved in a document, any single recipient can cancel the entire document signing process by declining to sign.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    'allow_decline'?: boolean;
    /**
     * In some cases a signer is not the right person to sign and may need to reassign their signing responsibilities to another person. This feature allows them to reassign the document to someone else.
     * @type {boolean}
     * @memberof DocumentTemplateUpdateRequest
     */
    'allow_reassign'?: boolean;
    /**
     * A URL that recipients are redirected to if the document is declined.
     * @type {string}
     * @memberof DocumentTemplateUpdateRequest
     */
    'decline_redirect_url'?: string;
    /**
     * Optional key-value data that can be associated with the document. If set, will be available every time the document data is returned.
     * @type {object}
     * @memberof DocumentTemplateUpdateRequest
     */
    'metadata'?: object;
}

