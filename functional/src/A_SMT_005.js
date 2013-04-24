/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */


/*Descriptions	:	1. Verify whether the user can able to tap on “YOUR LOCAL STORE” from menu to view “Your Local Store” overlay.
					2. Verify whether the “YOUR LOCAL STORE” overlay displays following details,  						1. Store Name 						2. “CHANGE STORE” button 						3. Store Address 						4. Phone Number 						5. Weekly Timings 						6. Map with store location pinned 						7. “Get Directions” option
 */

#import "Deals_CommonFunctions.js"

function A_SMT_005() {

	startTestCase("A_SMT_005");
	getMainWindow();
	landingPageTilesVerification();
	menuButtonVerification();
	myLocalStoreOverlayVerification();
}
A_SMT_005();
