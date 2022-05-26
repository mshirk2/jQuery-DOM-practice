let moviesList = [];
let listID = 0;

$(function(){
    $("#movie-form").on("submit", function(evt){
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieData = {title, rating, listID};
        const dataToAppend = appendToDOM(movieData);
        moviesList.push(movieData);
        listID++;
        $("tbody").append(dataToAppend);
    });

    $("tbody").on("click", "button", function(evt){
        let itemToRemove = moviesList.findIndex(movie => movie.listID === +$(evt.target).data("deleteID"));
        moviesList.splice(itemToRemove, 1)
        $(evt.target).closest("tr").remove();

    });
});

function appendToDOM(data){
    return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button data-delete-id=${data.listID}>
          Delete
        </button>
      </td>
    <tr>
  `;
}