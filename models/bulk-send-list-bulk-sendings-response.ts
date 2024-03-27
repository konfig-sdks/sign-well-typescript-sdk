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

import { BulkSendListBulkSendingsResponseBulkSendsInner } from './bulk-send-list-bulk-sendings-response-bulk-sends-inner';

/**
 * 
 * @export
 * @interface BulkSendListBulkSendingsResponse
 */
export interface BulkSendListBulkSendingsResponse {
    /**
     * 
     * @type {Array<BulkSendListBulkSendingsResponseBulkSendsInner>}
     * @memberof BulkSendListBulkSendingsResponse
     */
    'bulk_sends'?: Array<BulkSendListBulkSendingsResponseBulkSendsInner>;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListBulkSendingsResponse
     */
    'current_page'?: number;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListBulkSendingsResponse
     */
    'next_page'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BulkSendListBulkSendingsResponse
     */
    'previous_page'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListBulkSendingsResponse
     */
    'total_count'?: number;
    /**
     * 
     * @type {number}
     * @memberof BulkSendListBulkSendingsResponse
     */
    'total_pages'?: number;
}

