import { useDispatch } from "react-redux";
import { deleteConfiguration } from "../../core/configurationsSlice";
import { ExistingConfiguration } from "../../types";
import { Button } from "./UI/Button";

interface Props {
  configuration: ExistingConfiguration;
}

export function NotificationConfigurationCard({ configuration }: Props) {
  const dispatch = useDispatch();

  return (
    <article className="px-6 py-4 rounded shadow bg-gray-50">
      <h3 className="text-xl mb-4">
        {configuration.description} #{configuration.notificationId}
      </h3>
      <ul>
        <li>Version API : {configuration.apiVersion}</li>
        <li>
          Webhook :{" "}
          <a href={configuration.notifyURL} className="text-blue-600">
            {configuration.notifyURL}
          </a>
        </li>
        <li>Protocole SSL : {configuration.sslProtocol}</li>
      </ul>
      <h4 className="text-lg my-2">Events</h4>
      <section className="flex gap-4">
        {configuration.eventConfigs.map((event) => (
          <article
            className="px-6 py-4 shadow rounded bg-white"
            key={event.eventType}
          >
            <h1>{event.eventType}</h1>
            <p>{event.includeMode}</p>
          </article>
        ))}
      </section>

      <Button
        color="red"
        onClick={() => {
          dispatch(deleteConfiguration(configuration.notificationId));
        }}
        className="mt-4"
      >
        Supprimer
      </Button>
    </article>
  );
}
