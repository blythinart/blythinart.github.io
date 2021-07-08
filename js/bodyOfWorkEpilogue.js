google.books.load();
function initialize() {
  var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
  viewer.load('GA6ScSY5h5EC');
}
google.books.setOnLoadCallback(initialize);
