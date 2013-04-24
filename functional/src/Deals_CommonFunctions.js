/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

//Contains Common Functions for all Testcases.

#import "Deals_CommonProperties.js"

var app;
var target;
var window
var main;
var testCase;


//Starting the testcase
function startTestCase(testCaseName)
{
	testCase=testCaseName;
}


//Launching the application
function getMainWindow()
{
	try
	{
		target=UIATarget.localTarget();
   		app=target.frontMostApp();
   		window=app.mainWindow();
		main=window.images()[0];
		timeDelay();
		UIALogger.logPass("Testcase Name: "+testCase+ " Application Launched Successfully");
	}
	catch(err)
   	{
		errorLogger(err, " Application Launch failed");
    }
}


//Landing page Verification.
function landingPageVerification()
{
	try
	{
		tblviewsconditionalDelay(0,0,0,MENUBAR_HOME_LINK);
		natTblViewsStatTxtVrftn(0,0,MENUBAR_HOME_LINK);
		tblViewsStatTxtsBtnTap(0,0,MENUBAR_HOME_LINK);
		natStatTxtVrftn(LANDING_MYDEALS_TEXT);
		scrlBtnVrftn(LANDING_WEEKLYINSERT_BUTTON);	
		scrlBtnVrftn(LANDING_DEALOFDAY_BUTTON);
		scrlBtnVrftn(LANDING_MANAGEDEALS_BUTTON);
		natBtnVrftn(LANDING_MENUBUTTON_INDEX);
		UIALogger.logPass("Testcase Name: "+testCase+ " Landing page is displayed");
	}
	catch(err)
   	{
		errorLogger(err, " Landing page is not displayed");
    }
}


//Landing page (Tiles) Verification.
function landingPageTilesVerification()
{
	try
	{
		natStatTxtVrftn(LANDING_MYDEALS_TEXT);
		scrlBtnVrftn(LANDING_WEEKLYINSERT_BUTTON);	
		scrlBtnVrftn(LANDING_DEALOFDAY_BUTTON);
		scrlBtnVrftn(LANDING_ALLDEALS_BUTTON);
		scrlBtnVrftn(LANDING_RECENTLYVIEWED_BUTTON);
		scrlBtnVrftn(LANDING_MOSTPOPULAR_BUTTON);
		scrlBtnVrftn(LANDING_BIGGESTDISCOUNTS_BUTTON);
		scrlBtnVrftn(LANDING_MANAGEDEALS_BUTTON);
		UIALogger.logPass("Testcase Name: "+testCase+ " Landing page tiles are displayed");
	}
	catch(err)
  	{
		errorLogger(err, " Landing page tiles are not displayed");
    }
}


//Last (Tiles) Verification.
function lastTilesVerification()
{
	try
	{
		if(main.scrollViews()[0].buttons()[3].checkIsValid())
		{
			UIALogger.logPass("Testcase Name: "+testCase+ " Manage my deals is verified successfully");
			if(main.scrollViews()[0].buttons()[3].name() == LANDING_MANAGEDEALS_BUTTON)
			{
				UIALogger.logMessage("Name of the Tile: " + main.scrollViews()[0].buttons()[3].name());
			}
			else
			{
				throw testCase + " Manage my deals is not displayed as the last tile";
			}
		}
		else 
		{
		   	throw testCase+ " Manage my deals is not present"; 
		}
	}  
	catch(err)
    {
		errorLogger(err, " Manage my deals is not displayed as the last tile");
    }
}


