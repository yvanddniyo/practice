/**
 * Course of the Udacity
 */
const richard = { status: "He's looking a job"}
const agent =  new Proxy(richard, {})
console.log(agent.status);