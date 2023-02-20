// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// client.messages.list({ limit: 20 })
//     .then(messages => messages.forEach(m => console.log(m.body)))
//     .catch(err => console.log(err));


// Using async-await

const deleteAllMessages = async () => {
    const messages = await client.messages.list();

    for (message of messages) {
        console.warn(`Deleting ${message.sid}`);
        message.remove();
    }
}

deleteAllMessages()
    .then(() => console.log('DONE'))
    .catch(err => console.error(err));