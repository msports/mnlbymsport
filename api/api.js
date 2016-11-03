 //Test for rest api.js
var express = require('../node_modules/express');
var app = express();
app.use(express.bodyParser());

var events = [{
    "id": 0,
    "title": "Atlanta Summit 2016",
    "date": "February 9th, 2016",
    "img": "http://www.axial.net/wp-content/uploads/2015/12/Atlanta-Summit-hero-image.jpg"
}, {
    "id": 1,
    "title": "San Francisco Summit 2016",
    "date": "March 16, 2016",
    "img": "http://www.axial.net/wp-content/uploads/2015/12/san-francisco-summit-hero-image.jpg"
}, {
    "id": 2,
    "title": "Dallas Summit 2016",
    "date": " April 13, 2016",
    "img": "http://www.axial.net/wp-content/uploads/2015/01/dallas-summit-homepage-image.jpg"
}];

var attendees = [{
    "id": 0,
    "name": "Peter Lehrman",
    "title": "CEO",
    "photo": "http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2014/09/Peter-bw.jpg"
}, {
    "id": 1,
    "name": "Elon Musk",
    "title": "Visionary",
    "photo": "http://mediad.publicbroadcasting.net/p/kufm/files/201309/elon-musk-bio-450x300.jpg"
}, {
    "id": 2,
    "name": "Bill Gates",
    "title": "Philanthropist",
    "photo": "http://www.retireat21.com/wp-content/uploads/2015/02/Bill_Gates_John_Keatley.jpg"
}, {
    "id": 3,
    "name": "Mark Zuckerger",
    "title": "Facebook",
    "photo": "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjMzNjg3ODAzNDA0.jpg"
}, {
    "id": 4,
    "name": "Donal Trump",
    "title": "???",
    "photo": "http://cdn.theatlantic.com/assets/media/img/mt/2015/07/AP_185770709334/lead_960.jpg?1437771676"
}];

var events_attendees = [
    [0, 1, 2, 3, 4],
    [0, 2],
    [1, 3, 4]
];

var events_meets = [
    [],
    [],
    []
];

app.get('/events', function(req, res) {
    res.json(events);
});

app.get('/events/:id', function(req, res) {
    if (events.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No event found');
    }
    var q = events[req.params.id];
    res.json(q);
});

app.get('/events/:id/attendees', function(req, res) {
    if (events.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No event found');
    }
    var q = [];

    events_attendees[req.params.id].forEach(function(i) {
        q.push(attendees[i]);
    });

    res.json(q);
});

app.get('/events/:id/meets', function(req, res) {
    if (events.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No event found');
    }
    var q = [];

    events_meets[req.params.id].forEach(function(i) {
        q.push(attendees[i]);
    });

    res.json(q);
});

app.post('/events/:id/meets', function(req, res) {
    if (!req.body.hasOwnProperty('attendee_id')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }

    events_meets[req.params.id].push(req.body.attendee_id);
    res.json(true);
});

app.delete('/events/:id/meets/:attendee_id', function(req, res) {
    // console.log(req.params.id);
    // console.log(events_meets[req.params.id]);
    // console.log(req.params.attendee_id);
    // console.log(events_meets[req.params.id].indexOf(req.params.attendee_id));

    // if (events.length <= req.params.id) {
    //     res.statusCode = 404;
    //     return res.send('Error 404: Events not found');
    // } else if (events_meets[req.params.id].indexOf(req.params.attendee_id) < 0) {
    //     res.statusCode = 404;
    //     return res.send('Error 404: Meeting not found');
    // }

    events_meets[req.params.id].splice(events_meets[req.params.id].indexOf(req.params.attendee_id), 1);
    res.json(true);
});

app.get('/attendees/:id', function(req, res) {
    if (attendees.length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No attendee found');
    }
    var q = attendees[req.params.id];
    res.json(q);
});

app.listen(process.env.PORT || 3412);
