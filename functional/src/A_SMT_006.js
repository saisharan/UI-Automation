/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */


/*Descriptions	:	Verify whether the application displays nearby stores on a 200 miles radius based on default store location if it is available. */

#import "Deals_CommonFunctions.js"

function A_SMT_006() {

	startTestCase("A_SMT_006");
	getMainWindow();
	landingPageTilesVerification();
	changeDefaultStore();
	closeSearchWindow();
}
A_SMT_006();
