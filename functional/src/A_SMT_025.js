/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	: 	1. Verify whether the application navigates the user to “Biggest Discount” page.
					2. Verify whether the application displays the deals in Browse Products Grid template.
					3. Verify whether the user can able to navigate to PDP by tapping a product tile. */

#import "Deals_CommonFunctions.js"

function A_SMT_025() {

	startTestCase("A_SMT_025");
	getMainWindow();
	landingPageTilesVerification();
	biggestDiscountPageVerification();
	dynamicPdpPageVerification();
}
A_SMT_025();
