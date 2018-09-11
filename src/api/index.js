// const BASE = 'http://localhost:3000'

let createParent = function(parent) {
    return fetch('http://localhost:3001/parents', {
        body: JSON.stringify(parent),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
            'Content-Type': 'application/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    })
        .then((resp) => {
            let json = resp.json()

            return json
        })
}

export {
  createParent
}
