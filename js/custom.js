$(document).ready(function(){
    setTimeout(function(){
        $("#alert").remove();
    }, 5000 ); // 5 secs
    $('.image-display').mkinfinite({
        maxZoom: 1.1,
        animationTime: 4000,
        imagesRatio: (940 / 720),
        isFixedBG: true,
        zoomIn: true,
        imagesList: new Array(
            './rbcimages/Slideshow/MIM_9072-1.JPG',
            './rbcimages/Slideshow/MIM_9083.JPG',
            './rbcimages/Slideshow/MIM_9149.JPG',
            './rbcimages/Slideshow/MIM_8973.JPG',
            './rbcimages/Slideshow/MIM_8489.JPG',
            './rbcimages/Slideshow/MIM_8672.JPG'
        )
    });
})