//Tapping on Tile (weekly Deals) Verification & Navigation.
function weeklyDealsVerification()
{
	try
	{
		scrlBtnTap(0,LANDING_WEEKLYINSERT_BUTTON);
		timeDelay();
		tblviewsconditionalDelay(1,0,0, WEEKLY_HOMETHEATER_LINK);
		natStatTxtVrftn(WEEKLY_WEEKLYDEALS_TITLE);
		//natStatTxtVrftn(WEEKLY_BIGHOMETHEATERSAVINGS_TEXT);
		natTblViewsStatTxtVrftn(0,0, WEEKLY_HOMETHEATER_LINK);
		natTblViewsStatTxtVrftn(0,1, WEEKLY_AUDIOMP3_LINK);
		natTblViewsStatTxtVrftn(0,2, WEEKLY_MOBILE_LINK);
		UIALogger.logPass("Testcase Name: "+testCase+ "Weekly Deals page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " WEEKLY DEALS not displayed");
    }
}

//Biggest Discounts Navigation & Verification.
function biggestDiscountPageVerification()
{
	try
	{
		scrlBtnTap(0, LANDING_BIGGESTDISCOUNTS_BUTTON);
		timeDelay();
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(WEEKLY_FILTERSORT_BUTTON);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(DISCOUNT_TITLE_TEXT);
		natTblViewsStatTxtVrftn(0,0,DISCOUNT_GRIDVIEW_FIRSTROW_INDEX);
		natTblViewsStatTxtVrftn(0,1,DISCOUNT_GRIDVIEW_SECONDROW_INDEX);
		UIALogger.logMessage("Grid view is verified successfully");
		UIALogger.logPass("Testcase Name: "+testCase+ "Biggest Discount page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " Biggest Discount page is not displayed");
    }
}


//PDP Page Verification
function pdpPageVerification()
{
	try
	{
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(PDP_PRODUCTDETAIL_TITLE);
		scrlViewsWebViewslnkStatTxtVrftn(3,PDP_OVERVIEW_TAB);
		//scrlViewsWebViewslnkStatTxtVrftn(4,PDP_SPECIFICATIONS_TAB);
		{
			if(main.scrollViews()[0].webViews()[0].buttons()[PDP_ADDTOCART_BUTTON].checkIsValid())
			{
				UIALogger.logPass(" ADD TO CART Text is Verified Successfully.");
			}
			else if(main.scrollViews()[0].webViews()[0].staticTexts()[PDP_SOLDOUT_TEXT].checkIsValid())
			{
				UIALogger.logPass(" Sold Out Text is Verified Successfully.");
			}
			else
			{
			throw (" Neither ADD TO CART nor Sold Out is displayed ")
			}
		}
		UIALogger.logPass("Testcase Name: "+testCase+ "PDP page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " PDP Page is not displayed");
    }
}


//Product Detail  "Requested page is not found"
function pdpRequestedPageNotFoundVerification()
{
	try
	{
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(PDP_PRODUCTDETAIL_TITLE);
		scrlViewsWebViewslnkStatTxtVrftn(0,PDP_CUSTOMERREVIEW_TEXT);
		scrlViewsWebViewslnkStatTxtVrftn(1,PDP_FINDASTORE_TEXT);
		scrlViewsWebViewslnkStatTxtVrftn(2,PDP_VISITDESKTOPSITE_TEXT);
		scrlViewsWebViewsStatTxtVrftn(PDP_SORRY_TEXT);
		scrlViewsWebViewsStatTxtVrftn(PDP_TEMPORARILYUNAVAILABLE_TEXT);
		UIALogger.logPass("Testcase Name: "+testCase+ "PDP page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " PDP Page is not displayed");
    }
}

//Dynamic PDP Page Verification. 
function dynamicPdpPageVerification()
{
	try
	{
		target.tap({x:630,y:185});
		timeDelay();
		{
			if(main.scrollViews()[0].webViews()[0].links()[3].staticTexts()[PDP_OVERVIEW_TAB].checkIsValid())
			{
				pdpPageVerification();
			}
			else if(main.scrollViews()[0].webViews()[0].staticTexts()[PDP_SORRY_TEXT].checkIsValid())
			{
				pdpRequestedPageNotFoundVerification();
			}
			else
			{
			   	throw ("PDP Page is not Displayed");
			}
		}	
	}
	catch(err)
    {
		errorLogger(err, " PDP Page is not displayed");
    }
}


//Most Popular Navigation & Verification.
function mostPopularPageVerification()
{
	try
	{
		scrlBtnTap(0, LANDING_MOSTPOPULAR_BUTTON);
		timeDelay();
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(WEEKLY_FILTERSORT_BUTTON);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(MOSTPOPULAR_TITLE_TEXT);
		natTblViewsStatTxtVrftn(0,0,DISCOUNT_GRIDVIEW_FIRSTROW_INDEX);
		natTblViewsStatTxtVrftn(0,1,DISCOUNT_GRIDVIEW_SECONDROW_INDEX);
		UIALogger.logMessage("Grid view is verified successfully");
		UIALogger.logPass("Testcase Name: "+testCase+ " Most popular page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " Most popular page is not displayed");
    }
}

//Dynamic Deal of the Day Verification.
function dealOfTheDayPageVerification()
{
	try
	{
		scrlBtnTap(0, LANDING_DEALOFDAY_BUTTON);
		timeDelay();
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(WEEKLY_FILTERSORT_BUTTON);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(DEALOFTHEDAY_TITLE_TEXT);
		{
		if(main.scrollViews()[1].staticTexts()[DEALOFTHEDAY_HOURS_TEXT].checkIsValid())
			{
			scrlStatTxtVrftn(1,DEALOFTHEDAY_HOURS_TEXT);
			scrlStatTxtVrftn(1,DEALOFTHEDAY_MINUTES_TEXT);
			scrlStatTxtVrftn(1,DEALOFTHEDAY_SECONDS_TEXT);
			scrlStatTxtVrftn(1,DEALOFTHEDAY_TODAYDEALENDSIN_TEXT);
			dealOfTheDayPDPPageVerification();
			}
		else if(main.scrollViews()[0].scrollViews()[1].webViews()[0].links()[4].staticTexts()[PDP_OVERVIEW_TAB].checkIsValid())
			{
			dblScrlViewsStatTxtVrftn(0,0,DEALOFTHEDAY_HOURS_TEXT);
			dblScrlViewsStatTxtVrftn(0,0,DEALOFTHEDAY_MINUTES_TEXT);
			dblScrlViewsStatTxtVrftn(0,0,DEALOFTHEDAY_SECONDS_TEXT);
			dblScrlViewsStatTxtVrftn(0,0,DEALOFTHEDAY_TODAYDEALENDSIN_TEXT);
			dbleScrlViewsWebViewslnkStatTxtVrftn(1,4,PDP_OVERVIEW_TAB)
			dbleScrlViewsWebViewslnkStatTxtVrftn(1,5,PDP_SPECIFICATIONS_TAB)
			}
			else
			{
				throw("Deal of the Day page is not displayed");
			}
		}
		UIALogger.logPass("Testcase Name: "+testCase+ " Deal of the Day page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " Deal of the Day page is not displayed");
    }
}


//Deal of the Day PDP Page Verification
function dealOfTheDayPDPPageVerification()
{
	try
	{
		dblScrlViewsBtnTap(0,1, DEALOFTHEDAY_PRODUCTTILE_INDEX);
		timeDelay();
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(PDP_PRODUCTDETAIL_TITLE);
		scrlViewsWebViewslnkStatTxtVrftn(3,PDP_OVERVIEW_TAB);
		scrlViewsWebViewslnkStatTxtVrftn(4,PDP_SPECIFICATIONS_TAB);
		{
			if(main.scrollViews()[0].webViews()[0].buttons()[PDP_ADDTOCART_BUTTON].checkIsValid())
			{
				UIALogger.logPass(" ADD TO CART Text is Verified Successfully.");
			}
			else if(main.scrollViews()[0].webViews()[0].staticTexts()[PDP_SOLDOUT_TEXT].checkIsValid())
			{
				UIALogger.logPass(" Sold Out Text is Verified Successfully.");
			}
			else
			{
			throw (" Neither ADD TO CART nor Sold Out is displayed ")
			}
		}
		UIALogger.logPass("Testcase Name: "+testCase+ "PDP page is displayed");
	}	
	catch(err)
    {
		errorLogger(err, " PDP Page is not displayed");
    }
}


//Back button Tapping
function backButtonVerification()
{
	try
	{
		natStatTxtVrftn(LANDING_MYDEALS_TEXT);
		scrlBtnTap(0, LANDING_DEALOFDAY_BUTTON);
		timeDelay();
		natStatTxtVrftn(DEALOFTHEDAY_TITLE_TEXT);
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natBtnTap(0, DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(LANDING_MYDEALS_TEXT);
		UIALogger.logPass("Testcase Name: "+testCase+ "Back Button is tapped & Navigated Successfully");
	}
	catch(err)
    {
		errorLogger(err, " Back Button is not tapped Successfully");
    }
}


//Weekly Deals MenuBar Verification
function weeklyDealsMenuBarVerification()
{
	try
	{
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(WEEKLY_FILTERSORT_BUTTON);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natStatTxtVrftn(WEEKLY_PRODUCTCOUNTS_TEXT);
		UIALogger.logPass("Testcase Name: "+testCase+ "Weekly Deals menu bar is verified");
	}
	catch(err)
    {
		errorLogger(err, " WEEKLY DEALS Menu bar is not displayed");
    }
}


//Tap on Your Local Store.
function myLocalStoreOverlayVerification()
{
	try
	{
		tblViewsStatTxtsBtnTap(0,2, MENUBAR_YOURLOCALSTORE_LINK);
		conditionalDelay(3,0,OVERLAY_MYLOCALSTORE_TEXT);
		natStatTxtVrftn(OVERLAY_RICHFIELD_TEXT);
		natStatTxtVrftn(OVERLAY_ADDRESS_TEXT);
		natStatTxtVrftn(OVERLAY_PHONENUMBER_TEXT);
		natBtnVrftn(OVERLAY_CHANGELOCATION_BUTTON);
		natBtnVrftn(OVERLAY_GETDIRECTIONS_BUTTON);
		natBtnVrftn(OVERLAY_CLOSE_BUTTON);
		natDblImgStatVrftn(3,0,OVERLAY_MYLOCALSTORE_TEXT);
		natTblViewsStatTxtVrftn(1,0,OVERLAY_WEEKLYDAYS_TEXT);
		natStatTxtVrftn(OVERLAY_COPYRIGHT_MAPIMAGE);
		main.buttons()[OVERLAY_CLOSE_BUTTON].tap();
		UIALogger.logPass("Your Local Store Overlay displayed Successfully");
	}
	catch(err)
    {
		errorLogger(err, " Your Local Store Overlay is not displayed");
    }
}


//Search Field Verification
function searchFieldVerification()
{
	try
	{
		natBtnTap(0,LANDING_SEARCHMAGNIFIER_ICON);
		target.delay(WAIT);
		natTxtFldVrftn(LANDING_SEARCH_TEXTFIELD);
		natBtnTap(0,LANDING_SEARCHMAGNIFIER_ICON);
		UIALogger.logPass("Search Magnifier verified Successfully");
	}
	
	catch(err)
    {
		errorLogger(err, " Search Magnifier is not verified");
    }
}


//Search Results Page Navigation
function searchResultsPageNavigation()
{
	try
	{
		natBtnTap(0,LANDING_SEARCHMAGNIFIER_ICON);
		target.delay(WAIT);
		natTxtFldVrftn(LANDING_SEARCH_TEXTFIELD);
		natTxtFldTapping(LANDING_SEARCH_TEXTFIELD);
		main.textFields()[LANDING_SEARCH_TEXTFIELD].setValue(LANDING_SEARCHTERM_TEXT);
		app.keyboard().buttons()["search"].tap();
		timeDelay();
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(WEEKLY_FILTERSORT_BUTTON);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(SEARCHRESULTS_TITLE_TEXT);
		UIALogger.logPass("Search Results page is displayed");
	}
	
	catch(err)
    {
		errorLogger(err, " Search Results page is not displayed");
    }
}


//Menu bar verification
function menuButtonVerification()
{
	try
	{
		natBtnVrftn(LANDING_MENUBUTTON_INDEX);
		natBtnTap(0,LANDING_MENUBUTTON_INDEX);
		timeDelay();
		natTblViewsStatTxtVrftn(0,0,MENUBAR_HOME_LINK);
		natTblViewsStatTxtVrftn(0,1,MENUBAR_SEARCH_LINK);
		natTblViewsStatTxtVrftn(0,2,MENUBAR_YOURLOCALSTORE_LINK);
		natTblViewsStatTxtVrftn(0,3,MENUBAR_ABOUT_LINK);
		UIALogger.logPass("Menu options are displayed");
	}
	catch(err)
    {
		errorLogger(err, " Menu options are not displayed");
    }
}


//Home Page Navigation
function homePageNavigation()
{
	try
	{
		natBtnTap(1,LANDING_MENUBUTTON_INDEX);
		tblviewsconditionalDelay(0,0,0,MENUBAR_HOME_LINK);
		natTblViewsStatTxtVrftn(0,0,MENUBAR_HOME_LINK);
		tblViewsStatTxtsBtnTap(0,0,MENUBAR_HOME_LINK);
		UIALogger.logPass("Navigated to Home Page Successfully");
	}
	catch(err)
    {
		errorLogger(err, " Unable to navigate to home page");
    }
}


//A_SMT_001
function localStoreDisplayPopUpVerify()
{
	try
	{
		if (main.images()[2].images()[0].staticTexts()[OVERLAY_MYLOCALSTORE_TEXT].checkIsValid())
		{
			natDblImgStatVrftn("bg_popwin.png","bg_popup_modual.png",OVERLAY_MYLOCALSTORE_TEXT);
			natBtnVrftn(OVERLAY_CHANGELOCATION_BUTTON);
			natStatTxtVrftn(OVERLAY_ADDRESS_TEXT);
			natStatTxtVrftn(OVERLAY_PHONENUMBER_TEXT);
			natTblViewsStatTxtVrftn(1,0,OVERLAY_WEEKLYDAYS_TEXT);
			natImgVrftn(MAP);
			natBtnVrftn(OVERLAY_GETDIRECTIONS_BUTTON);	
		}
		else if(main.buttons()[LANDING_MENUBUTTON_INDEX].checkIsValid())
		{
			UIALogger.logPass("TestCase: "+testCase+" First Time Overlay is not displayed. Hence proceeding with Landing page");
			natStatTxtVrftn(LANDING_MYDEALS_TEXT);
			scrlBtnVrftn(LANDING_WEEKLYINSERT_BUTTON);
		}
	}
	catch(err)
	{
		errorLogger(err, " Landing page is not displayed");
    }
}
	

//A_SMT_004
function localStoreDisplayGetDirectionPopUpVerify()
{
	try
	{
		if (main.images()[2].images()[0].staticTexts()[OVERLAY_MYLOCALSTORE_TEXT].checkIsValid())
		{
			natBtnVrftn(OVERLAY_CHANGELOCATION_BUTTON);
			main.buttons()[OVERLAY_GETDIRECTIONS_BUTTON].tap();
			natTxtFldVrftn(SEARCHSTORE_TEXTFIELD_CITY);
		}
		else if (main.buttons()[LANDING_MENUBUTTON_INDEX].checkIsValid())
		{
			UIALogger.logPass("TestCase: "+ testCase +" First Time Overlay is not displayed. Hence proceeding with Landing page");
			natStatTxtVrftn(LANDING_MYDEALS_TEXT);
			scrlBtnVrftn(LANDING_WEEKLYINSERT_BUTTON);
		}
	}
	catch(err)
	{
		errorLogger(err, " Landing page is not displayed");
    }
}
	

//A_SMT_021
function weekelyDealsCategoryDisplay()
{
	try
	{
		scrlBtnTap(0,LANDING_WEEKLYINSERT_BUTTON);
		tblviewsconditionalDelay(1,1,0, WEEKLY_HOMETHEATER_LINK);
		natTblViewsStatTxtVrftn(1,2, WEEKLY_MOBILE_LINK);
		tblViewsStatTxtsBtnTap(1,2,WEEKLY_MOBILE_LINK);
		natTblGrpVrftn(2, WEEKLY_MOBILE_LINK);
		natTblViewsStatTxtVrftn(1,10, WEEKELYDEALS_PRINTERS_LINK);
		tblViewsStatTxtsBtnTap(1,10, WEEKELYDEALS_PRINTERS_LINK);
		natTblGrpVrftn(2, WEEKELYDEALS_PRINTERS_LINK);
	}
	catch(err)
	{
		errorLogger(err, " Weekly Deals Categories are not verified and navigated");
    }
}


//Your local Store overlay Navigation
function yourLocalStoreOverlay()
{
	try
	{
		natBtnTap(0,LANDING_MENUBUTTON_INDEX);
		target.delay(WAIT);
		natTblViewsStatTxtVrftn(0,2, MENUBAR_YOURLOCALSTORE_LINK);
		tblViewsStatTxtsBtnTap(0,2, MENUBAR_YOURLOCALSTORE_LINK);
	}
	catch(err)
	{
		errorLogger(err, " Your local store overlay is not displayed");
    }
}

//Changing Location
function changeDefaultStore()
{
	try
	{
		yourLocalStoreOverlay();
		conditionalDelay(3,0,OVERLAY_MYLOCALSTORE_TEXT);
		natBtnVrftn(OVERLAY_CHANGELOCATION_BUTTON);
		main.buttons()[OVERLAY_CHANGELOCATION_BUTTON].tap();
	}
	catch(err)
	{
		errorLogger(err, " Unable to tap on Change Location button");
    }
}


//Close Map Search Window
function closeSearchWindow()
{
	try
	{
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		window.buttons()[CHANGE_WINDOWCLOSE_BUTTON].tap();
	}
	catch(err)
    {
		errorLogger(err, "Unable to close the Map Window");
    }
}


//City Search
function citySearchVerification()
{
	try
	{
		changeDefaultStore();
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		txtFldVrftn(SEARCHSTORE_TEXTFIELD_INDEX);
		window.textFields()[SEARCHSTORE_TEXTFIELD_INDEX].tap();
		enterText(CHANGE_CITYSEARCH_TEXT);
		app.keyboard().buttons()["return"].tap();
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		window.buttons()[CHANGE_WINDOWCLOSE_BUTTON].tap();
	}
	catch(err)
   	{
		errorLogger(err, " Unable to Search a City");
    }
}


//A_SMT_010
function stateSearchVerification()
{
	try
	{
		changeDefaultStore();
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		txtFldVrftn(SEARCHSTORE_TEXTFIELD_INDEX);
		window.textFields()[SEARCHSTORE_TEXTFIELD_INDEX].tap();
		enterText(CHANGE_STATESEARCH_TEXT);
		app.keyboard().buttons()["return"].tap();
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		window.buttons()[CHANGE_WINDOWCLOSE_BUTTON].tap();
	}
	catch(err)
   	{
		errorLogger(err, " Unable to search a state");
    }
}

//Searching for store locator
function searchStore()
{
	try
	{
		changeDefaultStore();
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		txtFldVrftn(SEARCHSTORE_TEXTFIELD_INDEX);
		target.delay(WAIT);
		window.textFields()[SEARCHSTORE_TEXTFIELD_INDEX].tap();
		app.keyboard().buttons()["more, numbers"].tap();
		enterText(CHANGE_ZIPCODESEARCH_TEXT);
		app.keyboard().buttons()["return"].tap();
		srchTxtFldcndtlDelay(SEARCHSTORE_TEXTFIELD_INDEX);
		window.buttons()[CHANGE_WINDOWCLOSE_BUTTON].tap();
	}
	catch(err)
    {
		errorLogger(err, " Unable to search a store");
    }
}

/****/
//All Deals Navigation & Verification.
function allDealsPageVerification()
{
	try
	{
		scrlBtnTap(0, LANDING_ALLDEALS_BUTTON);
		timeDelay();
		natBtnVrftn(WEEKLY_SEARCH_TEXTFIELDS);
		natBtnVrftn(WEEKLY_ADDTOMYDEALS_BUTTON);
		natBtnVrftn(WEEKLY_FILTERSORT_BUTTON);
		natBtnVrftn(WEEKLY_COMPARE_BUTTON);
		natBtnVrftn(DISCOUNT_MENU_BUTTON);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(ALLDEALS_TITLE_TEXT);
		natTblViewsStatTxtVrftn(0,0,DISCOUNT_GRIDVIEW_FIRSTROW_INDEX);
		natTblViewsStatTxtVrftn(0,1,DISCOUNT_GRIDVIEW_SECONDROW_INDEX);
		timeDelay();
		UIALogger.logMessage("Grid view is verified successfully");
		UIALogger.logPass("Testcase Name: "+testCase+ " All Deals page is displayed");
	}
	catch(err)
    {
		errorLogger(err, " All Deals page is not displayed");
    }
}

//A_SMT_036
function backToPreviousPageVerification()
{
	try
	{
		target.tap({x:390,y:185});
		timeDelay();
		natStatTxtVrftn(PDP_PRODUCTDETAIL_TITLE);
		natBtnVrftn(DISCOUNT_BACK_BUTTON);
		natBtnTap(0, DISCOUNT_BACK_BUTTON);
		natStatTxtVrftn(ALLDEALS_TITLE_TEXT);
		UIALogger.logPass("Test Case Name : "+testCase+", Navigated to Previous page Successfully");
	}
	catch(err)
	{
		errorLogger(err, "Unable to navigate to all deals");
	}
}


//Product Cart
function productCart()
{
	try
	{
		scrlBtnVrftn(LANDING_ALLDEALS_BUTTON);
		scrlBtnTap(0,LANDING_ALLDEALS_BUTTON);
		timeDelay();
				
		if(main.staticTexts()[ALLDEALS_TITLE_TEXT].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", All Deals Static Text verified Successfully");
		}
		else
		{
			throw " Static Text not Present";
		}
				
		if(main.tableViews()[0].cells()[1].staticTexts()[0].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Product grid 2 verified Successfully");
		}
		else
		{
			throw " Product grid 2 not Present";
		}
		timeDelay();
		target.tap({x:670,y:490});
		timeDelay();
		
		if(main.staticTexts()[PDP_PRODUCTDETAIL_TITLE].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Product detail Static Text verified Successfully");
		}
		else
		{
			throw " Static Text not Present";
		}
		
		if(main.scrollViews()[0].webViews()[0].buttons()[PDP_ADDTOCART_BUTTON].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Add to Cart Button verified Successfully");
			main.scrollViews()[0].webViews()[0].buttons()[PDP_ADDTOCART_BUTTON].tap();
			timeDelay(); 
		}
		else
		{
			throw " Add to Cart Button not Present";
		}
		
		if(main.buttons()[DISCOUNT_BACK_BUTTON].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Back Button verified Successfully");
			main.buttons()[DISCOUNT_BACK_BUTTON].tap();
		}
		else
		{
			throw " Back Button not Present";
		}
		
		if(main.staticTexts()[LANDING_SEARCHMAGNIFIER_ICON].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", All Deals Static Text verified Successfully");
		}
		else
		{
			throw " All Deals Static Text not Present";
		}
		
		if(main.tableViews()[0].cells()[0].staticTexts()[0].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Product grid 1 verified Successfully");
		}
		else
		{
			throw " Product grid 1 not Present";
		}
		timeDelay();
		target.tap({x:970,y:250});
		timeDelay();
		
		if(main.scrollViews()[0].webViews()[0].buttons()[PDP_ADDTOCART_BUTTON].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Add to Cart Button verified Successfully");
			main.scrollViews()[0].webViews()[0].buttons()[PDP_ADDTOCART_BUTTON].tap();
			timeDelay(); 
		}
		else
		{
			throw " Add to Cart Button not Present";
		}
		
		}
	
	catch(err)
	{
		errorLogger(err, "Unable to verify any deal");
	}
}

//A_SMT_040
function prodQuantityCartAddRemove()
{
	try
	{	
		productCart();
		
		if(main.images()[5].buttons()[DEALS_VIEWCART].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", View Cart Button verified Successfully");
			main.images()[5].buttons()[DEALS_VIEWCART].tap();
			timeDelay();
		}
		else
		{
			throw " View Cart Button not Present";
		}
		
		if(window.scrollViews()[0].webViews()[0].staticTexts()[14].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Static text + verified Successfully");
			window.scrollViews()[0].webViews()[0].staticTexts()[14].tap();
			timeDelay();
		}
		else
		{
			throw " Static texts + not Present";
		}
		
		if(window.scrollViews()[0].webViews()[0].staticTexts()[13].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Static text - verified Successfully");
			window.scrollViews()[0].webViews()[0].staticTexts()[13].tap();
			timeDelay();
		}
		else
		{
			throw " Static texts - not Present";
		}
		
		//UIALogger.logMessage("+ value" + main.scrollViews()[0].webViews()[0].staticTexts()[31].name());
		
		if(window.scrollViews()[0].webViews()[0].staticTexts()[30].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Static text + verified Successfully");
			window.scrollViews()[0].webViews()[0].staticTexts()[30].tap();
			timeDelay();
		}
		else
		{
			throw " Static texts + not Present";
		}
		
		
		if(window.scrollViews()[0].webViews()[0].staticTexts()[28].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Static text - verified Successfully");
			window.scrollViews()[0].webViews()[0].staticTexts()[28].tap();
			timeDelay();
		}
		else
		{
			throw " Static texts - not Present";
		}
		
		if(window.scrollViews()[0].webViews()[0].links()[7].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Static text Remove verified Successfully");
			window.scrollViews()[0].webViews()[0].links()[7].tap();
			timeDelay();
		}
		else
		{
			throw " Static text Remove not Present";
		}
	}
	catch(err)
	{
		errorLogger(err, "Unable to verify any deal");
	}
}

//A_SMT_041
function prodQuantityCartAddRemoveCheckout()
{
	try
	{
		productCart();
		
		if(main.images()[5].buttons()[DEALS_VIEWCART].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", View Cart Button verified Successfully");
			main.images()[5].buttons()[DEALS_VIEWCART].tap();
			timeDelay();
		}
		else
		{
			throw " View Cart Button not Present";
		}
		
		if(window.buttons()[DEALS_CHECKOUT].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Checkout Button verified Successfully");
			window.buttons()[DEALS_CHECKOUT].tap();
			timeDelay();
		}
		else
		{
			throw " Checkout Button not Present";
		}
		
		if(window.buttons()[DEALS_BACK].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Back to Cart Button verified Successfully");
			window.buttons()[DEALS_BACK].tap();
			timeDelay();
		}
		else
		{
			throw " Back to Cart Button not Present";
		}
		
		
		/*if(main.scrollViews()[0].webViews()[0].buttons()[PRODUCT_CHECKOUT].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+", Checkout Button verified Successfully");
			main.scrollViews()[0].webViews()[0].buttons()[PRODUCT_CHECKOUT].tap();
			timeDelay(); 
		}
		else
		{
			throw " Checkout Button not Present";
		}*/
		
		
	}
	catch(err)
	{
		errorLogger(err, "Unable to verify any deal");
	}
}


/****$ Main Function $***/

/***********Verification Functionalities***********/

//Activity Indicator Time Delay
function timeDelay() 
{
	var done = false;
	var counter = 0;
	while ((!done) && (counter < 60)) 
	{
		var progressIndicator = app.windows()[0].activityIndicators()[0];
		UIALogger.logMessage(progressIndicator);
		if (progressIndicator != "[object UIAElementNil]") 
		{
			target.delay(0.5);
			counter++; 
		}
		else 
		{
			done = true;
		}
	}
	target.delay(0.5);
}

//Conditional Time Delay
function conditionalDelay(indValue,imgValue,txtValue) 
{
	var found = false;
    var counter = 0;  
	var elementCheck = main.images()[indValue].images()[imgValue].staticTexts()[txtValue];    
    while ((!found) && (counter < 60)) 
	{    
        if (!elementCheck.isVisible()) 
		{
            UIALogger.logMessage("checking for "+ txtValue);
			target.delay(0.5);
            counter++;
        }
        else 
		{
            found = true;
            target.delay(1);
			UIALogger.logMessage(txtValue+" is found");
        }
    }
}

//Weekly Deals Conditional Time Delay
function tblviewsconditionalDelay(imgValue,tblValue,celValue,txtValue) 
{
	var found = false;
    var counter = 0;  
	var elementCheck = window.images()[imgValue].tableViews()[tblValue].cells()[celValue].staticTexts()[txtValue];    
    while ((!found) && (counter < 60)) 
	{    
        if (!elementCheck.isVisible()) 
		{
            UIALogger.logMessage("checking for "+ txtValue);
			target.delay(0.5);
            counter++;
        }
        else 
		{
            found = true;
            target.delay(1);
			UIALogger.logMessage(txtValue+" is found");
        }
    }
}

//Weekly Deals Conditional Time Delay
function srchTxtFldcndtlDelay(txtFldValue) 
{
	var found = false;
    var counter = 0;  
	var elementCheck = window.textFields()[txtFldValue];    
    while ((!found) && (counter < 60)) 
	{    
        if (!elementCheck.isVisible()) 
		{
			target.delay(0.5);
            counter++;
        }
        else 
		{
            found = true;
            target.delay(1);
			UIALogger.logMessage("TextField is found");
        }
    }
}

//Loop for entering texts using keyboard inside app
function enterText(txtFieldValue)
{
	for(i=0;i<txtFieldValue.length;i++)
	{
    	app.keyboard().keys()[txtFieldValue[i]].tap();
    }
}

//Screen Capture with time stamp
function screenCapture(msg)
{
	var time = (new Date()).getTime();
	target.captureScreenWithName(testCase+time+msg);
}

//Failure log Method
function errorLogger(err, msg)
{
	UIALogger.logFail(testCase+err);
    UIALogger.logMessage(err);
    if(UIALogger.logError())
    {
    	screenCapture(msg); 
    }
}

//Table Group Verification
function natTblGrpVrftn(tblValue,grpValue)
{
	try
	{
		if(main.tableViews()[tblValue].groups()[grpValue].checkIsValid())
		{
			UIALogger.logPass("Testcase Name : "+testCase+"Group Value : "+ grpValue +" header text Verified Successfully");
		}
		else
		{
			throw grpValue +" header text is not Present";
		}
	}
 	catch(err)
    {
		errorLogger(err, " header text is not Present");
    }
}

//Native staticText Verification
function natStatTxtVrftn(txtValue)
{
	try
	{
		if(main.staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Testcase Name : "+testCase+"Textvalue : "+txtValue+" Text Verified Successfully");
		}
		else
		{
			throw txtValue+" Text not Present";
		}
	}
 	catch(err)
    {
		errorLogger(err, " Text is not Present");
    }
}


//Scroll button Verification
function scrlBtnVrftn(btnValue)
{
	try
	{
		if(main.scrollViews()[0].buttons()[btnValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+btnValue+" Button verified Successfully");
		}
		else
		{
			throw btnValue+" Button not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Button is not Present");
    }
}


//Scroll StaticText Verification
function scrlStatTxtVrftn(indValue,txtValue)
{
	try
	{
		if(main.scrollViews()[indValue].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"Text Value : "+txtValue+"Text verified Successfully");
		}
		else
		{
			throw txtValue+" Text is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Text is not Present")
    }
}


//Native button Verification
function natBtnVrftn(btnValue)
{
	try
	{
		if(main.buttons()[btnValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+ btnValue +" Button verified Successfully");
		}
		else
		{
			throw btnValue +" Button not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Button is not Present");
    }
}


//Native Image Verification
function natImgVrftn(imgValue)
{
	try
	{
		if(main.images()[imgValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"image Value : "+ imgValue +" Image verified Successfully");
		}
		else
		{
			throw imgValue +" Image is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Image is not Present")
    }
}


//Native Double Image static Text Verification
function natDblImgStatVrftn(indValue,imgValue,txtValue)
{
	try
	{
		if(main.images()[indValue].images()[imgValue].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"image Value : "+ txtValue +" Text verified Successfully");
		}
		else
		{
			throw txtValue +" Text is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Text is not Present");
    }
}


//Native TextFields Verification
function natTxtFldVrftn(textValue)
{
	try
	{
		if(main.textFields()[textValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"text Value : "+textValue+" TextField verified Successfully");
		}
		else
		{
			throw textValue+" Textfield is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Textfield is not Present");
    }
}

//Windows TextFields Verification
function txtFldVrftn(txtValue)
{
	try
	{
		if(window.textFields()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"text Value : "+txtValue+" TextField verified Successfully");
		}
		else
		{
			throw txtValue+" Textfield is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Textfield is not Present");
    }
}

