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
VirGL Overlay: 将图形转发到安卓客户端上渲染，最快，兼容性最奇葩，只能单独使用，无法在4合1版上使用，不支持DX11  
Mesa + 版本号(仅4合1版): 效果不明，兼容性不明，不支持DX11

</details>

如果你已经根据上面的步骤安装了Exagear(除了ED301/302)，那么你现在的Mesa应该是VirGL，华为设备是llvmpipe  

如果你使用的是骁龙设备，那么你可以根据下面的步骤更换Mesa:   

- 4合1版:  
按照图一打开左下角的"开始"菜单，并选择需要的版本，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

<details>
<summary>图一(点击展开)</summary>

![](/screenshots/4in1/WineGL.png)

</details>

如果是安装Mesa Stock Cache或其他版本的Mesa，请按照图二打开"开始"菜单，并选择需要的版本，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

<details>
<summary>图二(点击展开)</summary>

![](/screenshots/4in1/Mesa.png)

</details>

- VirGL + Turnip Zink 版:  
按照图三打开左下角的"开始"菜单，并选择需要的版本，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

<details>
<summary>图三(点击展开)</summary>

![](/screenshots/VirGL_Turnip_Zink/WineGL.png)

</details>

</details></br>
<details>
<summary>完整版DirectX(运行东方凭依华前必须安装)(点击展开)</summary>

4合1按照图四，VirGL版按照图五，打开左下角的"开始"菜单，点击"DirectX"，出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

<details>
<summary>图四(点击展开)</summary>

![](/screenshots/4in1/DirectX.png)

</details></br>

<details>
<summary>图五(点击展开)</summary>

![](/screenshots/VirGL_Turnip_Zink/DirectX.png)

</details>

</details></br>

<details>
<summary>WineD3D For Windows(仅4合1版)(点击展开)</summary>

!> 非必要不尝试！

更换Wine内置的Direct3D文件，某些情况下能**小幅度**提升性能  

使用方式: 如图六

<details>
<summary>图六(点击展开)</summary>

![](/screenshots/4in1/WineD3DForWindows.png)

</details>

</details></br>

<details>
<summary>WineD3D/WineSound/WineVideo(点击展开)</summary>

!> 非必要不尝试！

更换Wine内置的dll文件，某些情况下能**小幅度**提升性能/减少画面撕裂/修复破音  

使用方式:  

- 4合1版:

<details>
<summary>WineD3D(点击展开)</summary>

![](/screenshots/4in1/WineD3D.png)

</details></br>

<details>
<summary>WineSound(点击展开)</summary>

![](/screenshots/4in1/WineSound.png)

</details></br>

<details>
<summary>WineVideo(点击展开)</summary>

![](/screenshots/4in1/WineVideo.png)

</details>

- VirGL版:

<details>
<summary>WineD3D(点击展开)</summary>

![](/screenshots/VirGL_Turnip_Zink/WineD3D.png)

</details></br>

<details>
<summary>WineSound(点击展开)</summary>

![](/screenshots/VirGL_Turnip_Zink/WineSound.png)

</details></br>

<details>
<summary>WineVideo(点击展开)</summary>

![](/screenshots/VirGL_Turnip_Zink/WineVideo.png)

</details>

</details>