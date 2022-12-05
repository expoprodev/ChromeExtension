
// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener((text) => {
  // Encode user input for special characters , / ? : @ & = + $ #
  var newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
  chrome.tabs.create({ url: newURL });
});
