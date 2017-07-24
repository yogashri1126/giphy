  var topics = [];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayTopicInfo() {

        var subject = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + subject+ "&apikey=d78ea943a55249eaa0fd9edb3641d0f3";
        console.log(this)
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the movie
          var topicDiv = $("<div class='topix'>");

          // Storing the rating data
          var ratings;
          var imagez;
          
          console.log(ratings)
          console.log(response)

          // Creating an element to have the rating displayed

          // Storing the release year
          var released = response.Released;

          // Displaying the rating
          for(i=0; i<25; i++){
            ratings=response.data[i].rating
            imagez= response.data[i].bitly_gif_url
            var pOne = $("<p>").text("Rating: " + ratings);
            var pTwo = $("<img>").attr("src", imagez);
            topicDiv.append(pOne);
            topicDiv.append(pTwo);
            console.log(imagez)
          }
          
          // Creating an element to hold the release year
          

          // Displaying the release year
          // movieDiv.append(pTwo);

          // Storing the plot
          // var plot = response.Plot;

          // // Creating an element to hold the plot
          // var pThree = $("<p>").text("Plot: " + plot);

          // Appending the plot
          //topicDiv.append(pThree);

          // // Retrieving the URL for the image
          // var imgURL = response.Poster;

          // // Creating an element to hold the image
          // var image = $("<img>").attr("src", imgURL);

          // // Appending the image
          // topicDiv.append(image);

          // Putting the entire movie above the previous movies
          $("#resultz").append(topicDiv);
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("topix");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where a movie button is clicked
      $("#add-topic").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var topic = $("#topic-input").val().trim();

        // Adding movie from the textbox to our array
        topics.push(topic);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".topix", displayTopicInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();