//Table View Verification
function natTblViewsStatTxtVrftn(tblValue,celValue,txtValue)
{
	try
	{
		if(main.tableViews()[tblValue].cells()[celValue].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+txtValue+" Link verified Successfully");
		}
		else
		{
			throw txtValue+" link is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " link is not Present");
    }
}

//Double Scroll View Static Text Verification.
function dblScrlViewsStatTxtVrftn(indValue,scrlValue,txtValue)
{
	try
	{
		if(main.scrollViews()[indValue].scrollViews()[scrlValue].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ txtValue +" text verified Successfully");
		}
		else
		{
			throw txtValue +" text is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " text is not Present");
    }
}

//Web View staticText Verification
function scrlViewsWebViewsStatTxtVrftn(txtValue)
{
	try
	{
		if(main.scrollViews()[0].webViews()[0].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ txtValue +" text verified Successfully");
		}
		else
		{
			throw txtValue +" text is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " text is not Present");
    }
}

//Web View button Verification
function scrlViewsWebViewsbtnVrftn(btnValue)
{
	try
	{
		if(main.scrollViews()[0].webViews()[0].buttons()[btnValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ btnValue +" Link verified Successfully");
		}
		else
		{
			throw btnValue +" button is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " button is not Present");
    }
}

//WebView link Verification
function scrlViewsWebViewslnkStatTxtVrftn(lnkValue,txtValue)
{
	try
	{
		if(main.scrollViews()[0].webViews()[0].links()[lnkValue].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ txtValue +" Link verified Successfully");
		}
		else
		{
			throw txtValue +" Tab is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Tab is not Present");
    }
}

