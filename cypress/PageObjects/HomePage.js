const SEARCH_INPUT_FIELD_ELEMENT = "input[class^='c51']"
const ADDRESS_SEARCH_LIST_ELEMENT = '.c51108'
const ICON_SEARCH_MAP_ELEMENT = '#skipMapAddress > div > div > div:nth-child(1) > div:nth-child(3)'
const NEED_HELP_BUTTON_ELEMENT = '.MuiButton-label-168 > .jss60'
const FRENCH_BUTTON_ELEMENT = '.MuiButton-label-199 > .jss60'
//const LOGIN_BUTTON_ELEMENT ='.jss54'
const LOGIN_BUTTON_ELEMENT='.MuiButton-label-230 > .c5112'
const RESTAURANTS_NEARBY_BUTTON = '.MuiButton-label-360'
const LOGIN_POP_UP_WINDOW ='.c5186 > .MuiTypography-root'
const CLOSE_LOGIN_POP_UP_BUTTON= '.c5184 > .MuiButtonBase-root > .MuiIconButton-label > .c513'



export class HomePage
{
    openskipthedisheswebsite(url)
    {
        cy.visit(url)
    }

    enterResturantAddress(address)
   {
        cy.get(SEARCH_INPUT_FIELD_ELEMENT,{timeout:9000}).type(address)
    }

    performSearch()
    {
        cy.get(SEARCH_INPUT_FIELD_ELEMENT,{timeout:9000}).type("{enter}")
        cy.get(ADDRESS_SEARCH_LIST_ELEMENT,{timeout:9000}).click()
      
     }

    assertTovalidateMap()
    {
           cy.get(ICON_SEARCH_MAP_ELEMENT,{timeout:9000}).should('be.visible')
             }

    linksarePresent()
    {
        cy.get(NEED_HELP_BUTTON_ELEMENT)
        cy.get(FRENCH_BUTTON_ELEMENT)
        cy.get(LOGIN_BUTTON_ELEMENT).should('be.visible')
      //  cy.get()
    }

    validatelinks()
    {
        cy.get(NEED_HELP_BUTTON_ELEMENT).should('be.visible')
        cy.get('.MuiButton-label-199 > .jss60').should('be.visible')
        cy.get('.jss54').should('be.visible')
        cy.get('.MuiButton-label-360').should('be.visible')
    }

    changeViewPort(x=320,y=568)
    {
        cy.viewport(x, y);
    }

    clickOnLoginButton()
    {
        cy.get(LOGIN_BUTTON_ELEMENT,{timeout:12000}).click()

    }

    loginPopUpWindow()
    {
        cy.get(LOGIN_POP_UP_WINDOW,{timeout:9000})
    }

    verifyLoginPopUpWindow()
    {
        cy.get(LOGIN_POP_UP_WINDOW,{timeout:9000}).should('be.visible')

    }

    closeLoginPopUpWindow()
    {
        cy.get('.c5184 > .MuiButtonBase-root > .MuiIconButton-label > .c513').click()

    }
}
