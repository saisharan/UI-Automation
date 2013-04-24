#import "../../../../../main/com/photon/touchtunes/util/MainActivity.js"
#import "../../../../../main/com/photon/touchtunes/util/UIElements.js"
#import "../../../../../test/com/photon/touchtunes/testcase/MyTouchTunesData.js"

function testEditPlaylist(testname){

	try{
		waitForFewSeconds(2);
		waitForFewSeconds(2);
		clickOnTableText(0,EditPlaylistName_id);
		waitForFewSeconds(2);
		clickOnNavigationBarButton(edit_id);
		waitForFewSeconds(2);
		mainwindow.textFields()[0].setValue(EditPlaylistName);
		waitForFewSeconds(2);		
		application.keyboard().buttons()[done_id].tap();
		waitForFewSeconds(5);
		clickOnNavigationBarButton(save_id);
		waitForFewSeconds(15);
		mainwindow.tabBar().buttons()[more_id].tap();
		waitForFewSeconds(2);
		clickOnTableText(4,signout_id);
		waitForFewSeconds(2);
		UIALogger.logPass(testname);	
	}      
	catch(error){		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");			
	}
}
testEditPlaylist("EditPlaylist_Test");

