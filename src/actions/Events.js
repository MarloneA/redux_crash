import { url } from '../utils/routes';

// actionTypes
export const actionType = {
  FETCHING_EVENTS: 'FETCHING_EVENTS',
};

// action creator
export const eventsReceived = events => ({
  type: actionType.FETCHING_EVENTS,
  events,
});

// dispatcher
export const fetchEvents = () => (dispatch) => {
  fetch(url.events)
    .then(res => res.json()).then((data) => {
      dispatch(eventsReceived(data.Events));
    }).catch(error => console.log('the error received is ', error));
};
