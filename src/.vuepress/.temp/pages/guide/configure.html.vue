<template><div><h1 id="其他配置-可选" tabindex="-1"><a class="header-anchor" href="#其他配置-可选" aria-hidden="true">#</a> 其他配置(可选)</h1>
<blockquote>
<p>如果你只是想玩《东方凭依华》，那么你可以看<RouterLink to="/th155.html">这篇文档</RouterLink></p>
</blockquote>
<p>如果你想在手机上运行使用DirectX 11的游戏(如东方凭依华)，或者尝试提高帧率，你可以配置如下选项</p>
<details>
<summary>Mesa(点击展开)</summary>
<p><a href="http://xn--libgl-3o1jr61aophyw1bx2xl45ap2a.so" target="_blank" rel="noopener noreferrer">通过替换自带的libgl.so<ExternalLinkIcon/></a>，来更换OpenGL驱动，从而提高帧率，或者使Exagear支持DX11</p>
<details>
<summary>目前有如下选择(点击展开)</summary>
<p>llvmpipe: 软件渲染，最慢，兼容性最好，不支持DX11<br>
VirGL(VirtIO GPU): 硬件渲染(?)，较快，兼容性较好(除华为)，不支持DX11<br>
Turnip Zink: 硬件渲染，较快，仅兼容部分骁龙处理器(参考<a href="https://tieba.baidu.com/p/7930444021" target="_blank" rel="noopener noreferrer">这个帖子<ExternalLinkIcon/></a>)，支持DX11<br>
Mesa Stock Cache(仅4合1版): 硬件渲染(?)，最快，兼容性较好(除华为)，不支持DX11<br>
VirGL Overlay: 将图形转发到安卓客户端上渲染，最快，兼容性最奇葩，只能单独使用，无法在4合1版上使用，不支持DX11<br>
Mesa + 版本号(仅4合1版): 效果不明，兼容性不明，不支持DX11</p>
</details>
<p>如果你已经根据上面的步骤安装了Exagear(除了ED301/302)，那么你现在的Mesa应该是VirGL，华为设备是llvmpipe</p>
<p>如果你使用的是骁龙设备，那么你可以根据下面的步骤更换Mesa:</p>
<ul>
<li>4合1版:<br>
按照图一打开左下角的&quot;开始&quot;菜单，并选择需要的版本，出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</li>
</ul>
<details>
<summary>图一(点击展开)</summary>
<p><img src="/screenshots/4in1/WineGL.png" alt="" loading="lazy"></p>
</details>
<p>如果是安装Mesa Stock Cache或其他版本的Mesa，请按照图二打开&quot;开始&quot;菜单，并选择需要的版本，出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</p>
<details>
<summary>图二(点击展开)</summary>
<p><img src="/screenshots/4in1/Mesa.png" alt="" loading="lazy"></p>
</details>
<ul>
<li>VirGL + Turnip Zink 版:<br>
按照图三打开左下角的&quot;开始&quot;菜单，并选择需要的版本，出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</li>
</ul>
<details>
<summary>图三(点击展开)</summary>
<p><img src="/screenshots/VirGL_Turnip_Zink/WineGL.png" alt="" loading="lazy"></p>
</details>
</details></br>
<details>
<summary>完整版DirectX(运行东方凭依华前必须安装)(点击展开)</summary>
<p>4合1按照图四，VirGL版按照图五，打开左下角的&quot;开始&quot;菜单，点击&quot;DirectX&quot;，出现&quot;Wine Gecko安装器&quot;时，点击&quot;取消&quot;，再点击&quot;解压&quot;即可。</p>
<details>
<summary>图四(点击展开)</summary>
<p><img src="/screenshots/4in1/DirectX.png" alt="" loading="lazy"></p>
</details></br>
<details>
<summary>图五(点击展开)</summary>
<p><img src="/screenshots/VirGL_Turnip_Zink/DirectX.png" alt="" loading="lazy"></p>
</details>
</details></br>
<details>
<summary>WineD3D For Windows(仅4合1版)(点击展开)</summary>
<p>!&gt; 非必要不尝试！</p>
<p>更换Wine内置的Direct3D文件，某些情况下能<strong>小幅度</strong>提升性能</p>
<p>使用方式: 如图六</p>
<details>
<summary>图六(点击展开)</summary>
<p><img src="/screenshots/4in1/WineD3DForWindows.png" alt="" loading="lazy"></p>
</details>
</details></br>
<details>
<summary>WineD3D/WineSound/WineVideo(点击展开)</summary>
<p>!&gt; 非必要不尝试！</p>
<p>更换Wine内置的dll文件，某些情况下能<strong>小幅度</strong>提升性能/减少画面撕裂/修复破音</p>
<p>使用方式:</p>
<ul>
<li>4合1版:</li>
</ul>
<details>
<summary>WineD3D(点击展开)</summary>
<p><img src="/screenshots/4in1/WineD3D.png" alt="" loading="lazy"></p>
</details></br>
<details>
<summary>WineSound(点击展开)</summary>
<p><img src="/screenshots/4in1/WineSound.png" alt="" loading="lazy"></p>
</details></br>
<details>
<summary>WineVideo(点击展开)</summary>
<p><img src="/screenshots/4in1/WineVideo.png" alt="" loading="lazy"></p>
</details>
<ul>
<li>VirGL版:</li>
</ul>
<details>
<summary>WineD3D(点击展开)</summary>
<p><img src="/screenshots/VirGL_Turnip_Zink/WineD3D.png" alt="" loading="lazy"></p>
</details></br>
<details>
<summary>WineSound(点击展开)</summary>
<p><img src="/screenshots/VirGL_Turnip_Zink/WineSound.png" alt="" loading="lazy"></p>
</details></br>
<details>
<summary>WineVideo(点击展开)</summary>
<p><img src="/screenshots/VirGL_Turnip_Zink/WineVideo.png" alt="" loading="lazy"></p>
</details>
</details></div></template>


