(function() {
    let $gallery = new SimpleLightbox('.imageBlock a', {});
})();

// https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.addEventListener('DOMContentLoaded', function () {


    let name = document.querySelector('[data-js="name"]');

    // https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element-relative-to-the-browser-window#:~:text=getBoundingClientRect()%20is%20a%20javascript,relative%20to%20viewport%20of%20window.&text=These%20specifiy%20the%20position%20of,nearest%20parent%20that%20has%20layout.
    let nameXPos = window.scrollX + name.getBoundingClientRect().left // X
    let nameYPos = window.scrollY + name.getBoundingClientRect().top // Y


    let profile = document.querySelector('[data-js="profile"]');

    window.addEventListener('mousemove', function (e) {
        const style = `left: ${e.pageX.map(0, nameXPos, -100, 0)}px; top: ${e.pageY.map(0, nameYPos, 0, -300)}px`;
        profile.setAttribute("style", style);
    });

    name.addEventListener('mouseover', function(e){
            if (!profile.classList.contains("headline__image--hover")){
                profile.classList.add("headline__image--hover");
            }
    });
    name.addEventListener('mouseout', function(e){
        if (profile.classList.contains("headline__image--hover")){
            profile.classList.remove("headline__image--hover");
        }
    });

});