import { useEffect } from "react";

import { NotificationConfigurationCard } from "../components/NotificationConfigurationCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/store";
import { fetchConfigurations } from "../../core/configurationsSlice";

export function ListConfigurations() {
  const configurations = useSelector(
    (state: RootState) => state.configurations
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (configurations.length === 0) {
      dispatch(fetchConfigurations());
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {configurations.map((config) => (
        <NotificationConfigurationCard
          configuration={config}
          key={config.notificationId}
        />
      ))}
    </div>
  );
}
