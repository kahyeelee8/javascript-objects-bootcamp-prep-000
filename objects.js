var playlist = {'Phil Ochs':"Here's t};
function updatePlaylist(object, artistName, songTitle) { 
 return Object.assign({}, playlist, {'artist':'songTitle'});
}