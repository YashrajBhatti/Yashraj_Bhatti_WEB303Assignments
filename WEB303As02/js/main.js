// WEB303 Assignment 2

  // Function to load content from a given URL and animate the #content div
  function loadContent(url) {
    // Hide the #content div with animation
    $("#content").slideUp(400, function () {
      // Clear the existing content
      $(this).empty();
      
      // Load new content using AJAX
      $.ajax({
        url: url,
        dataType: "html",
        success: function (data) {
          // Insert the new content
          $("#content").html(data);
          
          // Show the #content div with animation
          $("#content").slideDown(400);
        },
        error: function () {
          // Handle error if content cannot be loaded
          $("#content").html("Error loading content.");
        },
      });
    })
  }

  // Event handlers for the links
  $("#prospect").on("click", function (e) {
    e.preventDefault();
    loadContent("./prospect.html");
  });

  $("#convert").on("click", function (e) {
    e.preventDefault();
    loadContent("./convert.html");
  });

  $("#retain").on("click", function (e) {
    e.preventDefault();
    loadContent("./retain.html");
  });