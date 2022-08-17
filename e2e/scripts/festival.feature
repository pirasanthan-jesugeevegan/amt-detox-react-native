Feature: Festival Cards
    As a user
    I want to be able to see Festival
    So I can purchase ticket

    Scenario: Verify that the card elements exisit
        Given I should see the "festical_card" element
        Then I should see the "festical_img" element
        And I should see the "festical_title" element
        And I should see the "festical_content" element

    Scenario: Verify that the right data is deplayed on the card
        Given I should see the "festical_card" element
        Then the card contains the right data