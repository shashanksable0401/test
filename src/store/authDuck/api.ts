import queryString from "query-string";
import { apiParamsType } from "../utils";
import { api } from "../apiConfig";
import { API_BASE_URL } from "../../APP_CONFIG";

export function authCallApi(apiParams: apiParamsType) {
  const queryParamsString = queryString.stringify(apiParams.queryParams);
  return api.get(`${API_BASE_URL}/auth?${queryParamsString}`);
}
