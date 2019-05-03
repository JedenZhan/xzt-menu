const swiperItemWidth = window.innerWidth,
    swiperUl = document.getElementById('swiperList'),
    swiperList = swiperUl.children;

let curr = 0, // 记录当前li的索引
    time = null, // 存放定时器标识
    flag = true,
    liWidth = swiperItemWidth,
    liLength = swiperList.length;
console.log(swiperList);



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

    flag = true;
    setTimeout(() => {
        requestAnimationFrame(move);
    }, 2000);

}

window.onload = loaded()