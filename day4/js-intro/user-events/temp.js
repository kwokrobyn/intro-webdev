function say(something) {
  console.log(something);
}
say('Hello');

function exec(func, arg) {
  func(arg);
}

// passing in an anon func directly into another func
exec((something) => {
  console.log(something);
}, 'Greetiings');

window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings');

// window.setTimeout(func, time, param, param);
