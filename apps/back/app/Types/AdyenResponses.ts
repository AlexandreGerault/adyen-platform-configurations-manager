interface ConfigurationResponse {
  pspReference: string
  configurationDetails: {
    active: boolean
    apiVersion: number
    description: string
    eventConfigs: {
      eventType:
        | 'ACCOUNT_CLOSED'
        | 'ACCOUNT_CREATED'
        | 'ACCOUNT_FUNDS_BELOW_THRESHOLD'
        | 'ACCOUNT_HOLDER_CREATED'
        | 'ACCOUNT_HOLDER_LIMIT_REACHED'
        | 'ACCOUNT_HOLDER_PAYOUT'
        | 'ACCOUNT_HOLDER_STATUS_CHANGE'
        | 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE'
        | 'ACCOUNT_HOLDER_UPCOMING_DEADLINE'
        | 'ACCOUNT_HOLDER_UPDATED'
        | 'ACCOUNT_HOLDER_VERIFICATION'
        | 'ACCOUNT_UPDATED'
        | 'BENEFICIARY_SETUP'
        | 'COMPENSATE_NEGATIVE_BALANCE'
        | 'DIRECT_DEBIT_INITIATED'
        | 'PAYMENT_FAILURE'
        | 'REFUND_FUNDS_TRANSFER'
        | 'REPORT_AVAILABLE'
        | 'SCHEDULED_REFUNDS'
        | 'TRANSFER_FUNDS'
      includeMode: 'INCLUDE' | 'EXCLUDE'
    }
    notificationId: number
    notifyURL: string
    sslProtocol:
      | 'SSL'
      | 'SSLInsecureCiphers'
      | 'TLS'
      | 'TLSv10'
      | 'TLSv10InsecureCiphers'
      | 'TLSv11'
      | 'TLSv12'
  }
}

interface ConfigurationListResponse {
  pspReference: string
  configurations: Array<ConfigurationResponse['configurationDetails']>
}

export { ConfigurationResponse, ConfigurationListResponse }
