chrome.app.runtime.onLaunched.addListener(function(){

  chrome.app.window.create('window.html',{

    'bounds':{
      'width':400,
      'height':500
    }

  });

});

chrome.app.runtime.onLaunched.addListener(function() {
  // normal launch initiated by the user, let's start clean.
  // note that this is not related to the persistent state, which is
  // appropriately handled in the window code.
  runApp(false);
});

chrome.app.runtime.onRestarted.addListener(function() {
  // if restarted, try to get the transient saved state
  runApp(true);
});
