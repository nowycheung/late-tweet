import schedule from 'node-schedule'

export const countTime = (delay) => {
  const now = new Date()

  return (new Date()).setSeconds(now.getSeconds() + delay)
}

export const scheduler = (delay, func) => schedule.scheduleJob(countTime(delay), func)

/*
  This is just for a simple demo and not suitable in real world case.

  Imagine if there are 1M tweets/second, then there would be 1M cron jobs created in the server.

  The ideal case might be save all the tweets into noSQL (like redis) by second.

  And using better task scheduler to broadcast all the tweets.
*/
