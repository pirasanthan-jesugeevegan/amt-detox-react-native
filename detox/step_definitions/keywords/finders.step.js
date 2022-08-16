import * as selectors from '../mapping-importer';
import { Then, Given } from '@cucumber/cucumber';
import { expect, element, by, waitFor } from 'detox';

Given('I should see the {string} element', async (elementId) => {
  await expect(element(by.text('Step One'))).toBeVisible();
});
Then('I should see the {string} text', async (text) => {
  await element(by.id(selectors.slide)).swipe('left');
});
