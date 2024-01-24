const result = document.getElementById("result");
const search = document.getElementById("searchicon");
const searchinput = document.getElementById("searchinput");
const searchbtn = document.getElementById("searchbtn");
const searchresult = document.getElementById("searchresult");
const searchedg = document.getElementById("searchedgames");
const pgames = document.getElementById("pgames");
const exits = document.getElementById("exits");
const sinputs = document.getElementById("sinputs");




window.addEventListener("load", function(){



    var xhr = new XMLHttpRequest();

    xhr.open("GET", 'https://api.rawg.io/api/games?key=a558ae070c3d4255af89afb503f957c3', true);

    xhr.onload = function(){

        if(xhr.status === 200){

            var data = JSON.parse(xhr.responseText);
            console.log(data);

            var games = data.results;

            var output = "";


            for(var i in games){

                var platformsOutput = "";
                for (var j in games[i].platforms) {
                    platformsOutput += `<p>${games[i].platforms[j].platform.name}.</p>`;
                }

                var imageUrl = 'none.jpg';
                if (games[i].short_screenshots && games[i].short_screenshots.length > 0) {
                    imageUrl = games[i].short_screenshots[0].image || 'none.jpg';
                }

                
                output += `
                <div id="elements-container" class="elements-container faded">
                <div class="elements">
                    <div class="spic">
                        <img src=${imageUrl} class="screenp1" alt="Game Screenshot">
                    </div>
                    <div class="spics">
                        <img src=${games[i].short_screenshots[1]?.image || 'none.jpg'} class="screenps" alt="Game Screenshot">
                        <img src=${games[i].short_screenshots[2]?.image || 'none.jpg'} class="screenps smallhide" alt="Game Screenshot">
                        <img src=${games[i].short_screenshots[3]?.image || 'none.jpg'} class="screenps" alt="Game Screenshot">
                    </div>
                    <div class="des">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic, saepe ab nesciunt laboriosam eius cupiditate pariatur at distinctio dolor assumenda doloremque quidem, fugiat neque illum. Hic ratione corrupti voluptatum officia culpa impedit repellendus eaque deleniti consectetur eius, placeat autem suscipit voluptas quod dolor, in maxime non facilis totam voluptate!</p>
                    </div>
                    <div class="title">
                        <h3>${games[i].name}</h3>
                    </div>
                    <div class="words">
                    <div class="rating">
                        <div class="text-r">
                            <h4>Rating</h4><p>${games[i].rating}</p>
                        </div>
                    </div>
                    <div class="released">
                        <div class="text-s">
                            <h4>Released</h4><p>${games[i].released}</p>
                        </div>
                    </div>
                    </div>
                    <div class="platforms">
                        <div class="text-p">
                            <h4>Platforms</h4>
                            <div class="platforms-gird">
                                <p>${platformsOutput}</p>
                            </div>
                        </div>
                    </div>
                 
                    <div class="smalldiv hideing"><img src="bg.jpg"></div>
                </div>
            </div>
                `;

            }


            result.innerHTML = output;
            result.classList.add("show");

            


            
        }
    }

    xhr.send();
})



search.addEventListener("click", function(){

    sinputs.classList.toggle("sinputs-active");
    exits.classList.remove("hide");
    search.classList.add("hide");
    console.log("oke")
})
exits.addEventListener("click", function(){

    sinputs.classList.toggle("sinputs-active");
    searchedg.classList.remove("sen-active");
    result.classList.remove('hide');
    pgames.classList.remove("san-active");
    exits.classList.add("hide");
    search.classList.remove("hide");
    scrollToTop();
})



searchbtn.addEventListener("click", function () {
    if (searchinput.value != "") {
        searchedg.classList.add("sen-active");
        pgames.classList.add("san-active");
        setTimeout(function () {
            result.classList.add('hide');
        }, 1100);



        var xhr = new XMLHttpRequest();
        var searchUrl = `https://api.rawg.io/api/games?key=a558ae070c3d4255af89afb503f957c3&search=${searchinput.value.toLowerCase()}`;

        xhr.open("GET", searchUrl, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                var sdata = JSON.parse(xhr.responseText);
                console.log(sdata);

                var sgames = sdata.results;

                var outputs = "";

                for (var i in sgames) {
                    var platformsOutput = "";
                    for (var j in sgames[i].platforms) {
                        platformsOutput += `<p>${sgames[i].platforms[j].platform.name}.</p>`;
                    }


                    var imageUrl = 'none.jpg';
                    if (sgames[i].short_screenshots && sgames[i].short_screenshots.length > 0) {
                        imageUrl = sgames[i].short_screenshots[0].image || 'none.jpg';
                    }

                    outputs += `
                        <div id="elements-container" class="elements-container faded">
                            <div class="elements">
                                <div class="spic">
                                    <img src=${imageUrl} class="screenp1" alt="Game Screenshot">
                                </div>
                                <div class="spics">
                                    <img src=${sgames[i].short_screenshots[1]?.image || 'none.jpg'} class="screenps" id="hidding" alt="Game Screenshot">
                                    <img src=${sgames[i].short_screenshots[2]?.image || 'none.jpg'} class="screenps smallhide" alt="Game Screenshot">
                                    <img src=${sgames[i].short_screenshots[3]?.image || 'none.jpg'} class="screenps" alt="Game Screenshot">
                                </div>
                                <div class="des">
                                        <h4>Description</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic, saepe ab nesciunt laboriosam eius cupiditate pariatur at distinctio dolor assumenda doloremque quidem, fugiat neque illum. Hic ratione corrupti voluptatum officia culpa impedit repellendus eaque deleniti consectetur eius, placeat autem suscipit voluptas quod dolor, in maxime non facilis totam voluptate!</p>
                                </div>
                                <div class="title">
                                    <h3>${sgames[i].name}</h3>
                                </div>
                                    <div class="words">
                                    <div class="rating">
                                        <div class="text-r">
                                            <h4>Rating</h4><p>${sgames[i].rating}</p>
                                        </div>
                                    </div>
                                    <div class="released">
                                        <div class="text-s">
                                            <h4>Released</h4><p>${sgames[i].released}</p>
                                        </div>
                                    </div>
                                 </div>
                                <div class="platforms">
                                    <div class="text-p">
                                        <h4>Platforms</h4>
                                        <div class="platforms-gird">
                                            <p>${platformsOutput}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="smalldiv hideing"><img src="bg.jpg"></div>
                            </div>
                        </div>
                    `;
                }

                searchresult.innerHTML = outputs;
            }
        }

        xhr.send();

        searchinput.value = "";
    }
});


function scrollToTop() {
    return new Promise(resolve => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        resolve();
      }, 1500);
    });
  }
  

