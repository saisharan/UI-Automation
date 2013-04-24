#import "../../../../../main/com/photon/touchtunes/util/MainActivity.js"
#import "../../../../../main/com/photon/touchtunes/util/UIElements.js"
#import "UserInfo.js"


function testRegister(testname){

	try{
		clickOnScreen(58,316);
		waitForFewSeconds(2);
		ClickOnSegmentedControls(newAccount_id);
		waitForFewSeconds(2);
		clickOnScrollTableViewField(0,0,registerUsername);
		clickOnScrollTableViewField(1,0,registerEmail);
		clickOnScrollTableViewSecureField(2,0,registerPassword);
		clickOnScrollTableViewSecureField(3,0,registerRePassword);	
		clickOnToolbarButton(close_id);
		mainwindow.scrollViews()[0].tableViews()[0].cells()[4].buttons()[arrowCountry_id].tap();
		waitForFewSeconds(2);
		clickOnToolbarButton(close_id);
		waitForFewSeconds(2);
		clickOnScreen(69,316);
		waitForFewSeconds(10);
		isTextPresent(registermsg);
		clickOnNavigationBarButton(home_id);
		waitForFewSeconds(2);
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
testRegister("RegistrationTest");