
export function GetGames(console) {
 return fetch('/v1/games?console=' + console, { headers: { "Accept": "application/vnd.api+json" }})
    .then(response => response.json());
}

export function WhoAmI() {
 return api('/v1/users/me');
}

export function GetUser(id) {
 return api('/v1/users/' + id);
}

export function GetLibrary(id) {
 return api('/v1/users/' + id + '/games');
}

export default function api(uri, options = {}) {
  options.headers = {
    'Accept': 'application/vnd.api+json'
  };
  return new Promise((resolve, reject) => {
    fetch(uri, options)
      .then(response => {
        if (response.ok) {
          return resolve(response.json());
        }
        return response.json().then(json => {
          return reject({
            status: response.status,
            ok: false,
            statusText: response.statusText,
            body: json
          });
        });
      });
  });
}