/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	1. Verify whether the application displays landing page on launch if location parameters are available.
					2. Verify whether the application displays following tiles in landing page,  						a. Weekly Deals 						b. Deals of the day 						c. All Deals   						d. Recently Viewed 						e. Most Popular 						f. Biggest Discounts 						g. Manage My Deals
					3. Verify whether the application displays following tiles in landing page if the user has not customized the tiles using "Manage Your Deals" option,  						a. Weekly Deals 						b. Deals of the day 						c. All Deals   						d. Recently Viewed 						e. Most Popular 						f. Biggest Discounts 						g. Manage My Deals
					4. Verify whether the application displays landing page on clicking “Home” from menu.
*/

#import "Deals_CommonFunctions.js"

function A_SMT_012() {
	
	startTestCase("A_SMT_012");
	getMainWindow();
	landingPageTilesVerification();
}
A_SMT_012();