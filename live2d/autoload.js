try {
    $("<link>").attr({href: "/live2d/live2d.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div id="live2d" class="live2d1"><canvas id="live2dm" class="live2d2"></canvas></div>');
    $.ajax({url: "/live2d/live2d.js?v=1.0.5", dataType:"script", cache: true, success: function() {
        setTimeout(() => {
            window.FPConfig = {
                delay: 0,    // 浏览器空闲多少秒后开始预加载
                ignoreKeywords: [],    // 不进行预加载的链接，例 ["#", "/about"]
                maxRPS: 3,    // 每秒最大加载数
                hoverDelay: 50    // 鼠标悬浮后预加的延迟，毫秒单位
            };
            if (document.body.clientWidth > 600) {
                loadModel();
                document.getElementById('live2d').style["display"] = ""
            }
        }, 0)
    }});
} catch(err) { console.log("[Error] JQuery is not defined.") }
