/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	: 	1. On tapping a tile from the grid, user should get navigated to the mdot PDP.
 					2. Application should navigate the user back to the last viewed page on tapping the back button from the native header.
 */

#import "Deals_CommonFunctions.js"

function A_SMT_036() {

	startTestCase("A_SMT_036");
	getMainWindow();
	landingPageTilesVerification();
	allDealsPageVerification();
	backToPreviousPageVerification();
	
}
A_SMT_036();
