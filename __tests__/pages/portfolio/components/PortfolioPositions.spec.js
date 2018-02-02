// @flow
import { createShallow } from 'material-ui/test-utils';
import * as React from 'react';
import { initialSettings } from '../../../../app/reducers/settings';
import type { Ticker } from '../../../../app/reducers/ticker/types.d';
import PortfolioPositions from '../../../../app/pages/portfolio/components/PortfolioPositions';
import type { Portfolio } from '../../../../app/pages/portfolio/types/portfolio.d';

let shallow;

beforeAll(() => {
  shallow = createShallow();
});

test('Render portfolio positions', () => {
  const coinlist = {};
  const portfolio: Portfolio = {
    total: { BTC: 5, ETH: 10 },
    wallets: { BTC: 4, ETH: 8 },
    exchanges: { key: { BTC: 1, ETH: 2 } },
  };
  const ticker: Ticker = {
    BTC: { BTC: { PRICE: 1, CHANGEPCT24HOUR: 0 }, USD: { PRICE: 10000, CHANGEPCT24HOUR: 1.1 } },
    ETH: { BTC: { PRICE: 0.1, CHANGEPCT24HOUR: 2 }, USD: { PRICE: 1000, CHANGEPCT24HOUR: 5.2 } },
  };
  const settings = { ...initialSettings, fiatCurrency: 'USD' };

  const wrapper = shallow(
    <PortfolioPositions
      coinlist={coinlist}
      portfolio={portfolio}
      settings={settings}
      ticker={ticker}
    />);
  expect(wrapper).toMatchSnapshot();
});