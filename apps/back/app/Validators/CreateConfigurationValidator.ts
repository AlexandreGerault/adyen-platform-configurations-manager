import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

const EventTypes = [
  'ACCOUNT_CLOSED',
  'ACCOUNT_CREATED',
  'ACCOUNT_FUNDS_BELOW_THRESHOLD',
  'ACCOUNT_HOLDER_CREATED',
  'ACCOUNT_HOLDER_LIMIT_REACHED',
  'ACCOUNT_HOLDER_PAYOUT',
  'ACCOUNT_HOLDER_STATUS_CHANGE',
  'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
  'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
  'ACCOUNT_HOLDER_UPDATED',
  'ACCOUNT_HOLDER_VERIFICATION',
  'ACCOUNT_UPDATED',
  'BENEFICIARY_SETUP',
  'COMPENSATE_NEGATIVE_BALANCE',
  'DIRECT_DEBIT_INITIATED',
  'PAYMENT_FAILURE',
  'REFUND_FUNDS_TRANSFER',
  'REPORT_AVAILABLE',
  'SCHEDULED_REFUNDS',
  'TRANSFER_FUNDS',
]

export default class CreateConfigurationValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    active: schema.boolean(),
    description: schema.string(),
    apiVersion: schema.number(),
    eventConfigs: schema.array().members(
      schema.object().members({
        eventType: schema.enum(EventTypes),
        includeMode: schema.enum(['INCLUDE', 'EXCLUDE']),
      })
    ),
    notifyURL: schema.string({}, [rules.url()]),
    notifyUsername: schema.string.optional(),
    notifyPassword: schema.string.optional(),
    sslProtocol: schema.enum([
      'SSL',
      'SSLInsecureCiphers',
      'TLS',
      'TLSv10',
      'TLSv10InsecureCiphers',
      'TLSv11',
      'TLSv12',
    ]),
  })

  public messages = {}
}
