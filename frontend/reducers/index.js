import athlete from './athlete';

const initialState = {
  athlete: {}
};

export default function reducers(state = initialState, action) {
  return {
    athlete: athlete(state.athlete, action)
  };
}