
import { actionType } from '../actions/Events';

const eventsReducer = (events = [], action) => {
  switch (action.type) {
    case actionType.FETCHING_EVENTS:
      return action.events;
    default:
      return events;
  }
};
export default eventsReducer;
