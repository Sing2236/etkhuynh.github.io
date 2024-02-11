// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCd9NsMJ0v-Ep7QN-j7oILuZ7KcPl3P-2bWhMnFnMBf4U2xYliUQvXzrPCdl6s-j_JL9LB-xmO-7oASY0IZfrgt3oz4Z4Xkh6rxZtm6DwbZ6iDzhY3SZ0i6Ep_55Rjw1UBJVwHvh36JkmvCjSY_H-eKOYYHwI-1lSgTE9wGmakWXEQOMH-myTSpWd69NFyR5Fwbz9fAxvQqZviIkfhPpvR6KIsL9j6sdvZahLYHr38WhigSbdA0NnpcAgM7yATIpk2xRPVBayrhwkM6ppaF7O9p';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);
