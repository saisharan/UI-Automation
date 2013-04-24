#import "../../../../../main/com/photon/touchtunes/util/MainActivity.js"
#import "../../../../../main/com/photon/touchtunes/util/UIElements.js"
#import "../../../../../test/com/photon/touchtunes/testcase/UserInfo.js"

function testLogin(testname){

	try{
		//UIALogger.logStart(testname);
		clickOnScreen(58,316);
		ClickOnSegmentedControls(haveAccount_id);
		clickOnTableView(0,0,loginUsername);
		mainwindow.toolbars()[0].segmentedControls()[0].buttons()[next_id].tap();	
		clickOnTableViewSecureField(1,0,loginPassword);
		waitForFewSeconds(2);
		clickOnToolbarButton(close_id);
		waitForFewSeconds(2);
		clickOnScreen(66,232);
		isStaticTextPresent(verify_Login);
		UIALogger.logPass(testname);	
	}	
	catch(error){		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");
	}
}
testLogin("LoginTest");