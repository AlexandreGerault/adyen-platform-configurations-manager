import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Configuration, ExistingConfiguration } from "../types";

const BASE_URL = "http://192.168.1.17:3333";

const fetchConfigurations = createAsyncThunk(
  "configurations/fetchAll",
  async () => {
    const response = await fetch(`${BASE_URL}/configurations`);

    return (await response.json()) as ExistingConfiguration[];
  }
);

const createConfiguration = createAsyncThunk(
  "configurations/create",
  async (configuration: Configuration) => {
    const response = await fetch(`${BASE_URL}/configurations`, {
      method: "POST",
      body: JSON.stringify(configuration),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return (await response.json()) as ExistingConfiguration;
  }
);

const deleteConfiguration = createAsyncThunk(
  "configurations/delete",
  async (id: number) => {
    await fetch(`${BASE_URL}/configurations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return id;
  }
);

const configurationsSlice = createSlice({
  name: "configurations",
  initialState: [] as ExistingConfiguration[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConfigurations.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });

    builder.addCase(createConfiguration.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(deleteConfiguration.fulfilled, (state, action) => {
      state = state.filter(
        (config) => config.notificationId !== action.payload
      );

      return state;
    });
  },
});

export {
  configurationsSlice,
  fetchConfigurations,
  createConfiguration,
  deleteConfiguration,
};