//Double Scroll View WebView link Verification
function dbleScrlViewsWebViewslnkStatTxtVrftn(indValue,lnkValue,txtValue)
{
	try
	{
		if(main.scrollViews()[0].scrollViews()[indValue].webViews()[0].links()[lnkValue].staticTexts()[txtValue].checkIsValid())
		{
			UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ txtValue +" Link verified Successfully");
		}
		else
		{
			throw txtValue +" Tab is not Present";
		}
	}
	catch(err)
    {
		errorLogger(err, " Tab is not Present");
    }
}

/********Button Tapping Functionalities**********/

//Tapping Hybrid button
function scrlBtnTap(indValue,btnValue)
{
	try
	{
		main.scrollViews()[indValue].buttons()[btnValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+btnValue+" Button is tapped Successfully");
			
	}
	catch(err)
    {
		errorLogger(err, " Button is not tapped");
    }
}


//Native button Tapping
function natBtnTap(imgValue,btnValue)
{
	try
	{
		window.images()[imgValue].buttons()[btnValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+btnValue+" Button is tapped Successfully");
	}
	catch(err)
    {
		errorLogger(err, " Button is not tapped");
    }
}


//Table View ButtonTapping
function tblViewsStatTxtsBtnTap(tblValue,celValue,txtValue)
{
	try
	{
		main.tableViews()[tblValue].cells()[celValue].staticTexts()[txtValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ txtValue +" Button is tapped Successfully");
		
	}
	catch(err)
    {
		errorLogger(err, " Button is not tapped");
    }
}


