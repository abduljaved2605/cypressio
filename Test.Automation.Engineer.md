# SkipTheDishes Test Automation Engineer Recruitment Test

Thank you for taking the time to do our technical test. It consists of two parts:

  1. [A technical test](#technical-test)
  1. [A few technical questions](#technical-questions)

In order to avoid bounced emails we would like you to submit your results by uploading the relevant zip file to a shared Google Drive folder. In order to obtain the URL for this folder, please supply your Gmail or Google-based email address to either your recruitment contact or the SkipTheDishes member of staff who assigned you the test.

Please make this a **single** zip file named `{yourname}-{role-applied-for}.zip` containing:

  1. A single markdown file with the answers to the technical questions
  1. A folder containing the technical test (please try not to include files like library dependencies)

## Technical Test

SkipTheDishes's consumer-facing website is available at [www.skipthedishes.com](https://www.skipthedishes.com/), which you can use to find restaurants in an address area.

The Technical test consists of two tasks:

  1. Write the step definitions for the scenario below.
  1. Add two more scenarios, with corresponding step definitions, which you feel would enhance the test coverage of the site.

_If you are based internationally, you may have to use a more local website to your current location due to IP restrictions, for example [www.just-eat.co.uk](https://www.just-eat.co.uk/) in UK, [www.menulog.com.au](https://www.menulog.com.au/) in Australia or [www.just-eat.es](https://www.just-eat.es/) in Spain. Just choose an address that matches those locations._

### Scenario to Automate

```
Feature: Use the website to find restaurants
  So that I can order food
  As a hungry customer
  I want to be able to find restaurants in my area

Scenario: Search for restaurants in an area
  Given I want food in "136 Market Avenue, Winnipeg, MB, Canada"
  When I search for restaurants
  Then I should see some restaurants in "136 Market Avenue, Winnipeg, MB, Canada"
```

### Platform Choice

You can create step definitions using any language or framework you are experienced with.

### Task requirements

Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met:

  * Please complete the two tasks described above.
  * You should provide clear instructions on your test setup and how to execute your tests. The clarity and precision of these instructions - and the ease with which the interviewers can execute them - will be a key part of the assessment. Please create a README file detailing said instructions. Please also use this file for listing any additional comments or observations you might want to share about your submission.


#######

1. Scenarios : Completed

Scenario: 1 
Issue observed : Some times after entering the address in text field , drop down list doesn't appear , it crashes the application

2. Scenario : 2 
I this same scenario 1 is used with different restaurants address
In this Scenario outline is used .
Two scenarios are passing and third scenario is failing because of address search feature i feel it should be improved.

3. Scenario 3: Resize the browser window to check responsive design
The scenario is failing is because , if the screen is re-sizes , functionality is changed.




## Technical questions

Please answer the following questions in a markdown file called `Answers to technical questions.md`.

  1. How long did you spend on the technical test? What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.
	- Reporting and integrating with COnteneous delivery ( Jenkins )
	- Visual testing using appli tool
	

 1. What do you think is the most interesting trend in test automation?
  -Automation in the cloud , 
  -Test robot
  - AI testing 
  - Ethical and penetration testing
  - Visual testing
  - Performance Testting
  
  1. How would you implement test automation in a legacy application? Have you ever had to do this?
  
	The apporach to implement Automation for legacy application :
	- Prioritize the critical areas of the application
	- Biger picture of the application to identify specific areas which needs attention
	- Check if there are manual test cases exsists and create regression test cases for each area
	- Budget time to create test scripts for each area
	- Execute test suite at least once a day in contenious intigration
	- Identify most critical features needs to be automated and come up with estimates
  
  1. How would you improve the customer experience of the SkipTheDishes website?
	- Fix bugs while performing automation
	- Consult with BA to have Bot assisantant to take orders
	- Improve loading contents faster while scrolling downn the page
	- If we resize the page , no mobile menu is displayed
	- Can have accessibility implementation so that disabled people should be aboe to order online
	
	Observations:
	1. Some times the website is slow , it takes more than 10 seconds to load the page
	
	
	
  1. Please describe yourself using JSON.
  
  
{
"name": "Subhan",
"lastname": "Abdul",

"livesin": "Toronto",
"passions": [
"Programming",
"Automation",
"Breaking code",

"Teaching others"
],
"interests": [
"Education",
"Marketing",
"Trvael"
],

"dreams": [
"To be a team player to make this world beautiful!"
],

"believes": [
"Being united can do wonders"
]
}


#### Thanks for your time, we look forward to hearing from you!
- The [SkipTheDishes](https://www.skipthedishes.com/jobs) team
