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

import { BulkSendValidateCsv422ResponseErrorsBulkSendCsvInnerData } from './bulk-send-validate-csv422-response-errors-bulk-send-csv-inner-data';

/**
 * 
 * @export
 * @interface BulkSendValidateCsv422ResponseErrorsBulkSendCsvInner
 */
export interface BulkSendValidateCsv422ResponseErrorsBulkSendCsvInner {
    /**
     * 
     * @type {number}
     * @memberof BulkSendValidateCsv422ResponseErrorsBulkSendCsvInner
     */
    'row'?: number;
    /**
     * 
     * @type {BulkSendValidateCsv422ResponseErrorsBulkSendCsvInnerData}
     * @memberof BulkSendValidateCsv422ResponseErrorsBulkSendCsvInner
     */
    'data'?: BulkSendValidateCsv422ResponseErrorsBulkSendCsvInnerData;
    /**
     * 
     * @type {Array<string>}
     * @memberof BulkSendValidateCsv422ResponseErrorsBulkSendCsvInner
     */
    'errors'?: Array<string>;
}

