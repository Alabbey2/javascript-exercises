var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

var paramsForFlickr = {
    tags: 'pasila',
    tagmode: 'any',
    format: 'json',
};

function handleResponse(resp) {
        console.log(resp);
        document.getElementById('flickrLink')
        .innerText = resp.link;
        document.getElementById('flickrTitle')
        .innerText = resp.title;
}     

$.getJSON(
    flickrAPI, 
    paramsForFlickr,
    handleResponse,
);

$(document).ready(function(){
    $('search').on('click', function(){
        var searchTerm = $('#searchTerm').val();
        console.log(searchTerm);
        doAjaxCall();
    });
});
   