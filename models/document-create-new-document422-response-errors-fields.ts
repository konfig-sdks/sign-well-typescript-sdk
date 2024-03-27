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

import { DocumentCreateNewDocument422ResponseErrorsFieldsFile1 } from './document-create-new-document422-response-errors-fields-file1';
import { DocumentCreateNewDocument422ResponseErrorsFieldsFile2 } from './document-create-new-document422-response-errors-fields-file2';

/**
 * 
 * @export
 * @interface DocumentCreateNewDocument422ResponseErrorsFields
 */
export interface DocumentCreateNewDocument422ResponseErrorsFields {
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateNewDocument422ResponseErrorsFields
     */
    'duplicated_api_ids'?: string;
    /**
     * 
     * @type {string}
     * @memberof DocumentCreateNewDocument422ResponseErrorsFields
     */
    'invalid_ids'?: string;
    /**
     * 
     * @type {DocumentCreateNewDocument422ResponseErrorsFieldsFile1}
     * @memberof DocumentCreateNewDocument422ResponseErrorsFields
     */
    'file_1'?: DocumentCreateNewDocument422ResponseErrorsFieldsFile1;
    /**
     * 
     * @type {DocumentCreateNewDocument422ResponseErrorsFieldsFile2}
     * @memberof DocumentCreateNewDocument422ResponseErrorsFields
     */
    'file_2'?: DocumentCreateNewDocument422ResponseErrorsFieldsFile2;
}

