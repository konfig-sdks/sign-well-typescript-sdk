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
 * @interface PlaceholdersMapInner
 */
export interface PlaceholdersMapInner {
    /**
     * A unique identifier that you will give to each placeholder. We recommend numbering sequentially from 1 to X. IDs are required for associating recipients to fields and more.
     * @type {string}
     * @memberof PlaceholdersMapInner
     */
    'id': string;
    /**
     * Name of the placeholder.
     * @type {string}
     * @memberof PlaceholdersMapInner
     */
    'name': string;
    /**
     * In some cases, it may be necessary to pre-fill the name and email for a placeholder because it will always be the same person for all documents created from this template. This sets the name.
     * @type {string}
     * @memberof PlaceholdersMapInner
     */
    'preassigned_recipient_name'?: string;
    /**
     * In some cases, it may be necessary to pre-fill the name and email for a placeholder because it will always be the same person for all documents created from this template. This sets the email.
     * @type {string}
     * @memberof PlaceholdersMapInner
     */
    'preassigned_recipient_email'?: string;
}

