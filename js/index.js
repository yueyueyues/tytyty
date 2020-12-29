//头部城市列表
var arr1 = []
console.log($(".items"))

//头部hover效果
$(".header_nav li").mouseover(function() {
    if ($(this).attr("class") == "index") {
        $(".slider").css({
            "left": "0px",
            "width": "32px"
        })
    } else if ($(this).attr("class") == "repair") {
        $(".slider").css({
            "left": "82px",
            "width": "64px"
        })
    } else if ($(this).attr("class") == "service") {
        $(".slider").css({
            "left": "196px",
            "width": "64px"
        })
    } else if ($(this).attr("class") == "news") {
        $(".slider").css({
            "left": "306px",
            "width": "74px"
        })
        $(".container_news_layer").css({
            "display": "block"
        })
        $(".container_news_layer").stop().animate({
            "opacity": "1",
            "top": "78px"
        }, 300)
    } else {
        $(".slider").css({
            "left": "424px",
            "width": "64px"
        })
    }
})
$(".header_nav .news").mouseout(() => {
    $(".container_news_layer").stop().animate({
        "opacity": "0",
        "top": "100px"
    }, 300, function() {
        $(".container_news_layer").css({
            "display": "none"
        })
    })
})



//轮播！！！！！！！！！！！！！！！！！！  
$("#carousel_1").FtCarousel();

//专业维修！！！！！！！！！！！！！！！！！！！！
var arr2 = [{ name: "专业维修", src: "img/index/a7.jpg", b: "工程师多", p: "超过20000工程师" }, { name: "专业维修", src: "img/index/a7.jpg", b: "工程师多", p: "超过20000工程师" }, { name: "专业维修", src: "img/index/a7.jpg", b: "工程师多", p: "超过20000工程师" }, { name: "专业维修", src: "img/index/a7.jpg", b: "工程师多", p: "超过20000工程师" }, { name: "专业维修", src: "img/index/a7.jpg", b: "工程师多", p: "超过20000工程师" }, { name: "专业维修", src: "img/index/a7.jpg", b: "工程师多", p: "超过20000工程师" }]

$.ajax({
    "url": "../php/zmn.php",
    "data": "hide=1",
    "dataType": "JSON",
    "success": data => {
        data => xhr.responseText
    }
})

arr2.forEach((val) => {
    var li = $(`<li>
    <div class=${"img"}>
    <img src=${val.src}>
    </div>
    <b>${val.b}</b>
    <p>${val.p}</p>
    </li>`)
    $(".repair_part ul").append(li)
})

// 服务范围!!!!!!!!!!!!!!!!!!!!!!!
var arr3 = [{ src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }, { src: "img/index/A13.png", h4: "家电维修", p: "维修范围包括常用家电、厨房电器、生活电器等，以用户需求为核心，提供极致的服务体验", a: "查看" }]

arr3.forEach((val) => {
    var $li = $(`<li>
    <div class=${"cover"}>
    <img src=${val.src}>
    </div>
    <div class=${"info"}>
    <div class=${"info_content"}>
    <h4>${val.h4}</h4>
    <p>${val.p}</p>
    <div class=${"info_look"}>
    <a href=${"#"}>${val.a}</a>
    </div>
    </div>
    </div>
    </li>`)
    $(".ser_part_pic>ul").append($li)
})

$(".ser_part_pic li").mouseover(function() {
    $(this.lastElementChild).css("opacity", "0.8").css("bottom", "82%")
})
$(".ser_part_pic li").mouseout(function() {
    $(this.lastElementChild).css("opacity", "0").css("bottom", "18%")
})

// 啄木鸟平台定位!!!!!!!!!!!!!!!!!

var arr4 = [{ title: "服务覆盖城市及区域", span: "500", i: "+" }, { title: "服务覆盖城市及区域", span: "500", i: "+" }, { title: "服务覆盖城市及区域", span: "500" }, { title: "服务覆盖城市及区域", span: "500" }]

arr4.forEach((val, i) => {
    var $li = $(`<li>
    <div class="title">${val.title}
    <span></span>
    </div>
    <div class="data">
    <span>${val.span}</span>
    </div>
    </li>`)
    $(".part_content").append($li)
    if (val.i) {
        $($(".data")[i]).append($(`<i>${val.i}</i>`))
    }
})
var arr5 = [{ src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }, { src: "img/index/A31.png" }]
var $div = $(`<div></div>`)
arr5.forEach(val => {
    var $li = $(`<li>
    <a href="#">
    <img src=${val.src}>
    </a>
    </li>`)
    $div.append($li)
})
$(".carousel_part .carousel_container").append($div)