# 其他配置(可选)

> 如果你只是想玩《东方凭依华》，那么你可以看[这篇文档](/th155.md)

如果你想在手机上运行使用DirectX 11的游戏(如东方凭依华)，或者尝试提高帧率，你可以配置如下选项

<details>
<summary>Mesa(点击展开)</summary>

通过替换自带的libgl.so，来更换OpenGL驱动，从而提高帧率，或者使Exagear支持DX11

<details>
<summary>目前有如下选择(点击展开)</summary>

llvmpipe: 软件渲染，最慢，兼容性最好，不支持DX11  
VirGL(VirtIO GPU): 硬件渲染(?)，较快，兼容性较好(除华为)，不支持DX11  
Turnip Zink: 硬件渲染，较快，仅兼容部分骁龙处理器(参考[这个帖子](https://tieba.baidu.com/p/7930444021))，支持DX11  
Mesa Stock Cache(仅4合1版): 硬件渲染(?)，最快，兼容性较好(除华为)，不支持DX11  
VirGL Overlay: 将图形转发到安卓客户端上渲染，最快，兼容性最奇葩，只支持单独使用，无法在4合1版上使用，不支持DX11  
Mesa + 版本号(仅4合1版): 效果不明，兼容性同VirGL，不支持DX11

</details>

如果你已经根据上面的步骤安装了Exagear(除了ED301/302)，那么你现在的Mesa应该是VirGL，华为设备是llvmpipe  

如果你使用的是骁龙设备，那么你可以根据下面的步骤更换Mesa:   

- 4合1版:  
打开左下角的"开始"菜单(Wine里叫"起点")，打开WineGL，根据需要选择Mesa版本，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。  
如果是安装Mesa Stock Cache或其他版本的Mesa，请打开Mesa，并选择Mesa版本，其余同上。
- VirGL + Turnip Zink 版:  
打开左下角的"开始"菜单(Wine里叫"起点")，

</details></br>
<details>
<summary>完整版DirectX(运行东方凭依华前必须安装)(点击展开)</summary>

打开左下角的"开始"菜单(Wine里叫"起点")，打开WineGL，根据需要选择Mesa版本，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

</details></br>
<details>
<summary>WineD3D For Windows(点击展开)</summary>

!> 非必要不尝试！

更换Wine内置的Direct3D文件，某些情况下能**小幅度**提升性能  

使用方式: 打开左下角的"开始"菜单(Wine里叫"起点")，打开Programs > Wine Tools > DirectX > DirectX，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

</details></br>