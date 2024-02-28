
describe('Unique Recipe Book Application - Level 2', () => {
  it('Users can add a new recipe and view it immediately', () => {
    cy.visit('/')

    // Add a new recipe
    const recipeName = `Recipe-${Cypress._.random(0, 1e6)}`
    const recipeDescription = `Description for ${recipeName}`
    cy.get('[data-test="recipe-name-input"]').type(recipeName)
    cy.get('[data-test="recipe-description-input"]').type(recipeDescription)
    cy.get('[data-test="submit-recipe"]').click()
    
    // Verify the new recipe is displayed
    cy.get(`[data-test="recipe-item"]`).contains(recipeName).parent().within(() => {
      cy.get('[data-test="recipe-description"]').should('have.text', recipeDescription)
    })
  })

  it('Users can search for a recipe by name', () => {
    cy.visit('/')

    // Add a recipe to ensure there is at least one to find
    const recipeName = `Recipe-${Cypress._.random(0, 1e6)}`
    cy.get('[data-test="recipe-name-input"]').type(recipeName)
    cy.get('[data-test="recipe-description-input"]').type(`Description for ${recipeName}`)
    cy.get('[data-test="submit-recipe"]').click()

    cy.get('[data-test="search-recipe-input"]').type(recipeName)
    cy.get('[data-test="search-recipe-submit"]').click()
    
    // Verify at least one result appears
    cy.get('[data-test="recipe-item"]').should('have.length.at.least', 1)
    cy.get('[data-test="recipe-item"]').each(($el) => {
      cy.wrap($el).find('[data-test="recipe-name"]').should('contain', recipeName)
    })
  })

  it('Users can filter recipes based on a keyword that is not part of the recipe name', () => {
    cy.visit('/')

    // Add a new recipe with a unique keyword in the description
    const recipeName = `Recipe-${Cypress._.random(0, 1e6)}`
    const keyword = `UniqueKeyword-${Cypress._.random(0, 1e6)}`
    const recipeDescription = `Description contains ${keyword}`

    cy.get('[data-test="recipe-name-input"]').type(recipeName)
    cy.get('[data-test="recipe-description-input"]').type(recipeDescription)
    cy.get('[data-test="submit-recipe"]').click()

    // Search by the unique keyword
    cy.get('[data-test="search-recipe-input"]').type(keyword)
    cy.get('[data-test="search-recipe-submit"]').click()
    
    // Verify that the recipe with the unique keyword in the description appears
    cy.get('[data-test="recipe-description"]').contains(keyword).parents('[data-test="recipe-item"]').should('exist')
  })
})
