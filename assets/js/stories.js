$( document ).ready(function() {
  $.getJSON( "http://crissic.benmordue.co.uk:8000/api/stories?_limit=20&_order[comments]=desc", function( data ) {
    var html_rows = [];
    var json_rows = data.json;

    $.each( json_rows, function( index, val ) {
      html_rows.push("<tr><td>" + index + "</td><td>" + val.hnurl + " (<a href='" + val.url + "'>article</a>)</td><td>" + val.added + "</td><td><a href='" + val.hnurl + "'>" + val.comments + "</a></td><td>" + val.starred + "</td></tr>\n");
    });
    $("#results_table").append(html_rows);
  })
  .fail(function() {
    $("#results_table").append('<tr><td colspan="5">No results loaded</td></tr>');
    console.log('Failed to fetch results');
  })
});