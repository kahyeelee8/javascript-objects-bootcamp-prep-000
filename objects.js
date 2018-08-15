var playlist = {'Phil Ochs':'Here};
function updatePlaylist(object, artistName, songTitle) { 
 return Object.assign({}, playlist, {'artist':'songTitle'});
}