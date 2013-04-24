/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	: 	1. Verify whether the main menu displays following items,  						a. Close 						b. Home 						c. Search 						d. Your Local Store 						e. About
 					2. Verify whether the landing page is displayed on tapping “Home”.
 */

#import "Deals_CommonFunctions.js"

function A_SMT_015() {
	
	startTestCase("A_SMT_015");
	getMainWindow();
	menuButtonVerification();
	landingPageVerification();
}
A_SMT_015();