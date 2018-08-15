var playlist = {'artistName':'songTitle'};
function updatePlaylist(object, artistName, songTitle) { 
 return Object.assign({}, playlist, {'artist':'songTitle'});
}