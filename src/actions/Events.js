import { url } from '../utils/routes';

//actionTypes
export const actionType = {
	EVENTS_FETCHED: 'EVENTS_FETCHED'
}

//action creator
export const eventsReceived = events => ({
	type:actionType.EVENTS_FETCHED,
	events
})

//dispatcher
export const fetchEvents = () => dispatch => {
	fetch(url.events)
	.then(res =>
        res.json()
	).then(data => {
		console.log(data.Events)
		dispatch(eventsReceived(data.Events))
	}).catch(error=>console.log("the error received is ", error))
}

