import Immutable from 'seamless-immutable';

export const Types = {
  FETCH_ORDERS_REQUEST: 'order/FETCH_ORDERS_REQUEST',
  FETCH_ORDERS_SUCCESS: 'order/FETCH_ORDERS_SUCCESS',
  FETCH_ORDERS_FAILURE: 'order/FETCH_ORDERS_FAILURE',
};

const INITIAL_STATE = Immutable({
  isLoading: false,
  error: false,
  data: [],
});

export default function Order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_ORDERS_REQUEST:
      return state.merge({ isLoading: true });
    case Types.FETCH_ORDERS_SUCCESS:
      return state.merge({
        error: false,
        isLoading: false,
        data: action.payload.data,
      });
    case Types.FETCH_ORDERS_FAILURE:
      return state.merge({
        error: action.payload.error,
        isLoading: false,
      });
    default:
      return state;
  }
}

export const Creators = {
  fetchOrdersRequest: () => ({
    type: Types.FETCH_ORDERS_REQUEST,
  }),
  fetchOrdersSuccess: data => ({
    type: Types.FETCH_ORDERS_SUCCESS,
    payload: {
      data,
    },
  }),
  fetchOrderFailure: error => ({
    type: Types.FETCH_ORDERS_FAILURE,
    payload: {
      error,
    },
  }),
};
