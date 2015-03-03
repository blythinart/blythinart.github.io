
var viewer = null;

function initialize() 
{
	viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
	
	viewer.load('fgcEEwlOWlwC', viewerLoadFail, viewerLoadSuccess);
	viewer.zoomIn();

}

function viewerLoadFail() 
{
        document.getElementById('viewerCanvas').style.display = 'none';
}


function viewerLoadSuccess() 
{
        if (!viewer) return;
        
        viewer.zoomIn();
        viewer.nextPage();
        viewer.previousPage();
}


google.setOnLoadCallback(initialize);
google.load("books", "0");