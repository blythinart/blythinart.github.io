
var viewer = null;

function initialize() 
{
	var viewerDiv 	= document.getElementById('viewerCanvas2')
	viewer 		= new google.books.DefaultViewer(viewerDiv);
	
	viewer.load('GA6ScSY5h5EC', viewerLoadFail, viewerLoadSuccess);
	viewer.zoomIn();

}

function viewerLoadFail() 
{
        document.getElementById('viewerCanvas2').style.display = 'none';
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