//When clicked, button will produce html text
function enterText() {
  var text1 = 'Welcome '
  var text2 = 'San Diego!'
  var text3 = text1 + text2;

  document.getElementById('enterText').innerHTML = text3;
};
