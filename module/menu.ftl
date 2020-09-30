<div class="moon-menu" id="moonMenu" >
    <div class="moon-menu-items" >
        <span class="moon-menu-item pl-6 iconfont icon-up" onClick="ckBack2Top()"> </span>
        <span class="moon-menu-item pl-6 iconfont icon-down" onClick="ckBack2Bottom()"> </span>
        <span class="moon-menu-item pl-6 iconfont icon-search" onclick="toggleSearchBox()"></span>
        <#if settings.post_toc!true>
            <span class="moon-menu-item pl-6 cst-icon icon-toc hidden" onclick="ckShowContent()" id="smallToc"></span>
        </#if>
    </div>

    <div class="moon-menu-button" onclick="ckMoonButton()">
        <svg class="moon-menu-bg">
            <circle class="moon-menu-cricle" cx="50%" cy="50%" r="44%"></circle>
            <circle class="moon-menu-border" cx="50%" cy="50%" r="48%"></circle>
            <g class="moon-dot">
                <circle r=".2rem" cx="0" cy="-.8rem"></circle>
                <circle r=".2rem"></circle>
                <circle r=".2rem" cx="0" cy=".8rem"></circle>
            </g>
        </svg>
        <div class="moon-menu-content">
            <div class="moon-menu-icon"></div>
            <div class="moon-menu-text"></div>
        </div>
    </div>
</div>

<#-- 目录 -->
<div class="moon-content menu-bg" id="moonToc">
</div>

<#-- 搜索 -->
<form method="get" action="/search">
    <div class="hidden search-box" id="searchBox">
        <div class="search-ipt ipt ipt-w">
            <div class="ipt-ct ct-bg search-container" id="searchInput">
                <label class="sh-lab">
                    <input class="sh-ipt" maxlength="30" name="keyword" id="searchBoxInput" spellcheck="false" placeholder="Search" autofocus="autofocus" autocomplete="off">
                    <i class="sh-icon cst-icon icon-search"></i>
                </label>
                <a class="sh-exit cst-icon icon-exit" onClick="toggleSearchBox()"></a>
            </div>
        </div>
    </div>
</form>