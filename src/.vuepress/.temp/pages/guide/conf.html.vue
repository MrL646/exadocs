<template><div><h1 id="其他配置-可选" tabindex="-1"><a class="header-anchor" href="#其他配置-可选" aria-hidden="true">#</a> 其他配置(可选)</h1>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>如果你只是想玩《东方凭依华》，那么你可以看<RouterLink to="/th155.html">这篇文档</RouterLink></p>
</div>
<p>如果你想在手机上运行使用DirectX 11的游戏(如东方凭依华)，或者尝试提高帧率，你可以配置如下选项</p>
<h2 id="mesa" tabindex="-1"><a class="header-anchor" href="#mesa" aria-hidden="true">#</a> Mesa</h2>
<p><a href="http://xn--libgl-3o1jr61aophyw1bx2xl45ap2a.so" target="_blank" rel="noopener noreferrer">通过替换自带的libgl.so<ExternalLinkIcon/></a>，来更换OpenGL驱动，从而提高帧率，或者使Exagear支持DX11</p>
<p>目前有如下选择：</p>
<p>llvmpipe: 软件渲染，最慢，兼容性最好，不支持DX11<br>
VirGL(VirtIO GPU): 硬件渲染(?)，较快，兼容性较好(除华为)，不支持DX11<br>
Turnip Zink: 硬件渲染，较快，仅兼容部分骁龙处理器(参考<a href="https://tieba.baidu.com/p/7930444021" target="_blank" rel="noopener noreferrer">这个帖子<ExternalLinkIcon/></a>)，支持DX11<br>
Mesa Stock Cache(仅4合1版): 硬件渲染(?)，最快，兼容性较好(除华为)，不支持DX11<br>
VirGL Overlay: 将图形转发到安卓客户端上渲染，最快，兼容性最奇葩，只能单独使用，无法在4合1版上使用，不支持DX11<br>
Mesa + 版本号(仅4合1版): 效果不明，兼容性不明，不支持DX11</p>
<p>如果你已经根据上面的步骤安装了Exagear(除了ED301/302)<br>
那么你现在的Mesa应该是VirGL，华为设备是llvmpipe</p>
<p>如果你使用的是骁龙设备，那么你可以根据下面的步骤更换Mesa:</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>如果想玩《东方凭依华》，请暂时使用Turnip Zink，并配合完整版DirectX使用</p>
</div>
<ul>
<li>4合1版:</li>
</ul>
<p>按照图一打开左下角的&quot;开始&quot;菜单，并选择需要的版本</p>
<p>出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</p>
<p>图一<br>
<img src="/assets/pictures/4in1/WineGL.png" alt="" loading="lazy"></p>
<p>如果是安装Mesa Stock Cache或其他版本的Mesa<br>
请按照图二打开&quot;开始&quot;菜单，并选择需要的版本</p>
<p>出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</p>
<p>图二<br>
<img src="/assets/pictures/4in1/Mesa.png" alt="" loading="lazy"></p>
<ul>
<li>VirGL + Turnip Zink 版:</li>
</ul>
<p>按照图三打开左下角的&quot;开始&quot;菜单，并选择需要的版本</p>
<p>出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</p>
<p>图三<br>
<img src="/assets/pictures/VirGL_Turnip_Zink/WineGL.png" alt="" loading="lazy"></p>
<h2 id="完整版directx" tabindex="-1"><a class="header-anchor" href="#完整版directx" aria-hidden="true">#</a> 完整版DirectX</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>如果想玩《东方凭依华》，请先安装这个，并配合Turnip Zink使用</p>
</div>
<p>4合1按照图四，VirGL版按照图五<br>
打开左下角的&quot;开始&quot;菜单，点击&quot;DirectX&quot;</p>
<p>出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</p>
<p>图四<br>
<img src="/assets/pictures/4in1/DirectX.png" alt="" loading="lazy"></p>
<p>图五<br>
<img src="/assets/pictures/VirGL_Turnip_Zink/DirectX.png" alt="" loading="lazy"></p>
<h2 id="wined3d-for-windows-仅4合1版" tabindex="-1"><a class="header-anchor" href="#wined3d-for-windows-仅4合1版" aria-hidden="true">#</a> WineD3D For Windows(仅4合1版)</h2>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>与<strong>完整版DirectX</strong>冲突</p>
</div>
<p>更换Wine内置的Direct3D文件，某些情况下能<strong>小幅度</strong>提升性能</p>
<p>使用方式: 如图六</p>
<p>图六<br>
<img src="/assets/pictures/4in1/WineD3DForWindows.png" alt="" loading="lazy"></p>
<h2 id="wined3d-winesound-winevideo" tabindex="-1"><a class="header-anchor" href="#wined3d-winesound-winevideo" aria-hidden="true">#</a> WineD3D/WineSound/WineVideo</h2>
<div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>非必要不尝试！</p>
</div>
<p>更换Wine内置的dll文件，某些情况下能<strong>小幅度</strong>提升性能/减少画面撕裂/修复破音</p>
<details class="custom-container details"><summary>使用方式（点击展开）</summary>
<ul>
<li>4合1版:</li>
</ul>
<p>WineD3D<br>
<img src="/assets/pictures/4in1/WineD3D.png" alt="" loading="lazy"></p>
<p>WineSound<br>
<img src="/assets/pictures/4in1/WineSound.png" alt="" loading="lazy"></p>
<p>WineVideo<br>
<img src="/assets/pictures/4in1/WineVideo.png" alt="" loading="lazy"></p>
<ul>
<li>VirGL版:</li>
</ul>
<p>WineD3D<br>
<img src="/assets/pictures/VirGL_Turnip_Zink/WineD3D.png" alt="" loading="lazy"></p>
<p>WineSound<br>
<img src="/assets/pictures/VirGL_Turnip_Zink/WineSound.png" alt="" loading="lazy"></p>
<p>WineVideo<br>
<img src="/assets/pictures/VirGL_Turnip_Zink/WineVideo.png" alt="" loading="lazy"></p>
</details>
</div></template>


