#import "../../../../../main/com/photon/touchtunes/util/MainActivity.js"
#import "../../../../../main/com/photon/touchtunes/util/UIElements.js"


function testForgotPassword(testname){

	try{	
		clickOnScreen(58,316);
		ClickOnSegmentedControls(haveAccount_id);
		target.delay(3);
		clickOnScreen(82,301);
		target.delay(3);
		clickOnTableView(0,0,loginUsername);
		clickOnToolbarButton(close_id);
		target.delay(2);
		mainwindow.buttons()[blueButton_id].tap();
		target.delay(3);
		mainwindow.tabBar().buttons()[home_id].tap();
		UIALogger.logPass(testname);	
	} 	
	catch(error){		
		captureScreenshot(testname);			
		UIALogger.logFail("Fail");	
	}
}
testForgotPassword("ForgotPasswordTest");