//Double Scroll View Button Tapping.
function dblScrlViewsBtnTap(indValue,scrlValue,btnValue)
{
	try
	{
		main.scrollViews()[indValue].scrollViews()[scrlValue].buttons()[btnValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"table Value : "+ btnValue +" Button is tapped Successfully");
		
	}
	catch(err)
    {
		errorLogger(err, " Button is not tapped");
    }
}

//Native TextFields Verification
function natTxtFldTapping(txtValue)
{
	try
	{
		main.textFields()[txtValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"text Value : "+txtValue+" Textfield is tapped successfully");
	}
	catch(err)
    {
		errorLogger(err, " Textfield is not tapped");
    }
}

/*******/

//Tapping a particular place using coordinates
function tapUsingCoordinates(xValue,yValue)
{
	target.tap({x:xValue, y:yValue});
	timeDelay();
}

//Tapping Web view button
function webBtnTap(imgValue,btnValue)
{
	try
	{
		window.images()[imgValue].scrollViews()[0].webViews()[0].buttons()[btnValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+btnValue+" Button is tapped Successfully");
		timeDelay();
	}
	catch(err)
    {
		errorLogger(err, " Button is not tapped");
    }
}

//Verifying web view button
function webBtnVrftn(imgValue,btnValue)
{
	try
	{
		if(window.images()[imgValue].scrollViews()[0].webViews()[0].buttons()[btnValue].checkIsValid())
		{
		UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+btnValue+" Button is verified Successfully");
		timeDelay();
		}
		else
		{
		UIALogger.logMessage("Test Case Name : "+testCase+"Button Value : "+ btnValue +" Button is not verified");
		}
	}
		
	catch(err)
    {
		errorLogger(err, " Button is not tapped");
    }
}

