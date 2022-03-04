import { Checkbox } from "../UI/Form/Checkbox";
import { Input } from "../UI/Form/Input";
import { Select } from "../UI/Form/Select";
import sslValues from "../../sslProtocols.json";
import { Formik, Form, Field, FieldArray } from "formik";
import { AddEventType } from "./AddEventType";
import eventTypes from "../../eventTypes.json";
import { EventTypeCard } from "./EventTypeCard";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { createConfiguration } from "../../../core/configurationsSlice";
import { useNavigate } from "react-router-dom";

const SSLValues = sslValues.map((sslValue) => ({
  label: sslValue,
  value: sslValue,
}));

export function CreateConfigurationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          active: false,
          description: "",
          apiVersion: 6,
          notifyURL: "",
          sslProtocol: "SSL",
          eventConfigs: [] as Array<{
            eventType: string;
            includeMode: "INCLUDE" | "EXCLUDE";
          }>,
        }}
        onSubmit={async (values) => {
          await dispatch(createConfiguration(values));
          navigate("/");
        }}
      >
        {({ values }) => (
          <Form className="space-y-2">
            <Field name="active" as={Checkbox} label="Active ?" />
            <Field
              name="description"
              as={Input}
              type="text"
              label="Description"
            />
            <Field
              name="apiVersion"
              as={Input}
              type="number"
              label="Version API"
            />
            <Field
              name="notifyURL"
              as={Input}
              type="url"
              label="URL de notification"
            />
            <Field
              name="sslProtocol"
              as={Select}
              type="text"
              label="Protocole SSL"
              options={SSLValues}
            />
            <FieldArray
              name="eventConfigs"
              render={(arrayHelpers) => (
                <div>
                  <p className="font-medium text-gray-700 mb-1">
                    Souscrire aux évènements
                  </p>
                  {values.eventConfigs && values.eventConfigs.length > 0 ? (
                    <div className="mt-1">
                      <div className="grid lg:grid-cols-3 gap-4">
                        {values.eventConfigs.map((eventConfig, index) => (
                          <EventTypeCard
                            key={eventConfig.eventType}
                            eventType={eventConfig.eventType}
                            eventMode={eventConfig.includeMode}
                            onRemove={() => arrayHelpers.remove(index)}
                          />
                        ))}
                      </div>

                      <AddEventType
                        className="mt-2"
                        eventTypes={eventTypes.filter(
                          (type) =>
                            type !==
                            values.eventConfigs.find(
                              (elt) => elt.eventType === type
                            )?.eventType
                        )}
                        addOnClick={(eventType, eventMode) => {
                          arrayHelpers.push({
                            eventType,
                            includeMode: eventMode,
                          });
                        }}
                      />
                    </div>
                  ) : (
                    <AddEventType
                      className="mt-2"
                      eventTypes={eventTypes}
                      addOnClick={(eventType, eventMode) => {
                        arrayHelpers.push({
                          eventType,
                          includeMode: eventMode,
                        });
                      }}
                    />
                  )}
                </div>
              )}
            />
            <div className="mt-4">
              <Button type="submit">Créer</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
