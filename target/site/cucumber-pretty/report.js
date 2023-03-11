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
    },
    {
      "line": 1,
      "name": "@AllFeature"
    }
  ]
});
formatter.before({
  "duration": 20233037900,
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
  "keyword": "And "
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
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify that products in Chart Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove item Test.allTheThings() T-Shirt (Red)",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User already on CHECKOUT: YOUR INFORMATION page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User input \"Dona\" as firstName, \"Putra\" as lastName and \"16152\" as postalCode",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click continue",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User already on CHECKOUT: OVERVIEW page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click FINISH button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "CHECKOUT COMPLETE! and showing \"Thank you for your order!\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 545801300,
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
  "duration": 696311600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandPage()"
});
formatter.result({
  "duration": 124766400,
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
  "duration": 3247723900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 3137410800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 3116978000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket3()"
});
formatter.result({
  "duration": 3173935400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyListOfProduct()"
});
formatter.result({
  "duration": 3063289600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickRemoveItemBasket4()"
});
formatter.result({
  "duration": 3136930200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckOutButton()"
});
formatter.result({
  "duration": 3181262600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOut()"
});
formatter.result({
  "duration": 3090020100,
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
  "duration": 572953100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickContinueButton()"
});
formatter.result({
  "duration": 3191261900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyOverview()"
});
formatter.result({
  "duration": 3123041600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinishButton()"
});
formatter.result({
  "duration": 3265430300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your order!",
      "offset": 32
    }
  ],
  "location": "PurchaseSteps.verifyCheckOutComplete(String)"
});
formatter.result({
  "duration": 3064473200,
  "status": "passed"
});
formatter.after({
  "duration": 9638292100,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "As a user i want to login to website sauce demo",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllFeature"
    }
  ]
});
formatter.before({
  "duration": 8089531400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal login",
  "description": "",
  "id": "login;normal-login",
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
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 114291700,
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
  "duration": 933771400,
  "status": "passed"
});
formatter.after({
  "duration": 3925933500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"\u003cerrorMessage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 14,
      "id": "login;invalid-login;;1"
    },
    {
      "cells": [
        "DONA",
        "123",
        "Epic sadface: Username and password do not match any user in this service"
      ],
      "line": 15,
      "id": "login;invalid-login;;2"
    },
    {
      "cells": [
        "",
        "123",
        "Epic sadface: Username is required"
      ],
      "line": 16,
      "id": "login;invalid-login;;3"
    },
    {
      "cells": [
        "",
        "",
        "Epic sadface: Username is required"
      ],
      "line": 17,
      "id": "login;invalid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5626547000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllFeature"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"DONA\" as userName and input \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"Epic sadface: Username and password do not match any user in this service\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 96583100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DONA",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 41
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 656691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username and password do not match any user in this service",
      "offset": 16
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 2074299400,
  "status": "passed"
});
formatter.after({
  "duration": 3500086400,
  "status": "passed"
});
formatter.before({
  "duration": 5451748500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllFeature"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\" as userName and input \"123\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 149430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "123",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 547128600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 2076803200,
  "status": "passed"
});
formatter.after({
  "duration": 3543347800,
  "status": "passed"
});
formatter.before({
  "duration": 5331048600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid login",
  "description": "",
  "id": "login;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@AllFeature"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User input \"\" as userName and input \"\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User see error \"Epic sadface: Username is required\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 93430600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "",
      "offset": 37
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 524136600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Username is required",
      "offset": 16
    }
  ],
  "location": "LoginSteps.errorText(String)"
});
formatter.result({
  "duration": 2081299700,
  "status": "passed"
});
formatter.after({
  "duration": 3580095000,
  "status": "passed"
});
});