//Web Links verification
function webLinkVrftn(imgValue,linkValue)
{
	try
	{
		if(window.images()[imgValue].scrollViews()[0].webViews()[0].links()[linkValue].checkIsValid())
		{
		UIALogger.logPass("Test Case Name : "+testCase+"Link Value : "+ linkValue +" Link is verified Successfully");
		timeDelay();
		}
		else
		{
		UIALogger.logMessage("Test Case Name : "+testCase+"Link Value : "+ linkValue +" Link is not verified");
		}
	}
	catch(err)
    {
		errorLogger(err, "Verification failure");
    }
}

//Tapping Web links
function webLinkTap(imgValue,linkValue)
{
	try
	{
		window.scrollViews()[0].webViews()[0].links()[linkValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"Link Value : "+ linkValue +" Link is tapped Successfully");
		timeDelay();
	}
	catch(err)
    {
		errorLogger(err, " Link is not tapped");
    }
}


//Image Button verification
function imgBtnVrftn(imgValue,btnValue)
{
	try
	{
		if(main.images()[imgValue].buttons()[btnValue].checkIsValid())
		{
		UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+ btnValue +" Button is verified Successfully");
		timeDelay();
		}
		else
		{
		UIALogger.logMessage("Test Case Name : "+testCase+"Button Value : "+ btnValue +" Button is not verified");
		}
	}
	catch(err)
    {
		errorLogger(err, "Verification failure");
    }
}

//Tapping Image Button
function imgBtnTap(imgValue,btnValue)
{
	try
	{
		main.images()[imgValue].buttons()[btnValue].tap();
		UIALogger.logPass("Test Case Name : "+testCase+"Button Value : "+ btnValue +" Button is tapped Successfully");
		timeDelay();
	}
	catch(err)
    {
		errorLogger(err, "Tapping failure");
    }
}


/*****Main Function Ends******/

		
		
