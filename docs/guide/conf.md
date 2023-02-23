# 其他配置(可选)

::: tip
如果你只是想玩《东方凭依华》，那么你可以看[这篇文档](/)
:::

如果你想在手机上运行使用DirectX 11的游戏(如东方凭依华)，或者尝试提高帧率，你可以配置如下选项

## Mesa

通过替换自带的libgl.so，来更换OpenGL驱动，从而提高帧率，或者使Exagear支持DX11

目前有如下选择：

llvmpipe: 软件渲染，最慢，兼容性最好，不支持DX11  
VirGL(VirtIO GPU): 硬件渲染(?)，较快，兼容性较好(除华为)，不支持DX11  
Turnip Zink: 硬件渲染，较快，仅兼容部分骁龙处理器(参考[这个帖子](https://tieba.baidu.com/p/7930444021))，支持DX11  
Mesa Stock Cache(仅4合1版): 硬件渲染(?)，最快，兼容性较好(除华为)，不支持DX11  
VirGL Overlay: 将图形转发到安卓客户端上渲染，最快，兼容性最奇葩，只能单独使用，无法在4合1版上使用，不支持DX11  
Mesa + 版本号(仅4合1版): 效果不明，兼容性不明，不支持DX11

如果你已经根据上面的步骤安装了Exagear(除了ED301/302)  
那么你现在的Mesa应该是VirGL，华为设备是llvmpipe  

如果你使用的是骁龙设备，那么你可以根据下面的步骤更换Mesa:   

::: tip
如果想玩《东方凭依华》，请暂时使用Turnip Zink，并配合完整版DirectX使用
:::

- 4合1版:  

按照图一打开左下角的"开始"菜单，并选择需要的版本  

出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

图一  
![](/assets/pictures/4in1/WineGL.png)

如果是安装Mesa Stock Cache或其他版本的Mesa  
请按照图二打开"开始"菜单，并选择需要的版本  

出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

图二  
![](/assets/pictures/4in1/Mesa.png)

- VirGL + Turnip Zink 版:  

按照图三打开左下角的"开始"菜单，并选择需要的版本  

出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

图三  
![](/assets/pictures/VirGL_Turnip_Zink/WineGL.png)

## 完整版DirectX

::: tip
如果想玩《东方凭依华》，请先安装这个，并配合Turnip Zink使用
:::

4合1按照图四，VirGL版按照图五  
打开左下角的"开始"菜单，点击"DirectX"  

出现"Wine Gecko安装器"时，点击"取消"，再点击"解压"即可。

图四  
![](/assets/pictures/4in1/DirectX.png)

图五  
![](/assets/pictures/VirGL_Turnip_Zink/DirectX.png)

## WineD3D For Windows(仅4合1版)

::: warning
与**完整版DirectX**冲突
:::

更换Wine内置的Direct3D文件，某些情况下能**小幅度**提升性能  

使用方式: 如图六

图六  
![](/assets/pictures/4in1/WineD3DForWindows.png)

## WineD3D/WineSound/WineVideo

::: danger
非必要不尝试！
:::

更换Wine内置的dll文件，某些情况下能**小幅度**提升性能/减少画面撕裂/修复破音  

::: details 使用方式（点击展开）

- 4合1版:

WineD3D  
![](/assets/pictures/4in1/WineD3D.png)

WineSound  
![](/assets/pictures/4in1/WineSound.png)

WineVideo  
![](/assets/pictures/4in1/WineVideo.png)

- VirGL版:

WineD3D  
![](/assets/pictures/VirGL_Turnip_Zink/WineD3D.png)

WineSound  
![](/assets/pictures/VirGL_Turnip_Zink/WineSound.png)

WineVideo  
![](/assets/pictures/VirGL_Turnip_Zink/WineVideo.png)

:::
