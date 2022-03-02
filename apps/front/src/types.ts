export interface Configuration {
  active: boolean;
  apiVersion: number;
  description: string;
  eventConfigs: Array<{
    eventType: string;
    includeMode: string;
  }>;
  notifyURL: string;
  sslProtocol: string;
}

export type ExistingConfiguration = Configuration & { notificationId: number };
