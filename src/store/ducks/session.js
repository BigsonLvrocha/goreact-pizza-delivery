// Types
export const Types = {
  FETCH_LOGIN_STORAGE: 'session/FETCH_LOGIN_STORAGE',
  LOGIN_REQUEST: 'session/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'session/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'session/LOGIN_FAILURE',
  LOGOUT: 'session/LOGOUT',
};

// reducer
const INITIAL_STATE = {
  userChecked: false,
  isLoading: false,
  adminData: null,
  adminToken: null,
  error: false,
};

export default function session(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        isLoading: false,
        adminData: payload.data,
        adminToken: payload.token,
        userChecked: true,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: payload.error,
        isLoading: false,
        adminData: null,
        adminToken: null,
        userChecked: true,
      };
    case Types.LOGOUT:
      return {
        ...state,
        isLoading: false,
        error: false,
        adminData: null,
        adminToken: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  fetchLoginStorage: () => ({
    type: Types.FETCH_LOGIN_STORAGE,
  }),
  loginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  }),
  loginSuccess: (data, token) => ({
    type: Types.LOGIN_SUCCESS,
    payload: {
      data,
      token,
    },
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: {
      error,
    },
  }),
  logout: () => ({
    type: Types.LOGOUT,
  }),
};
