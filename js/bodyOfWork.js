google.books.load();
function initialize() {
  var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
  viewer.load('fgcEEwlOWlwC');
}
google.books.setOnLoadCallback(initialize);
