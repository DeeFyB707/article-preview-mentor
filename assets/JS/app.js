let btn = document.getElementById('shareBtn');


let desktopShareBox = document.querySelector('.shareBox.d-lg-block');
let mobileShareBox = document.querySelector('.shareBox.d-lg-none');


btn.onclick = function (event) {
    event.stopPropagation();


    if (window.innerWidth >= 992) {

        toggleVisibility(desktopShareBox);
    } else {

        toggleVisibility(mobileShareBox);
    }
};


window.onclick = function () {
    hideShareBoxes();
};


desktopShareBox.onclick = function (event) {
    event.stopPropagation();
};

mobileShareBox.onclick = function (event) {
    event.stopPropagation();
};


function toggleVisibility(box) {
    if (box.style.visibility === 'visible') {
        box.style.visibility = 'hidden';
    } else {
        box.style.visibility = 'visible';
    }
}


function hideShareBoxes() {
    desktopShareBox.style.visibility = 'hidden';
    mobileShareBox.style.visibility = 'hidden';
}
