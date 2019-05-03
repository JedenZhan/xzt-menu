const swiperItemWidth = window.innerWidth,
    swiperUl = document.getElementById('swiperList'),
    swiperList = swiperUl.children;

let curr = 0, // 记录当前li的索引
    time = null, // 存放定时器标识
    flag = true,
    liWidth = swiperItemWidth,
    liLength = swiperList.length;
console.log(swiperList);



function animation(offset, swiperListLength) {
    let newLeft = parseFloat(swiperUl.style.left) + offset,
        time = 300,
        interval = 10,
        speed = offset / (time / interval);


    function go() {
        if (parseFloat(swiperUl.style.left) > newLeft) {
            swiperUl.style.left = parseFloat(swiperUl.style.left) + speed + 'px';
            setTimeout(go, interval);
            // debugger
        } else {
            swiperUl.style.left = newLeft + 'px';
            if (parseFloat(swiperUl.style.left) < (swiperListLength - 2) * offset) {
                swiperUl.style.left = offset + 'px';
            }
        }
    }
    go()
}

function move() {
    if (true) {
        curr++;
        swiperUl.className = "swiper-container trans";
        swiperUl.style.left = - curr * liWidth + "px";
        time = setTimeout(() => {
            requestAnimationFrame(move);
        }, 2000);
    }
}


function goNext() {
    let swiperListLength = swiperList.length,
        offset = -swiperItemWidth;
    animation(offset, swiperListLength)
    console.log(swiperUl.style.left)
}

function swiper() {
    setInterval(() => {
        goNext();
    }, 3000);
}

swiperUl.addEventListener('transitionend', function () {
    if (curr >= liLength - 1) {
        swiperUl.className = "swiper-container";
        swiperUl.style.left = 0 + "px";
        curr = 0;
    }
}, false);

function loaded() {
    // 给每一个照片加上width
    swiperUl.style.left = -swiperItemWidth + 'px';
    for (let i = 0, len = swiperList.length; i < len; i++) {
        console.log(swiperList[i]);
        swiperList[i].style.width = swiperItemWidth + 'px';
    }

    // swiper();
    flag = true;
    setTimeout(() => {
        requestAnimationFrame(move);
    }, 2000);

}

window.onload = loaded()