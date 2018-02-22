var googleAuth = require("./googleauthorize.js");
var Calendarfunction = require("./CalendarFunctions");
var TOKEN_PATH = "./calendar-nodejs-quickstart.json";

module.exports = {
  listevents,
  createEventInCalendar
}

function listevents(NameOfCalendar) {
  googleAuth.returnOath(TOKEN_PATH, function (auth) {
    Calendarfunction.listEvents(auth, NameOfCalendar)
  })
}

function createEventInCalendar(CalendarID, Events) {
  googleAuth.returnOath(TOKEN_PATH, function (auth) {
    Calendarfunction.createEvent(auth, CalendarID, event);
  })
}

function createCalendar(NameOfCalendar) {
  googleAuth.returnOath(TOKEN_PATH, function (auth) {
    Calendarfunction.postCreateCalendar(auth, NameOfCalendar);
  })
}

function deleteCalendar(idOfCalendar){
  googleAuth.returnOath(TOKEN_PATH, function(auth){
    Calendarfunction.deleteCalendar(auth, idOfCalendar);
  })
}

//createCalendar("thisCalnear");

//deleteCalendar("su6m46d27h2u44ivp4sihj3c80@group.calendar.google.com");

//listevents("primary");

//listevents("primary");
//createCalendar(CalendarCreate); //need to googleAuth getting id
createEventInCalendar(CalendarID, event)


var CalendarCreate = {
  "summary": "asdffdsa"
}
var event = {
  'summary': 'Google I/O 2015',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2018-02-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2018-02-29T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [{
      'email': 'lpage@example.com'
    },
    {
      'email': 'sbrin@example.com'
    },
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [{
        'method': 'email',
        'minutes': 24 * 60
      },
      {
        'method': 'popup',
        'minutes': 10
      },
    ],
  },
};