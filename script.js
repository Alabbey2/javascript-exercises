var flickrAPI = '//api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';


function handleResponse(resp) {
    console.log('The request has been completed'); 
    console.log(resp);
    renderContent(resp);
}

function renderContent(resp) {
    $('#flickrLink').text(resp.link);
    $('#flickrTitle').text(resp.title);
    $('#image-wrapper').html('');
    
    var imageItems = resp.items,
        index = resp.items.length;

    for (var i = 0; i < resp.items.length; i++) {
        createImage(resp.items[i].media.m);
    }

}
function createImage(url) {
    $("#image-wrapper").append('<img src ="'+ url + '"></img>');
}

function doAjaxCall(searchTerm) {
    var paramsForFlickr = {
        tags: searchTerm,
        tagmode: 'any',
        format: 'json'
    };
    

    $.getJSON( 
        flickrAPI, 
        paramsForFlickr,
        handleResponse
    );
}

$(document).ready(function(){
    $("#search").on("click", function(){
        var searchTerm = $("#searchTerm").val();
        console.log(searchTerm);
        doAjaxCall(searchTerm);
        
        });
        $("#searchTerm").on("change", function(){
            var searchTerm = $("#searchTerm").val();
            console.log(searchTerm);
            doAjaxCall(searchTerm);
            
            });
        
});