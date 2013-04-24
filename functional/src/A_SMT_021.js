/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	: 	Verify whether the user can able to tap on the category and view the products available on that category on the side grid.*/

#import "Deals_CommonFunctions.js"

function A_SMT_021() {

	startTestCase("A_SMT_021");
	getMainWindow();
	landingPageTilesVerification();
	weekelyDealsCategoryDisplay();
	homePageNavigation();
}
A_SMT_021();
