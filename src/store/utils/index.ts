export type apiParamsType = {
  pathParams?: any;
  queryParams?: any;
  body?: any;
  trackOnUploadProgress?: {
    fileId: string;
    onProgress: Function;
  };
};

export type actionType = {
  type: string;
  payload: any;
};
export const actionCreator = (type: string) => {
  return (payload: any): actionType => ({ type, payload });
};

export type duckType = {
  sagas: any[];
  reducers: any;
};

export type localStorageActionType = {
  type: string;
  payload: {
    key: string;
    value: string;
  };
};
export const localStorageActionCreator = (type: string) => {
  return (payload: any): localStorageActionType => ({ type, payload });
};
