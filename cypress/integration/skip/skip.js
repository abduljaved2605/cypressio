

import { Given, when, Then, When } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../PageObjects/HomePage";

beforeEach(function() {
  cy.visit('/');
});

const url = '/'
const homePage = new HomePage()

Given(/^I want food in "([^"]*)"$/, address => {
       
        homePage.enterResturantAddress(address)
   })

  when ('I search for restaurants', () => {
       homePage.performSearch()
    
  })

  Then (/^I should see some restaurants in "([^"]*)"$/,verifyAddress =>
  {
    homePage.assertTovalidateMap()
    
  })

  Given('i want to resize the home page window', () => {
    homePage.changeViewPort()
 
    })
  
  Given('i click on log in link', () => {

    homePage.clickOnLoginButton()
    
   
    })
  When('login pop up window is displayed', () => {
    
     homePage.loginPopUpWindow()
        })
  
  Then('verify the pop up window', () => {

        homePage.verifyLoginPopUpWindow()       
          })

  And('close the pop up window', () => {
      
        homePage.closeLoginPopUpWindow()
           })

 // Then('verify the pop up window', () => {
   //   cy.get('.c5186 > .MuiTypography-root',{timeout:9000}).should('be.visible')
               
     //   })
        
  Given('home page is displayed with the links for Need help,FR, login', () => {
  //  const hompage = new HomePage()
    homePage.linksarePresent()
            })
          
    Then('verify the links for Need Help,FR, Log In', () => {
    
    homePage.validatelinks()
    })