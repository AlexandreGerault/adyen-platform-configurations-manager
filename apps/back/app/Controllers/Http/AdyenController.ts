import { HttpContext } from '@adonisjs/core/build/standalone'
import { ConfigurationListResponse, ConfigurationResponse } from 'App/Types/AdyenResponses'
import CreateConfigurationValidator from 'App/Validators/CreateConfigurationValidator'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'

axios.defaults.headers.common = {
  'x-api-key': Env.get('ADYEN_MARKETPLACE_API_KEY'),
}

axios.defaults.headers.post = {
  'Content-Type': 'application/json',
}

const BASE_ADYEN_URI = 'https://cal-test.adyen.com/cal/services/Notification/v6'

export default class AdyenController {
  async index() {
    const uri = `${BASE_ADYEN_URI}/getNotificationConfigurationList`

    const configurations = await axios.post<ConfigurationListResponse>(uri, {})

    return configurations.data.configurations
  }

  async create({ request }: HttpContext) {
    const uri = `${BASE_ADYEN_URI}/createNotificationConfiguration`
    const validated = await request.validate(CreateConfigurationValidator)

    const configuration = await axios.post<ConfigurationResponse>(uri, {
      configurationDetails: validated,
    })

    return configuration.data.configurationDetails
  }

  async delete({ params }: HttpContext) {
    const uri = `${BASE_ADYEN_URI}/deleteNotificationConfigurations`

    const configuration = await axios.post<{ pspReference: string }>(uri, {
      notificationIds: [params.id],
    })
  }
}
