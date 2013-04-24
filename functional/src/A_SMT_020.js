/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	: 	1. Verify whether the application displays weekly deals page on tapping “Weekly Deals”/”Weekly Insert” tile from landing page.
					2. Verify whether the “Weekly Deals” page displays following features,  						i. Category Menu (on left side of header). 						ii. Compare button (on right side of header). 						iii. Search button (on right side of header). 						iv. Grid view of products that come under “Weekly Deals” category.
					3. Verify whether the application displays the count of products available in “Weekly Deals” category.
					4. Verify whether the application displays the category list on the first column of grid.
*/

#import "Deals_CommonFunctions.js"

function A_SMT_020() {

	startTestCase("A_SMT_020");
	getMainWindow();
	weeklyDealsVerification();
	weeklyDealsMenuBarVerification();
	homePageNavigation();
	
}
A_SMT_020();
