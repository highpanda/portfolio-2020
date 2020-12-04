(function() {
    let $gallery = new SimpleLightbox('.imageBlock a', {});
})();

// https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.addEventListener('DOMContentLoaded', function () {


    let floatingImageParent = document.querySelectorAll('[data-js-floatingImage="parent"]');
    let floatingImage = document.querySelectorAll('[data-js-floatingImage="image"]');

    window.addEventListener('mousemove', function (e) {
        floatingImageParent.forEach(function(parent){
            var viewportPos = parent.getBoundingClientRect();

            let image = parent.querySelector('[data-js-floatingImage="image"]');
            const style = `transform: scale(0.5) translateX(${(e.clientX.map(0, window.innerWidth, viewportPos.left, viewportPos.right))-(image.width/2)}px) translateY(${(e.clientY.map(0, window.innerHeight, viewportPos.top, viewportPos.bottom))-(image.height/2)}px)`;
            // const style = `transform: scale(.5) translateX(0px) translateY(0px) `;

            // const style = `transform: translateX(${e.clientX-(image.width/2)}px) translateY(${e.clientY-(image.height/2)}px) scale(.5)`;
            image.setAttribute("style", style);
        });

    });

    floatingImageParent.forEach(function(parent){
        parent.addEventListener('mouseover', function(e){
            let image = parent.querySelector('[data-js-floatingImage="image"]');

            if (!image.classList.contains("floatingImage--hover")){
                image.classList.add("floatingImage--hover");
            }
        });
        parent.addEventListener('mouseout', function(e){
            let image = parent.querySelector('[data-js-floatingImage="image"]');

            if (image.classList.contains("floatingImage--hover")){
                image.classList.remove("floatingImage--hover");
            }
        });
    });

});