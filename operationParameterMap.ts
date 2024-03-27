type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/api_applications/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/api_applications/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/bulk_sends-POST': {
        parameters: [
            {
                name: 'template_ids'
            },
            {
                name: 'bulk_send_csv'
            },
            {
                name: 'skip_row_errors'
            },
            {
                name: 'api_application_id'
            },
            {
                name: 'name'
            },
            {
                name: 'subject'
            },
            {
                name: 'message'
            },
            {
                name: 'apply_signing_order'
            },
            {
                name: 'custom_requester_name'
            },
            {
                name: 'custom_requester_email'
            },
        ]
    },
    '/api/v1/bulk_sends/csv_template-GET': {
        parameters: [
            {
                name: 'template_ids[]'
            },
            {
                name: 'base64'
            },
        ]
    },
    '/api/v1/bulk_sends/{id}/documents-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'limit'
            },
            {
                name: 'page'
            },
        ]
    },
    '/api/v1/bulk_sends/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/bulk_sends-GET': {
        parameters: [
            {
                name: 'user_email'
            },
            {
                name: 'limit'
            },
            {
                name: 'page'
            },
            {
                name: 'api_application_id'
            },
        ]
    },
    '/api/v1/bulk_sends/validate_csv-POST': {
        parameters: [
            {
                name: 'template_ids'
            },
            {
                name: 'bulk_send_csv'
            },
        ]
    },
    '/api/v1/document_templates/documents-POST': {
        parameters: [
            {
                name: 'recipients'
            },
            {
                name: 'test_mode'
            },
            {
                name: 'template_id'
            },
            {
                name: 'template_ids'
            },
            {
                name: 'name'
            },
            {
                name: 'subject'
            },
            {
                name: 'message'
            },
            {
                name: 'draft'
            },
            {
                name: 'with_signature_page'
            },
            {
                name: 'expires_in'
            },
            {
                name: 'reminders'
            },
            {
                name: 'apply_signing_order'
            },
            {
                name: 'api_application_id'
            },
            {
                name: 'embedded_signing'
            },
            {
                name: 'embedded_signing_notifications'
            },
            {
                name: 'text_tags'
            },
            {
                name: 'custom_requester_name'
            },
            {
                name: 'custom_requester_email'
            },
            {
                name: 'redirect_url'
            },
            {
                name: 'allow_decline'
            },
            {
                name: 'allow_reassign'
            },
            {
                name: 'decline_redirect_url'
            },
            {
                name: 'metadata'
            },
            {
                name: 'template_fields'
            },
            {
                name: 'files'
            },
            {
                name: 'fields'
            },
            {
                name: 'attachment_requests'
            },
            {
                name: 'copied_contacts'
            },
        ]
    },
    '/api/v1/documents-POST': {
        parameters: [
            {
                name: 'files'
            },
            {
                name: 'recipients'
            },
            {
                name: 'test_mode'
            },
            {
                name: 'name'
            },
            {
                name: 'subject'
            },
            {
                name: 'message'
            },
            {
                name: 'draft'
            },
            {
                name: 'with_signature_page'
            },
            {
                name: 'expires_in'
            },
            {
                name: 'reminders'
            },
            {
                name: 'apply_signing_order'
            },
            {
                name: 'api_application_id'
            },
            {
                name: 'embedded_signing'
            },
            {
                name: 'embedded_signing_notifications'
            },
            {
                name: 'text_tags'
            },
            {
                name: 'custom_requester_name'
            },
            {
                name: 'custom_requester_email'
            },
            {
                name: 'redirect_url'
            },
            {
                name: 'allow_decline'
            },
            {
                name: 'allow_reassign'
            },
            {
                name: 'decline_redirect_url'
            },
            {
                name: 'metadata'
            },
            {
                name: 'fields'
            },
            {
                name: 'attachment_requests'
            },
            {
                name: 'copied_contacts'
            },
        ]
    },
    '/api/v1/documents/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/documents/{id}/completed_pdf-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'url_only'
            },
            {
                name: 'audit_page'
            },
        ]
    },
    '/api/v1/documents/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/documents/{id}/remind-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'recipients'
            },
        ]
    },
    '/api/v1/documents/{id}/send-POST': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'test_mode'
            },
            {
                name: 'name'
            },
            {
                name: 'subject'
            },
            {
                name: 'message'
            },
            {
                name: 'expires_in'
            },
            {
                name: 'reminders'
            },
            {
                name: 'apply_signing_order'
            },
            {
                name: 'api_application_id'
            },
            {
                name: 'embedded_signing'
            },
            {
                name: 'embedded_signing_notifications'
            },
            {
                name: 'custom_requester_name'
            },
            {
                name: 'custom_requester_email'
            },
            {
                name: 'redirect_url'
            },
            {
                name: 'allow_decline'
            },
            {
                name: 'allow_reassign'
            },
            {
                name: 'decline_redirect_url'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/api/v1/me-GET': {
        parameters: [
        ]
    },
    '/api/v1/document_templates-POST': {
        parameters: [
            {
                name: 'files'
            },
            {
                name: 'placeholders'
            },
            {
                name: 'name'
            },
            {
                name: 'subject'
            },
            {
                name: 'message'
            },
            {
                name: 'copied_placeholders'
            },
            {
                name: 'draft'
            },
            {
                name: 'expires_in'
            },
            {
                name: 'reminders'
            },
            {
                name: 'apply_signing_order'
            },
            {
                name: 'api_application_id'
            },
            {
                name: 'text_tags'
            },
            {
                name: 'redirect_url'
            },
            {
                name: 'allow_decline'
            },
            {
                name: 'allow_reassign'
            },
            {
                name: 'decline_redirect_url'
            },
            {
                name: 'metadata'
            },
            {
                name: 'fields'
            },
            {
                name: 'attachment_requests'
            },
        ]
    },
    '/api/v1/document_templates/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/document_templates/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/document_templates/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'name'
            },
            {
                name: 'subject'
            },
            {
                name: 'message'
            },
            {
                name: 'draft'
            },
            {
                name: 'expires_in'
            },
            {
                name: 'reminders'
            },
            {
                name: 'apply_signing_order'
            },
            {
                name: 'api_application_id'
            },
            {
                name: 'redirect_url'
            },
            {
                name: 'allow_decline'
            },
            {
                name: 'allow_reassign'
            },
            {
                name: 'decline_redirect_url'
            },
            {
                name: 'metadata'
            },
        ]
    },
    '/api/v1/hooks/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/v1/hooks-GET': {
        parameters: [
        ]
    },
    '/api/v1/hooks-POST': {
        parameters: [
            {
                name: 'callback_url'
            },
            {
                name: 'api_application_id'
            },
        ]
    },
}