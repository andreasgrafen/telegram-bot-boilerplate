module.exports = {

  start: `#YOUR#MESSAGE#`,

  onError: {
    unknown: `Sorry. I don't recognise this command.`,
    failure: `Oops. Something went wrong while executing the command.`,
    timeout: `Oh no! The API didn't respond in time.`
  }

}
