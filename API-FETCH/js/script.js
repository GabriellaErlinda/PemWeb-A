function getWeather() {
    const apiKey = '45f0ee90179f45f8ac042422230310';
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <div class="card">
                    <h2>Location</h2>
                    <p>Location: ${data.location.name}, ${data.location.country}</p>
                </div>
                <div class="card">
                    <h2>Temperature</h2>
                    <p>Temperature: ${data.current.temp_c}°C</p>
                </div>
                <div class="card">
                    <h2>Condition</h2>
                    <p>Condition: ${data.current.condition.text}</p>
                </div>
                <div class="card">
                    <h2>Humidity</h2>
                    <p>Humidity: ${data.current.humidity}%</p>
                </div>`;

            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

$('#search-text').on('keyup', function(e){
    if(e.keyCode == 13)
    { 
        searchMovies();
    }
})

$('#btn-search').on('click', function(e){
    searchMovies();
})

$('#movie-list').on('click', '#btn-details', function(e){
    $.ajax({
        url:'http://www.omdbapi.com/?i=tt3896198&apikey=a96cd0cc',
        type:'GET',
        dataType:'json',
        data:{
           // 'apikey' : 'a96cd0cc', //API Key
            'i' : $(this).data('id') //Parameter i untuk pencarian film berdasarkan id film  / omdbID
        },
        success: function(result){
            if(result.Response === "True"){
                $('.modal-body').html('');
                $('.modal-body').append(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="` + result.Poster + `" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                  <li class="list-group-item"><h4>`+ result.Title +`</h4></li>
                                  <li class="list-group-item">Released : `+ result.Released +`</li>
                                  <li class="list-group-item">Genre : `+ result.Genre +`</li>
                                  <li class="list-group-item">Writer : `+ result.Writer +`</li>
                                  <li class="list-group-item">Actors : `+ result.Actors +`</li>
                                  <li class="list-group-item">Production : `+ result.Production +`</li>
                                  <li class="list-group-item">Plot : `+ result.Plot +`</li>
                                </ul>
                            </div>
                        </div>
                    </div>    
                `);
            }
        }
    });
})


function searchMovies(){
    $.ajax({
        url:'http://www.omdbapi.com/?i=tt3896198&apikey=a96cd0cc',
        type:'GET',
        dataType:'json',
        data:{
           // 'apikey' : 'a96cd0cc', //API Key
            's' : $('#search-text').val() //Parameter s pencarian film berdasarkan judul
        },
        success: function(result){
            let movies = result.Search;
            $('#movie-list').html('');
            if(result.Response == "True"){
                $.each(movies, function(i, data){
                    $('#movie-list').append(`<div class="col-md-4 mb-3">
                        <div class="card" style="width: 18rem;">
                        <img src="`+ data.Poster +`" class="card-img-top" height="300px">
                        <div class="card-body"><h5 class="card-title">`+ data.Title +`</h5>
                        <p class="card-text">Year : `+ data.Year +`</p>
                        <a href="#" class="btn btn-primary" id="btn-details" data-id="`+ data.imdbID +`" 
                        data-toggle="modal" data-target="#exampleModal">Show Details</a>
                        </div></div></div>
                    `);
                })
            }else{
                $('#movie-list').append(`
                    <div class="col-sm-12 text-center">
                        <h1>`+ result.Error +`</h1>
                    </div>
                `);
            }
        }
    });

    $('#search-text').val("");
}