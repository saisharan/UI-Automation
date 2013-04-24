/*
 
 This is the Main class and it is common for all the Testcase
 It will execute firstly.
 Here we defined all the common functionalities. 
 */

#import "UIElements.js"



var application;
var target;
var mainwindow;
var j=10;


/*	This function will launch the application	*/


function launchingApplication(testname){
	
	target=UIATarget.localTarget();
	application=target.frontMostApp();
	mainwindow= application.mainWindow();	
	waitForFewSeconds(3);
	UIALogger.logMessage("Device Name: " + target.name() + "  OS Version:" + target.systemVersion());	
}


function clickOnTableViewbutton(cellValue,button){

	if (button!=null && cellValue!=null){
		for(var i=0;i<=j;i++){
			var tablebutton = mainwindow.tableViews()[0].cells()[cellValue].buttons()[button];
			if(tablebutton.isVisible() && tablebutton.isEnabled()){
				tablebutton.tap();		
				break;	
			}
			else{
				if(i==j){
					UIALogger.logMessage("Assertion failed Excepcted value is:"+ ablebutton.name()+"  Getting value is: "+ button);
					UIALogger.logMessage("---Expected button not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for button present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---button not exists---");
	}	
}


function clickOnTableViewSecureField(cellValue,textFieldValue,setVal){

	if (textFieldValue!=null && cellValue!=null){
		for(var i=0;i<=j;i++){
			var tableTextpresent = mainwindow.tableViews()[0].cells()[cellValue].secureTextFields()[textFieldValue];
			if(tableTextpresent.isVisible() && tableTextpresent.isEnabled()){
				tableTextpresent.setValue(setVal);		
				break;	
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected SecureField not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for SecureField present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---SecureField not exists---");
	}	
}


function clickOnTableView(cellValue,textFieldValue,setVal){

	if (textFieldValue!=null && cellValue!=null){
		for(var i=0;i<=j;i++){
			var tableTextpresent = mainwindow.tableViews()[0].cells()[cellValue].textFields()[textFieldValue];
			if(tableTextpresent.isVisible() && tableTextpresent.isEnabled()){
				tableTextpresent.setValue(setVal);	
				break;		
			}
			else{
				if(i==j){
					UIALogger.logMessage("Assertion failed Excepcted value is:"+ tableTextpresent.name()+"     Getting value is: "+ textFieldValue);
					UIALogger.logMessage("---Expected TableView not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for TableView present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---TableView not exists---");
	}	
}


function clickOnScrollTableViewSecureField(cellValue,textFieldValue,setVal){	

	if (cellValue!=null){
			for(var i=0;i<=j;i++){
			var scrollViewpresent=mainwindow.scrollViews()[0].tableViews()[0].cells()[cellValue].secureTextFields()[textFieldValue];
			if(scrollViewpresent.isVisible() && scrollViewpresent.isEnabled()){				
				scrollViewpresent.setValue(setVal);			
				break;		
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected SecureField not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for SecureField present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---SecureField not exists---");
	}	
}


function clickOnScrollTableViewField(cellValue,textFieldValue,setVal){	

	if(cellValue!=null){
		for(var i=0;i<=j;i++){			
			var scrollViewTextpresent=mainwindow.scrollViews()[0].tableViews()[0].cells()[cellValue].textFields()[textFieldValue];	
			if(scrollViewTextpresent.isVisible() && scrollViewTextpresent.isEnabled()){				
				scrollViewTextpresent.setValue(setVal);	
				break;				
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected TableViewField not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for TableViewField present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---TableViewField not exists---");
	}	
}


function ClickOnSegmentedControls(button){

	if(button!=null){
		for(var i=0;i<=j;i++){			
			var segmentedControl=mainwindow.segmentedControls()[0].buttons()[button];
			if(segmentedControl.isVisible() && segmentedControl.isEnabled()){
				segmentedControl.tap();	
				break;
			}
			else{
				if(i==j){
					UIALogger.logMessage("Assertion failed Excepcted value is:"+ segmentedControl.name()+"Getting value is: "+ button);
					UIALogger.logMessage("---SegmentedControl not Exists---");
					throw error;
					
				}
				else{
					UIALogger.logMessage("---Waiting for SegmentedControl to exist---");
					target.delay(1);
				}
			}
		}
	}
	
	else{
		
		UIALogger.logMessage("-----------SegmentedControl  Value is empty-------------");
	}
}



function clickOnToolbarButton(button){
		
	if(button!=null){
		mainwindow.toolbars()[0].buttons()[button].tap();  
	}
	else{
		UIALogger.logMessage("-----------toolBar  Value is empty-------------");
	}
}

	
function clickOnNavigationBarButton(button){

	if(button!=null){
		mainwindow.navigationBar().buttons()[button].tap();
	}
	else{
		UIALogger.logMessage("-----------navigationBar  Value is empty-------------");
	}
}


function clickOnScrollButton(button){

	if(button!=null){
		mainwindow.scrollViews()[0].buttons()[button].tap();
	}
	else{
		UIALogger.logMessage("-----------ScrollButton  Value is empty-------------");
	}
}


function clickOnText(text){
	
	var textpresent = isTextPresent(text);
	textpresent.tap();
}


function isTextPresent(text){

	if (text!=null){
		for(var i=0;i<=j;i++){
			UIALogger.logMessage("---Verifying text to exists---");
			var textpresent = mainwindow.navigationBar().staticTexts()[text];
			if(textpresent.isVisible() && textpresent.isEnabled()){
				UIALogger.logMessage("---Verifedtext ---");	
				return textpresent;				
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected text not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for text present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---Text not exists---");
	}	
}


function isStaticTextPresent(text){

	if (text!=null){
		for(var i=0;i<=j;i++){
			UIALogger.logMessage("---Verifying text to exists---");
			var textpresent = mainwindow.staticTexts()[text];
			if(textpresent.isVisible() && textpresent.isEnabled()){		
				UIALogger.logMessage("---Text Exists ---");	
				return textpresent;		
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected text not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for text present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---Text not exists---");
	}	
}



function clickOnTableText(cellValue,text){

	if (text!=null){
		for(var i=0;i<=j;i++){			
			var tableTextpresent = mainwindow.tableViews()[0].cells()[cellValue].staticTexts()[text];			
			if(tableTextpresent.isVisible() && tableTextpresent.isEnabled()){
				tableTextpresent.tap();	
				break;
			}
			else{
				if(i==j){
					UIALogger.logMessage("---Expected table value not exists---");
					throw error;
				}
				else{
					UIALogger.logMessage("---wait for table value present---");
					waitForFewSeconds(1);
				}
			}
		}
	}
	else{
		UIALogger.logMessage("---table value not exists---");
	}	
}



/* 	whenever the testcases fail it will capture the screenshot 	*/


function captureScreenshot(name){

	target.captureScreenWithName(name); 
}



/* It will delay the process for few seconds */


function waitForFewSeconds(seconds){
	
	if(seconds!==null){
		target.delay(seconds);
	}
	else{
		UIALogger.logMessage("---Shouldnot be null---"+seconds);
		throw error;
	}	
}



/*
	Here the function will check the screen coordinates and click on particular element.

*/


function clickOnScreen(xpath,ypath){
	
	try{
		if(xpath!==null && ypath!==null){
			UIALogger.logMessage("---clickOnScreen---");
			waitForFewSeconds(2);
			target.tap({x:xpath,y:ypath});
			waitForFewSeconds(2);
		}
		else{
			UIALogger.logMessage(" X value should not be: "+xpath.value+" And "+"  Y value should not be: "+ypath.value);
			}
	}
	catch(error){
		throw error;
	}
}



function clickOnTableCell(CellValues){
	
	try{	
		if(CellValues!==null){
			var image=mainwindow.images()[0];
			var table= image.tableViews()[0];
			var cellValue= table.cells()[CellValues].tap();
		}
		else{
		UIALogger.logMessage("---Shouldnot be null---");
		}	
	}
	catch(error){
	throw error;
	}
}


launchingApplication("---Launching the application---");