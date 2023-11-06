$(function() {
    $("form").on("submit", function(evt) {
    evt.preventDefault();
    let title = $("#title").val();
    let rating = $("#rating").val();

    let movieData = { title, rating };
    const HTMLtoAppend = createMovieDataHTML(movieData);

    $("#movie-table-body").append(HTMLtoAppend);
    $("form").trigger("reset");
  });
});

$('tbody').on("click", ".remove", function(){
    $(this).closest('tr').remove()
})

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="remove">
            Delete
          </button>
        </td>
      <tr>
    `;
  }