import * as selectors from '../mapping-importer';
import { Then, Given, When } from '@cucumber/cucumber';
import { expect, element, by, waitFor } from 'detox';

Given('I should see the {string} element', async (elementId) => {
  await expect(element(by.text('Step One'))).toBeVisible();
});
When('I should see the {string} text', async (text) => {
  await element(by.id(selectors.slide)).swipe('left');
});

Given('should enable swiping back and forth', async () => {
  await expect(element(by.text('Step One'))).toBeVisible();
  await element(by.id('slides')).swipe('left');
  await element(by.id('slides')).swipe('right');
  await expect(element(by.text('Step One'))).toBeVisible();
});

Given(
  'should render {string} and have a Button to click in the third slide',
  async (text) => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text(text))).toBeVisible();

    await element(by.text('Click here!')).tap();
    await expect(element(by.text('Clicked!'))).toBeVisible();
    await element(by.text('OK')).tap();
  }
);

Then(
  'should render {string} and change text in the fourth slide',
  async (text) => {
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await element(by.id('slides')).swipe('left');
    await expect(element(by.text(text))).toBeVisible();

    const docsInput = element(by.id('docsInput'));

    await expect(docsInput).toBeVisible();

    await docsInput.clearText();
    await docsInput.typeText('Maybe later!');

    await expect(docsInput).toHaveText('Maybe later!');
  }
);
