const axios = require('axios')
var GAS_API = 'https://script.google.com/macros/s/AKfycbzgJyL0qSdzmRu3TUaaRS9JPtqoedYLi1aOporTf0CsczszU3wttb2vzLJWGslKJKIo/exec/webhook';

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        try {
            const token = event.queryStringParameters.token
            if (token === process.env.5317332370:AAF6K84CqIZbbwJ2fWdXHBpZnHo7-3Etneg) {
                const url = `${process.env.GAS_API}?token=${token}`
                const response = await axios.post(url, event.body)
                return {
                    statusCode: 200,
                    body: JSON.stringify(response.data),
                }
            } else {
                return {
                    statusCode: 500,
                    body: JSON.stringify({ error: `Invalid token` }),
                }
            }

        } catch (err) {
            return { statusCode: 500, body: err.toString() }
        }
    } else {
        return {
            statusCode: 500, body: JSON.stringify({ error: 'Invaid HTTP Method' })
        }
    }
}
