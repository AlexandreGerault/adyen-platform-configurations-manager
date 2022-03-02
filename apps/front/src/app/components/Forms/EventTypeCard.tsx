import { Button } from "../UI/Button";

interface Props {
  eventType: string;
  eventMode: "INCLUDE" | "EXCLUDE";
  onRemove: () => void;
}

export function EventTypeCard({ eventMode, eventType, onRemove }: Props) {
  return (
    <div className="px-6 py-4 bg-white rounded shadow">
      <p>{eventType}</p>
      <p>{eventMode}</p>
      <Button
        color="red"
        onClick={() => onRemove()}
        className="mt-2"
        type="button"
      >
        Remove
      </Button>
    </div>
  );
}
