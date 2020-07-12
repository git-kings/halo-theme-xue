var tocId = '#toc';
var flagId = '#tocFlag';
var post = {
    loadHighlight: function() {
        var codes = document.querySelectorAll('.md-content pre code');
        for (var i = 0; i < codes.length; i++) {
            var block = codes[i];
            hljs.highlightBlock(block);
            // 行号
            $('code.hljs').each(function(i, block) {
                hljs.lineNumbersBlock(block);
            });
        // //    copy 按钮
        //     $('code.hljs').each(function(i, block) {
        //         hljs.addCopyButton(block);
        //     });
        }
    },
    initViewer: function () {
        if (document.getElementById('write')) {
            const viewer = new Viewer(document.getElementById('write'), {
                toolbar: false,
            });
        }
    },
    //获取滚动条距离顶部位置
    getScrollTop: function () {
        return document.documentElement.scrollTop || document.body.scrollTop;
    },

    tocScroll: function (event) {
        var Obj = $(flagId);

        //判断元素是否存在
        if (Obj.length !== 1) {
            return false;
        }

        var tocFixed = $(tocId);
        var ObjTop = Obj.offset().top - $(window).height() * 0.5;

        // 滚动条离页面顶端的距离
        var scrollTop = post.getScrollTop();
        var postHeaderHeight = $('#postHeader').height();
        if (scrollTop > postHeaderHeight) {
            tocFixed.show();
        } else {
            tocFixed.hide();
        }

        var tocEle = document.querySelector(tocId);
        if (!tocEle || !tocEle.getBoundingClientRect()) {
            return;
        }
        var tocHeight = tocEle.getBoundingClientRect().height;
        if (scrollTop > ObjTop - tocHeight * 0.5) {
            tocFixed.addClass('toc-right-fixed');
        } else {
            tocFixed.removeClass('toc-right-fixed');
        }

        event.preventDefault();
    },

    scrollTocFixed: function () {
        window.addEventListener('scroll', post.tocScroll, false);
    },


    initToc: function () {
        var headerEl = 'h1,h2,h3,h4,h5,h6',  //headers
            content = '.md-content';//文章容器
        tocbot.init({
            tocSelector: '#toc',
            contentSelector: content,
            headingSelector: headerEl,
            scrollSmooth: true,
            headingsOffset: 0 - $('#postHeader').height(),
            hasInnerContainers: false,
        });

        var tocLinks = $('.md-content .toc-link');
        if (tocLinks) {
            for (var i = 0; i < tocLinks.length; i++) {
                var tocLink = tocLinks[i];
                tocLink.after(document.createElement("span"));
            }
        }
    },

    // 因为不使用后端渲染目录, 所以如果在发布文章的时候在文章开头加上 [TOC] 会在文章页面开头有一个ul 标签
    // 这里粗暴的去除
    removeFirstUL: function () {
        var post_content = document.getElementById('write');
        if (!post_content) {
            return;
        }
        var firstNodeName = post_content.firstElementChild.nodeName;
        if (firstNodeName === 'UL') {
            $(post_content.firstElementChild).hide();
        }
    },
}

$(function () {
    // 代码高亮
    post.loadHighlight();

    // 图片预览
    post.initViewer();

    // 目录事件
    post.scrollTocFixed();

    // 初始化toc
    post.initToc()

    // 删除文章最开始第一个 <ul>(如果有)
    post.removeFirstUL()

});