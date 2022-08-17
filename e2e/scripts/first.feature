Feature: Initial Cucumber Test
  Try cucumber with detox

  Scenario: Test Cucumber
    Given I should see the "welcome" element
    Then I should see the "Open up App.js to start working on your app!" text

  Scenario: Testing slider
    Given should enable swiping back and forth
    And should render 'Debug' and have a Button to click in the third slide
    Then should render 'Learn More' and change text in the fourth slide