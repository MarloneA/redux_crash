
import { actionType } from '../actions/Events';

const eventsReducer = (events=[], payload) => {
    switch(payload.type){
        case actionType.FETCHING_EVENTS:
            return payload.events
        default:
            return events;
    }
}
export default eventsReducer;