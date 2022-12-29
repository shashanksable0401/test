/**
 * Direct selector to the auth domain
 */
export const authSelector = (state: any) => state.authReducer;

/**
 * User specific selectors
 */
export const isAuthenticatedSelector = (state: any) =>
  state.authReducer && state.authReducer.isAuthenticated;
