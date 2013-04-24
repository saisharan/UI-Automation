#import "../../../../../main/com/photon/touchtunes/util/MainActivity.js"
#import "../../../../../main/com/photon/touchtunes/util/UIElements.js"
#import "../../../../../test/com/photon/touchtunes/testcase/MyTouchTunesData.js"


function testCreatePlaylist(testname){

	try{
		waitForFewSeconds(2);
		clickOnTableText(0,playList_id);
		clickOnNavigationBarButton(create_id);
		UIATarget.onAlert = function onAlert(alert){
			waitForFewSeconds(2);
			var title = alert.name();
			UIALogger.logMessage("Alert with title " + title );
				if (title == playlistTitle){
					waitForFewSeconds(2);
					alert.textFields()[0].setValue(PlaylistName);
					waitForFewSeconds(2);
					alert.buttons()[create_id].tap();
					waitForFewSeconds(2);
					return true; 
					waitForFewSeconds(6);
	 			}
				return false;
		}
		waitForFewSeconds(10);
		UIALogger.logPass(testname);	
	}  	
	catch(error){		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");						
	}
}
testCreatePlaylist("CreatePlaylistTest");