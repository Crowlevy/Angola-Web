document.getElementById('watchNow').addEventListener('click', function() {
    document.getElementById('works').classList.remove('hidden')
    document.getElementById('works').scrollIntoView({ behavior: 'smooth' })
});

function showFullImage(imageSrc) {
    var imageOverlay = document.getElementById('image-overlay')
    var fullImage = document.getElementById('full-image')
    fullImage.src = imageSrc
    document.body.style.overflow = "hidden"
    imageOverlay.style.display = 'flex'
}

function closeImageOverlay() {
    var imageOverlay = document.getElementById('image-overlay')
    document.body.style.overflow = "auto"
    imageOverlay.style.display = 'none'
}
