export type UploadsState = {
  fileStatus: "idle" | "uploading" | "error" | "success";
  url: string | null;
  error: string | null;
};

type UploadsAction =
  | { type: "clear" }
  | { type: "uploading" }
  | { type: "success"; payload: { url: string } }
  | { type: "error"; payload: { error: string } };

export const uploadsReducer = (
  state: UploadsState,
  action: UploadsAction
): UploadsState => {
  switch (action.type) {
    case "clear":
      return {
        fileStatus: "idle",
        url: null,
        error: null,
      };
    case "uploading":
      return {
        ...state,
        fileStatus: "uploading",
      };
    case "success":
      return {
        ...state,
        fileStatus: "success",
        url: action.payload.url,
      };
    case "error":
      return {
        ...state,
        fileStatus: "error",
        error: action.payload.error,
      };
    default:
      return state;
  }
};
