@CheckOut @AllFeature
Feature: CheckOut
  As a user i want to login to website sauce demo

  Scenario: Normal CheckOut
    Given User open the website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    And User already on landing page
    And User sort product by "Name (Z to A)"
    And User pick item Sauce Labs Onesie
    And User pick item Test.allTheThings() T-Shirt (Red)
    And User click Chart icon
    And User verify that products in Chart Page
    And User remove item Test.allTheThings() T-Shirt (Red)
    And User click CHECKOUT button
    And User already on CHECKOUT: YOUR INFORMATION page
    And User input "Dona" as firstName, "Putra" as lastName and "16152" as postalCode
    And User click continue
    And User already on CHECKOUT: OVERVIEW page
    And User click FINISH button
    Then  CHECKOUT COMPLETE! and showing "Thank you for your order!" text







