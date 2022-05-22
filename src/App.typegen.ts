// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {};
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "upload"
    | "upload.idle"
    | "upload.pending"
    | "upload.success"
    | "download"
    | "download.idle"
    | "download.pending"
    | "download.success"
    | {
        upload?: "idle" | "pending" | "success";
        download?: "idle" | "pending" | "success";
      };
  tags: never;
}
