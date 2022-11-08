var trackList = [];









function loadAllTracks() {
  var item = document.getElementById("searchByItem").value;

  console.log(item);
  var genre = document.getElementById("searchByGenre").value;
  console.log(genre);

  var ID = document.getElementById("searchByID").value;
  console.log(ID);

  axios.get(`http://localhost:5501/api/music?item=${item}&genre=${genre}&ID=${ID}`).then(function (response) {

    console.log(ID);
    let htmlData = '';
    response.data.forEach(element => {
      htmlData +=
        `<tr>
               <td> ${element.ID}</td>     
               <td> ${element.genre}</td>     
               <td> ${element.item}</td>     
               <td> <input type="button" onclick="addToFavorit(${element.ID})" value="add to favorit" /></td>     
      </tr>`;
    });
    console.log(htmlData);
    var resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = htmlData;
  }); 
}
function addToFavorit(id) {
  var data = { ID: id }
  axios.post('http://localhost:5501/api/favorit/addToMyFavorits', data).then(function (response){console.log(response.data),GetMyPlayList();});
  
}
  function GetMyPlayList() {
    axios.get(`http://localhost:5501/api/favorit`).then(function (response) {

      console.log(response);
      let htmlData = '';
      response.data.forEach(element => {
        htmlData +=
          `<tr>
       <td> ${element.ID}</td>     
       <td> ${element.genre}</td>     
       <td> ${element.item}</td>     
       <td> <input type="button" onclick="addToFavorit(${element.ID})" value="add to favorit" /></td>   
       <td> <input type="button" onclick="removeFromMyFavoritsFavorit(${element.ID})" value="delete from favorit" /></td>  
          </tr>`;
      });
      var resultArea = document.getElementById("favoritArea");
      resultArea.innerHTML = htmlData;
    });
  }

  

loadAllTracks();
GetMyPlayList();