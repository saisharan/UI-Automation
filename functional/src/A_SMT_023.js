/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	1.Verify whether the user can able to navigate to the “All Deals” page.
 					2.Verify whether the System checks for active deals in the category to display them in the “Weekly Deals” template when user taps. (i.e. with menu).
 					3.Verify whether the user can able to navigate to PDP by tapping a product tile.
 */

#import "Deals_CommonFunctions.js"

function A_SMT_023() {

	startTestCase("A_SMT_023");
	getMainWindow();
	landingPageTilesVerification();
	allDealsPageVerification();
	dynamicPdpPageVerification();
	
}
A_SMT_023();
