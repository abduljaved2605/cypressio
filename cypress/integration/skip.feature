Feature: Use the website to find restaurants
  So that I can order food
  As a hungry customer
  want to be able to find restaurants in my area



Scenario: 1 Search a Restaurants
    Given I want food in "136 Market Avenue, Winnipeg, MB, Canada"
    When I search for restaurants
    Then I should see some restaurants in "136 Market Avenue, Winnipeg, MB, Canada"


Scenario Outline: 2 Perform for different address
    Given I want food in "<NameOfResturent>"
    When I search for restaurants
    Then I should see some restaurants in "<NameOfResturent>"
    Examples:
    |NameOfResturent|
    |3421 Portage Ave Winnipeg, MB R3K 2C9|
    |60 Estate Dr, Scarborough, ON M1H 2Z1|
    |252 Bayly St W #1, Ajax, ON L1S 3V4|



Scenario: 3 Re-size the home page to check web site responsive and results are displayed
    Given i want to resize the home page window
    Given I want food in "136 Market Avenue, Winnipeg, MB, Canada"
    When I search for restaurants
    Then I should see some restaurants in "136 Market Avenue, Winnipeg, MB, Canada"

Scenario: 4 User should be able to click on login link
    Given i click on log in link
    When login pop up window is displayed
    Then verify the pop up window
    And close the pop up window

Scenario: 5 Validate links are present
    Given home page is displayed with the links for Need help,FR, login
    Then  verify the links for Need Help,FR, Log In
