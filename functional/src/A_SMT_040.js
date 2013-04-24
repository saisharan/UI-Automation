/* 
 * Project Name	:	Digital Deals
 * Project Code : 	01683
 * Author		: 	Jaganathan k 	  Email: jaganathan.kamalakannan@photoninfotech.net 
 *		    	  	Karthikeyan S     Email: karthikeyan.shanmugam@photoninfotech.net 
 * Manager		: 	Shivashankari N   Email: shivashankari.n@photon.in
 */

/*Descriptions	:	1.User should able to increase or decrease the product quantity using the "+" or "-" button in the Quantity column.
 					2.User should able to remove the products from the cart by tapping on the Remove link from the Quantity column.
 					3.Count in the cart icon should get updated when a product is removed from the cart.
 					4.Subtotal of a product should get updated based on the increase or decrease in quantity of that product.
*/

#import "Deals_CommonFunctions.js"

function A_SMT_040() {

	startTestCase("A_SMT_040");
	getMainWindow();
	landingPageTilesVerification();
	prodQuantityCartAddRemove();
	
}
A_SMT_040();
