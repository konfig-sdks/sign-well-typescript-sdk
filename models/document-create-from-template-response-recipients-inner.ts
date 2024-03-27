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
 * @interface DocumentCreateFromTemplateResponseRecipientsInner
 */
export interface DocumentCreateFromTemplateResponseRecipientsInner {
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'id'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'attachment_requests'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'passcode'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'send_email_delay'?: number;
    /**
     * 
     * @type {number}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'signing_order'?: number;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'subject'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'bounced'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'bounced_details'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'placeholder_name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'send_email'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateFromTemplateResponseRecipientsInner
     */
    'signing_url'?: string;
}

