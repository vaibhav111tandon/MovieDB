$(document).ready(function() {
  $("#search").on("click", movieSEARCH);

  function movieSEARCH() {
    var value = $(".movieSearch").val();

    var url =
      "https://api.themoviedb.org/3/search/movie?api_key=f1acd0c27dbaf364321f29f428021e71&query=" +
      value +
      "";
    $.ajax({
      url: url,
      type: "GET",
      datatype: "json",
      success: function(data) {
        $("#movie").html("");
        for (var i = 0; i < data.results.length; i++) {
          var img_url =
            "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

          $("#movie").append(
            '<div id = "small" class = "text-center"><img id = "posterImage" src = ' +
              img_url +
              '></br><h2 id = "movieTitle">' +
              data.results[i].title +
              '</h2></br><h3 id = "movieOverview" class = "text-center"><span>Movie Overview</span> : ' +
              data.results[i].overview +
              "</br><h4><span>Ratings </span>: " +
              data.results[i].vote_average +
              '</h4><h4 id ="releaseDate" ><span>Release Date :</span> ' +
              data.results[i].release_date +
              ' </h4><h4 id = "adultCon"><span>Adult Content : </span>' +
              data.results[i].adult +
              "</h4></div>"
          );
        }
      },
      error: function() {
        alert("Oops...  Not in this database...");
      }
    });
  }
  $("#TopRatedTV").on("click", tvSearch);
  function tvSearch() {
    //$('input').hide();
    //$('#search').hide();
    var url =
      "https://api.themoviedb.org/3/tv/top_rated?api_key=f1acd0c27dbaf364321f29f428021e71&language=en-US";
    $.ajax({
      url: url,
      type: "GET",
      datatype: "json",
      success: function(data) {
        $("#movie").html("");
        for (var i = 0; i < data.results.length; i++) {
          var img_url =
            "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

          $("#movie").append(
            '<div id = "small" class = "text-center"><img id = "posterImage" src = ' +
              img_url +
              '></br><h2 id = "movieTitle">' +
              data.results[i].original_name +
              '</h2></br><h3 id = "movieOverview" class = "text-center"><span>Movie Overview</span> : ' +
              data.results[i].overview +
              "</br><h4><span>Ratings </span>: " +
              data.results[i].vote_average +
              '</h4><h4 id ="releaseDate" ><span>First Air Date :</span> ' +
              data.results[i].first_air_date +
              ""
          );
        }
      },
      error: function() {
        alert("Oops...  an error occured");
      }
    });
  }

  $("#TopRatedMovies").on("click", moSearch);
  function moSearch() {
    //$('input').hide();
    //$('#search').hide();
    var url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f1acd0c27dbaf364321f29f428021e71&language=en-US";
    $.ajax({
      url: url,
      type: "GET",
      datatype: "json",
      success: function(data) {
        $("#movie").html("");
        for (var i = 0; i < data.results.length; i++) {
          var img_url =
            "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

          $("#movie").append(
            '<div id = "small" class = "text-center"><img id = "posterImage" src = ' +
              img_url +
              '></br><h2 id = "movieTitle">' +
              data.results[i].title +
              '</h2></br><h3 id = "movieOverview" class = "text-center"><span>Movie Overview</span> : ' +
              data.results[i].overview +
              "</br><h4><span>Ratings </span>: " +
              data.results[i].vote_average +
              '</h4><h4 id ="releaseDate" ><span>Release Date :</span> ' +
              data.results[i].release_date +
              ' </h4><h4 id = "adultCon"><span>Adult Content : </span>' +
              data.results[i].adult +
              "</h4></div>"
          );
        }
      },
      error: function() {
        alert("Oops...  an error occured");
      }
    });
  }

  $("#upcomingMovies").on("click", upSearch);
  function upSearch() {
    //$('input').hide();
    //$('#search').hide();

    var url =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=f1acd0c27dbaf364321f29f428021e71&language=en-US";
    $.ajax({
      url: url,
      type: "GET",
      datatype: "json",
      success: function(data) {
        $("#movie").html("");
        for (var i = 0; i < data.results.length; i++) {
          var img_url =
            "https://image.tmdb.org/t/p/w500" + data.results[i].poster_path;

          $("#movie").append(
            '<div id = "small" class = "text-center"><img id = "posterImage" src = ' +
              img_url +
              '></br><h2 id = "movieTitle">' +
              data.results[i].title +
              '</h2></br><h3 id = "movieOverview" class = "text-center"><span>Movie Overview</span> : ' +
              data.results[i].overview +
              "</br><h4><span>Ratings </span>: " +
              data.results[i].vote_average +
              '</h4><h4 id ="releaseDate" ><span>Release Date :</span> ' +
              data.results[i].release_date +
              ' </h4><h4 id = "adultCon"><span>Adult Content : </span>' +
              data.results[i].adult +
              "</h4></div>"
          );
        }
      },
      error: function() {
        alert("Oops...  an error occured");
      }
    });
  }
});
