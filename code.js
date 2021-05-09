onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("button2", "click", function( ) {
  setScreen("screen1");
});
onEvent("button3", "click", function( ) {
  setScreen("screen3");
});
onEvent("button4", "click", function( ) {
  setScreen("screen4");
  setText("text_area9", "Thank you  " + getText("text_input1"));
});
onEvent("button5", "click", function( ) {
  setScreen("screen5");
});
onEvent("radio_button1", "click", function( ) {
  setScreen("screen6");
});
onEvent("radio_button6", "click", function( ) {
  setScreen("screen7");
});
onEvent("radio_button10", "click", function( ) {
  setScreen("screen8");
});
