


const key = 'cxyhnll5ScFfHdAHD2pKJ0hAOREZIlaSFRx6MnajQy35qxKJVn';

const secret = 'O4kyEkoJkbFd5OfhhPaYja1c8GHtSPyI9W1eCyBc';

async function getToken() {
let parm = new URLSearchParams();

parm.append("grant_type", "client_credentials")
parm.append("client_id", key);
parm.append("client_secret",secret)

const petRes = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
        method: 'POST',
        body: parm
    }
)

let obj = await petRes.json();

let token = obj.access_token;
console.log(obj);

}

getToken();

