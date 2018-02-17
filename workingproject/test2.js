var test = require("./googleauthorize.js");
var Calendarfunction = require("./CalendarFunctions");
var TOKEN_PATH = "./calendar-nodejs-quickstart.json";

module.exports = {
  listevents,
  createEventInCalendar
}

function listevents(NameOfCalendar) {
  test.returnOath(TOKEN_PATH, function (auth) {
    Calendarfunction.listEvents(auth, NameOfCalendar)
  })
}

function createEventInCalendar(Events) {
  test.returnOath(TOKEN_PATH, function (auth) {
    Calendarfunction.createEvent(auth, event);
  })
}

function createCalendar(Calendar) {
  test.returnOath(TOKEN_PATH, function (auth) {
    Calendarfunction.postCreateCalendar(auth, Calendar);
  })
}

function deleteCalendar(idOfCalendar){
  test.returnOath(TOKEN_PATH, function(auth){
    Calendarfunction.deleteCalendar(auth, idOfCalendar);
  })
}

deleteCalendar("su6m46d27h2u44ivp4sihj3c80@group.calendar.google.com");



//listevents("primary");
//createCalendar(CalendarCreate); //need to test getting id
//createEventInCalendar(event)

var CalendarCreate = {
  "summary": "asdffdsa"
}
var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
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