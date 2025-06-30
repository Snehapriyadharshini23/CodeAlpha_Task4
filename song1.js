console.log("JS file loaded");
document.getElementById("button1").addEventListener("click", function() {
    window.location.href = "song3.html";
  });

 document.getElementById("button2").addEventListener("click", function() {
    // Show message on the screen
    document.getElementById("message").textContent = "🎵 Song is playing...";
});


  document.getElementById("button3").addEventListener("click", function() {
    window.location.href = "song2.html";
  });