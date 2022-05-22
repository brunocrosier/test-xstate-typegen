import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

const fileMachine = createMachine({
  type: "parallel",
  tsTypes: {} as import("./App.typegen").Typegen0,
  states: {
    upload: {
      initial: "idle",
      states: {
        idle: {
          on: {
            INIT_UPLOAD: { target: "pending" },
          },
        },
        pending: {
          on: {
            UPLOAD_COMPLETE: { target: "success" },
          },
        },
        success: {},
      },
    },
    download: {
      initial: "idle",
      states: {
        idle: {
          on: {
            INIT_DOWNLOAD: { target: "pending" },
          },
        },
        pending: {
          on: {
            DOWNLOAD_COMPLETE: { target: "success" },
          },
        },
        success: {},
      },
    },
  },
});

export function App() {
  const [state, send] = useMachine(fileMachine);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>Upload state: {state.value.upload}</p>
      <p>Download state: {state.value.download}</p>
    </>
  );
}
