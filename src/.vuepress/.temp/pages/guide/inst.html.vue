<template><div><h1 id="安装指南" tabindex="-1"><a class="header-anchor" href="#安装指南" aria-hidden="true">#</a> 安装指南</h1>
<div class="custom-container warning">
<p class="custom-container-title">尚未完工</p>
</div>
<h2 id="exagear-安装" tabindex="-1"><a class="header-anchor" href="#exagear-安装" aria-hidden="true">#</a> Exagear 安装</h2>
<p>前往<a href="/down">下载</a>页面下载Exagear并安装，之后运行Exagear，给予存储权限<br>
非直装版请先解压数据包，再运行Exagear</p>
<ul>
<li>对于ED301，请将<code v-pre>main.31.com.antutu.ABenchMark.obb</code>和<code v-pre>bass.so</code><br>
放在<code v-pre>/sdcard/</code>或<code v-pre>/storage/emulated/0/</code>下</li>
<li>对于Exagear 4合1版，请将<code v-pre>main.30.com.ludashi.benchmark.obb</code><br>
放在<code v-pre>/storage/emulated/0/Android/obb/com.ludashi.benchmark/</code>下</li>
</ul>
<p>进入Exagear后，点击左上角的三条横杠，之后点击&quot;环境管理&quot;<br>
然后点击右上角的加号，创建环境</p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>如果你使用的是<strong>VirGL版、Turnip Zink版或4合1版</strong>Exagear，请按照下面的步骤操作，否则你将无法正常启动游戏</p>
<details class="custom-container details"><summary>点击展开</summary>
<p>创建环境后，点击该环境最右端的三个点，然后点击&quot;设置&quot;或&quot;Settings&quot;</p>
<p>如果是<strong>高通骁龙</strong>处理器的设备：</p>
<ul>
<li>非4合1版：调整&quot;图形渲染器&quot;选项至&quot;VirtIO-GPU&quot;</li>
<li>4合1版fix35：调整&quot;GPU&quot;选项至以&quot;VirtIO&quot;开头的那个</li>
<li>4合1版fix38及以后：调整&quot;GPU&quot;选项至&quot;Hardware&quot;</li>
</ul>
<p>如果是<strong>华为/荣耀</strong>设备：</p>
<ul>
<li>非4合1版：调整&quot;图形渲染器&quot;选项至&quot;LLVM 10&quot;</li>
<li>4合1版fix35：调整&quot;GPU&quot;选项至以&quot;llvmpipe&quot;开头的那个</li>
<li>4合1版fix38及以后：调整&quot;GPU&quot;选项至&quot;Software&quot;</li>
</ul>
<p>之后点击左上角的箭头返回</p>
</details>
</div>
<p>点击该环境最右端的三个点，并点击&quot;启动&quot;或&quot;Start&quot;<br>
第一次启动环境时，一般会弹出如图的窗口，此时点击&quot;取消&quot;即可<br>
<img src="@source/guide/dialog.png" alt="" loading="lazy"></p>
<ol start="8">
<li>在文件管理器中打开D盘(对应设备上的<code v-pre>/storage/emulated/0/Exagear</code>，部分版本是<code v-pre>/storage/emulated/0/Download</code>)，打开游戏即可</li>
</ol>
<h2 id="inputbridge-安装" tabindex="-1"><a class="header-anchor" href="#inputbridge-安装" aria-hidden="true">#</a> InputBridge 安装</h2>
</div></template>


