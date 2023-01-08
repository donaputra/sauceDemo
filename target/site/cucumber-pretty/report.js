$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "CheckOut",
  "description": "As a user i want to login to website sauce demo",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CheckOut"
    }
  ]
});
formatter.before({
  "duration": 8806025300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal CheckOut",
  "description": "",
  "id": "checkout;normal-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort product by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User pick item Sauce Labs Onesie",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User pick item Test.allTheThings() T-Shirt (Red)",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click Chart icon",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify that products in Chart Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User remove item Test.allTheThings() T-Shirt (Red)",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User already on CHECKOUT: YOUR INFORMATION page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User input \"Dona\" as firstName, \"Putra\" as lastName and \"16152\" as postalCode",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User already on CHECKOUT: OVERVIEW page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click FINISH button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "CHECKOUT COMPLETE! and showing \"THANK YOU FOR YOUR ORDER\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 532211300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 632151900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandPage()"
});
formatter.result({
  "duration": 505602200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 22
    }
  ],
  "location": "PurchaseSteps.sortProduct(String)"
});
formatter.result({
  "duration": 3338575100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 3108210500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 3104641900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket3()"
});
formatter.result({
  "duration": 3198472300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyListOfProduct()"
});
formatter.result({
  "duration": 3066408700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickRemoveItemBasket4()"
});
formatter.result({
  "duration": 3088381300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckOutButton()"
});
formatter.result({
  "duration": 3113307300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOut()"
});
formatter.result({
  "duration": 3066394200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dona",
      "offset": 12
    },
    {
      "val": "Putra",
      "offset": 33
    },
    {
      "val": "16152",
      "offset": 57
    }
  ],
  "location": "PurchaseSteps.inputCredential(String,String,String)"
});
formatter.result({
  "duration": 3465904200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickContinueButton()"
});
formatter.result({
  "duration": 3184824500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyOverview()"
});
formatter.result({
  "duration": 3107935700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinishButton()"
});
formatter.result({
  "duration": 3121173400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutComplete()"
});
formatter.result({
  "duration": 3075294300,
  "status": "passed"
});
formatter.after({
  "duration": 1305593400,
  "status": "passed"
});
});