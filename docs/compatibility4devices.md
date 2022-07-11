# 兼容性(设备)

> ~~!未~~**永远不会**完工  

!> 本兼容性列表针对[东方Project](https://thwiki.cc/-/3)系列[游戏](https://thwiki.cc/-/9d)编制，**仅供参考**！  

华为 Mate40 Pro运行在HarmonyOS 2.0.0.223下  
魅族 16th Plus运行在Flyme 8(Android 8.1)及Flyme 9(Android 10)下，效果相同  
小米11运行在MIUI 12及Android 12(Pixel Experience)下，效果相同

|                               | 华为 Mate10 | 华为 Mate40 Pro | 魅族 16th Plus | 小米11 |
|-------------------------------|-------------|-----------------|----------------|--------|
|ED301/302                      |      P      |        P        |        P       |    P   |
|VirGL (fix33及之前)            |      U      |  Y(仅llvmpipe)  |        Y       |    Y   |
|Turnip Zink                    |      N      |        N        |        U       |    U   |
|VirGL + Turnip Zink (fix33之后)|      U      |        U        |      Y + F     |  Y + F |
|VirGL Overlay                  |      U      |        U        |        Y       |    Y   |
|4合1版                         |   U/U/U/U   |     Y/N/N/B     |     Y/Y/F/B    | Y/Y/F/B|

4合1版指整合了llvmpipe + VirGL + Turnip Zink + VirGL Overlay的Exagear改版  
4合1版的标号顺序：llvmpipe VirGL Turnip Zink VirGL Overlay

N(No):无法运行  
Y(Yes):可以运行大多数作品，除了基于DirectX 11的游戏  
F(Full):可以运行所有作品，包括基于DirectX 11的游戏  
P(Partly):部分工作，可以直接运行基于DirectX 8的游戏，对于基于DirectX 9的游戏，需要安装[WineD3D](https://exadown.vercel.app/Exagear/%E5%B7%B2%E5%BC%83%E7%94%A8%E7%9A%84Exagear/%E7%AE%80%E5%8D%95%E8%A1%A5%E4%B8%81/%E8%87%AA%E8%A7%A3%E5%8E%8B%E8%A1%A5%E4%B8%81.exe)来正常运行  
U(Unknown):未知，有待测试  
B(Black screen):因为未知原因黑屏

基于DirectX 8的游戏：TH06-09及TH07.5、TH09.5，红魔乡、妖妖梦、永夜抄、花映塚、萃梦想、文花帖  
基于DirectX 9的游戏：TH10，东方风神录及之后的所有正作；TH12.5、TH12.8、TH14.5、TH16.5，除了东方文花帖之外的所有[小数点射击游戏](https://thwiki.cc/-/9d#小数点射击游戏)  
基于DirectX 11的游戏：TH15.5，东方凭依华及之后的所有格斗作