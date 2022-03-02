import { useEffect, useState } from "react";
import { Button } from "../UI/Button";
import { Select } from "../UI/Form/Select";

type EventMode = "INCLUDE" | "EXCLUDE";

const convertToSelectOptions = (values: string[]) =>
  values.map((value) => ({ label: value, value }));

const EVENT_MODES = convertToSelectOptions([
  "INCLUDE",
  "EXCLUDE",
] as EventMode[]);

interface Props {
  className?: string;
  addOnClick: (eventType: string, eventMode: "INCLUDE" | "EXCLUDE") => void;
  eventTypes: string[];
}

export function AddEventType({ addOnClick, eventTypes, className }: Props) {
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [eventMode, setEventMode] = useState(EVENT_MODES[0].value as EventMode);

  const EVENT_TYPES = convertToSelectOptions(eventTypes);

  useEffect(() => {
    setEventType(eventTypes[0]);
  }, [eventTypes]);

  console.log(eventType);

  return (
    <div className={`px-6 py-4 bg-white rounded shadow ${className}`}>
      <Select
        label="Event type"
        name=""
        options={EVENT_TYPES}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setEventType(event.target.value)
        }
      />
      <Select
        label="Event mode"
        name=""
        options={EVENT_MODES}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
          setEventMode(event.target.value as EventMode)
        }
      />
      <Button
        type="button"
        onClick={() => addOnClick(eventType, eventMode)}
        className="mt-2"
      >
        Ajouter
      </Button>
    </div>
  );
}
