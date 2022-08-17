import { Given } from '@cucumber/cucumber';
import { expect, element, by } from 'detox';
import { fetchAllFestival } from '../../../service/getAllFestival';

const TIMEOUT = 5000;

Given(
  'the card contains the right data',
  async () => {
    const result = await fetchAllFestival();

    await expect(element(by.text(result.results[0].name)));
    await element(
      by
        .id('festical_content')
        .and(
          by.text(
            result.results[0]?.min_price === null
              ? 'Join Mail'
              : `From ${result.results[0]?.min_price?.currency}${result.results[0]?.min_price?.amount}`
          )
        )
    );
  },
  TIMEOUT
);
