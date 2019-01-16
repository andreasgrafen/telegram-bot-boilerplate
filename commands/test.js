/** basic command setup
 *  ===================
 *
 *  Every Command has to export a function called execute.
 *  This function takes two parameters:
 *  – the resolve function from the command handler
 *  – the arguments provided by the user (optional)
 *
 *  The execute function has to return an object including:
 *  – the type of response; text, image, gif, audio, video
 *  – the content the bot returns to th user
 *  The return statement has to be wrapped inside the resolve function
 */



module.exports = {
  execute (res, args) {

    return res({
      type: 'text',
      content: `I'm just a simple test command. c:`
    })

  }
}
