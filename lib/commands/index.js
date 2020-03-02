'use strict'

module.exports = [
  require('./watch_liquidations'),
  require('./watch_candles'),
  require('./watch_trades'),
  require('./watch_order_book'),
  require('./margin_info'),
  require('./transfer'),
  require('./balances'),
  require('./positions'),
  require('./order-history'),
  require('./trade-history'),
  require('./close_positions'),
  require('./claim_positions'),
  require('./submit_order'),
  require('./currencies'),
  require('./tickers'),
  require('./cancel'),
  require('./orders'),
  require('./status')
]