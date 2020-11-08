$(document).ready(() => {
    //form the table from the json
    let songtable = document.getElementById("songtable");
    $.get("https://trmasse.github.io/comp20/jsonsetlist/setlist.json", function(data) {
        string_list = JSON.stringify(data);
        data.forEach(song => {
            outstr = "<tr><td>";
            outstr += song.title + "</td>" +
                      "<td>" + song.artist + "</td>" +
                      "<td>";
                      song["genre"].forEach(genre => {
                          outstr += genre + ", ";
                      })
            outstr = outstr.substr(0, outstr.length -2);
            outstr += "</td><td>" + song["year"] + "</td></tr>";
            $(songtable).append(outstr);
        })
    })

    //filter on click based on select
    $('#filterb').on('click', () => {
        var genre_selected = $('#genres').val();
        if (genre_selected == "all") {
            $('#songtable tr').show();
        } else {
            $("#songtable tr").filter(function() {
                $(this).toggle($(this).text().indexOf(genre_selected) > -1)
            })
        }
        $('#headers').show();

    })
});
