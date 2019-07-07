const accountSid = 'ACbf3d1372457fc40fe509382a7d61300a';
//const authToken = 'TWILIO authToken HERE';
const client = require('twilio')(accountSid, authToken);
const superagent = require('superagent');

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    superagent.get('https://api.nasa.gov/planetary/apod')
//    .query({ api_key: 'NASA API KEY HERE'})
    .end((err, res) => {
      if (err) { return console.log(err); }
      var output = 'Good Morning! Click here to see the APOD: ' + res.body.url;
      client.messages.create({
//        to: 'PHONE NUMBER HERE,
        from: '+12056273737',
        body: output
    })
  })
};
