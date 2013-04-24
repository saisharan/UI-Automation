#import "../../../../../main/com/photon/touchtunes/util/MainActivity.js"
#import "../../../../../main/com/photon/touchtunes/util/UIElements.js"
#import "../../../../../test/com/photon/touchtunes/testcase/UserInfo.js"


function testAccountUpdate(testname){

	try{
		clickOnScreen(50,100);
		waitForFewSeconds(2);
		clickOnNavigationBarButton(edit_id);
		waitForFewSeconds(2);
		clickOnScrollTableViewField(0,0,firstName);
		waitForFewSeconds(2);
		clickOnScrollTableViewField(1,0,lastName);
		waitForFewSeconds(2);
		clickOnToolbarButton(close_id);
		waitForFewSeconds(2);
		clickOnScrollButton(blueButton_id);
		waitForFewSeconds(15);	
		UIALogger.logPass(testname);		
		}
	catch(exception){		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");
								
	}
}
testAccountUpdate("AccountUpdateTest");






