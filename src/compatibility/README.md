# 兼容性

::: warning
~~尚未~~**永远不会**完工  
列表仅为作者个人推测  
详细情况请前往[兼容性(设备)](./for-devices.md)
:::
 
针对[东方Project](https://thwiki.cc/-/3)系列[游戏](https://thwiki.cc/-/9d)编制

|                               | 华为系 | 骁龙8系 |
|-------------------------------|--------|--------|
|ED301/302                      |    P   |    P   |
|VirGL (fix33及之前)             |Y(仅llvmpipe)| Y |
|Turnip Zink                    |    N   |   U   |
|VirGL + Turnip Zink (fix33之后)|    U   |  Y + F |
|VirGL Overlay                  |    U   |   Y   |
|4合1版                         | Y/N/N/B| Y/Y/F/B|

4合1版指整合了llvmpipe + VirGL + Turnip Zink + VirGL Overlay的Exagear改版  
4合1版的标号顺序：llvmpipe VirGL Turnip Zink VirGL Overlay

N(No):无法运行  
Y(Yes):可以运行大多数作品，除了基于DirectX 11的游戏  
F(Full):可以运行所有作品，包括基于DirectX 11的游戏  
P(Partly):部分工作，可以直接运行基于DirectX 8的游戏，对于基于DirectX 9的游戏，需要安装[WineD3D](https://down.mrl646.top/d/Exagear/%E5%B7%B2%E5%BC%83%E7%94%A8%E7%9A%84Exagear/%E7%AE%80%E5%8D%95%E8%A1%A5%E4%B8%81/%20%E8%87%AA%E8%A7%A3%E5%8E%8B%E8%A1%A5%E4%B8%81.exe)来正常运行  
U(Unknown):未知，有待测试  
B(Black screen):因为未知原因黑屏

基于DirectX 8的游戏：TH06-09及TH07.5、TH09.5，红魔乡、妖妖梦、永夜抄、花映塚、萃梦想、文花帖  
基于DirectX 9的游戏：TH10，东方风神录及之后的所有正作；TH12.5、TH12.8、TH14.5、TH16.5，除了东方文花帖之外的所有[小数点射击游戏](https://thwiki.cc/-/9d#小数点射击游戏)  
基于DirectX 11的游戏：TH15.5，东方凭依华及之后的所有格斗作