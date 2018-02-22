var google = require('googleapis');
var googleAuth = require('google-auth-library');
var axios = require("axios");


module.exports = {
  listEvents,
  createEvent,
  postCreateCalendar,
  deleteCalendar,
  deleteEvent,
  editEvent,
}

function editEvent(auth, idOfCalendar, idOfEvent) {
  axios.patch("https://www.googleapis.com/calendar/v3/calendars/" + idOfCalendar + "/events/" + idOfEvent, {}, {
    headers: {
      Authorization: "Bearer " + auth.credentials.access_token
    }
  })
}

function deleteEvent(auth, idOfCalendar, idOfEvent, eventToChange) {
  axios.delete("https://www.googleapis.com/calendar/v3/calendars/" + idOfCalendar + "/events/" + idOfEvent, {
    resource: eventToChange
  }, {
    headers: {
      Authorization: "Bearer " + auth.credentials.access_token
    }

  })
}


function deleteCalendar(auth, idOfCalendar) {
  axios.delete("https://www.googleapis.com/calendar/v3/calendars/" + idOfCalendar, {
    headers: {
      Authorization: "Bearer " + auth.credentials.access_token
    }
  })
}

function postCreateCalendar(auth, NameOfCalendar) {
  console.log("awee");

  axios.post("https://www.googleapis.com/calendar/v3/calendars", {
    summary: NameOfCalendar
  }, {
    headers: {
      Authorization: "Bearer " + auth.credentials.access_token,
      "Content-Type": "application/json"
    },


  }).then(function (res, err) {
    console.log("This is the response ", res);
    console.log(res.data.id)
    console.log("a eeror has occured", err);
  }).catch(function (response) {
    //console.log(response.response, Object.keys(response));

  })

}


function listEvents(auth, NameOfCalendar) {
  console.log(auth);
  console.log(NameOfCalendar)
  var calendar = google.calendar('v3');
  calendar.events.list({
    auth: auth,
    calendarId: NameOfCalendar,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime'
  }, function (err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var events = response.items;
    if (events.length == 0) {
      console.log('No upcoming events found.');
    } else {
      console.log('Upcoming 10 events:');
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
        var start = event.start.dateTime || event.start.date;
        console.log('%s - %s', start, event.summary);
      }
    }
  });
}





function createEvent(auth, NameOfCalendar, event) {
  var calendar = google.calendar('v3');
  calendar.events.insert({
    auth: auth,
    calendarId: event.NameofEvent,
    resource: event,
  }.then(function (res, err) {
    console.log("This is the response ", res);
    console.log(res.data.id)
    console.log("a eeror has occured", err);
  }), function (err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  });
}

function changeEvengt(auth, NameOfCalendar, event) {
  var calendar = google.calendar
};