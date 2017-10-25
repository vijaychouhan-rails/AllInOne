import Immutable from 'immutable';

const initialState = Immutable.fromJS(
  { checkInPreference: [], submitting: false },
);

const first = (state = initialState, action) => {
  return state;
};

export default first;
