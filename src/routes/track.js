const { Router } = require('express');
var musicList = require('../trackdata')
var albumlist = require('../albumdata')
var artist = require('../artistdata')
const router = Router();
router.get('/', function (request, response) {

    let id = request.query.id;
    if(!id){
        response.send("no id have been selected");
    }
    let trackInfo = musicList.trackList.filter(m => m.track_id == id);
    let albuminfo = albumlist.albumList.filter(m => m.album_id == trackInfo[0].album_id);
    let artistInfo = artist.artistList.filter(m => m.artist_id == trackInfo[0].artist_id);
    let result = {
        "album_id": albuminfo[0].album_id,
        "album_title": albuminfo[0].album_title,
        "artist_id": artistInfo[0].artist_id,
        "artist_name": artistInfo[0].artist_name,
        "tags": trackInfo[0].tags,
        "track_date_created":trackInfo[0].track_date_created,
        "track_date_recorded":trackInfo[0].track_date_recorded,
        "track_duration":trackInfo[0].track_duration,
        "track_genres":trackInfo[0].track_genres,
        "track_number":trackInfo[0].track_number
    }
    response.send(result);
});
module.exports = router;