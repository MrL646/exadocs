import{_ as t,c as r,o as e,a as d}from"./app.f77bbc91.js";const b=JSON.parse('{"title":"兼容性(设备)","description":"","frontmatter":{},"headers":[],"relativePath":"compatibility/for-devices.md","lastUpdated":null}'),a={name:"compatibility/for-devices.md"},i=d('<h1 id="兼容性-设备" tabindex="-1">兼容性(设备) <a class="header-anchor" href="#兼容性-设备" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><s>尚未</s><strong>永远不会</strong>完工</p></div><p>针对<a href="https://thwiki.cc/-/3" target="_blank" rel="noreferrer">东方Project</a>系列<a href="https://thwiki.cc/-/9d" target="_blank" rel="noreferrer">游戏</a>编制</p><p>华为 Mate40 Pro运行在HarmonyOS 2.0.0.223下<br> 魅族 16th Plus运行在Flyme 8(Android 8.1)及Flyme 9(Android 10)下，效果相同<br> 小米11运行在MIUI 12及Android 12(Pixel Experience)下，效果相同</p><table><thead><tr><th></th><th>华为 Mate10</th><th>华为 Mate40 Pro</th><th>魅族 16th Plus</th><th>小米11</th></tr></thead><tbody><tr><td>ED301/302</td><td>P</td><td>P</td><td>P</td><td>P</td></tr><tr><td>VirGL (fix33及之前)</td><td>U</td><td>Y(仅llvmpipe)</td><td>Y</td><td>Y</td></tr><tr><td>Turnip Zink</td><td>N</td><td>N</td><td>U</td><td>U</td></tr><tr><td>VirGL + Turnip Zink (fix33之后)</td><td>U</td><td>U</td><td>Y + F</td><td>Y + F</td></tr><tr><td>VirGL Overlay</td><td>U</td><td>U</td><td>Y</td><td>Y</td></tr><tr><td>4合1版</td><td>U/U/U/U</td><td>Y/N/N/B</td><td>Y/Y/F/B</td><td>Y/Y/F/B</td></tr></tbody></table><p>4合1版指整合了llvmpipe + VirGL + Turnip Zink + VirGL Overlay的Exagear改版<br> 4合1版的标号顺序：llvmpipe VirGL Turnip Zink VirGL Overlay</p><p>N(No):无法运行<br> Y(Yes):可以运行大多数作品，除了基于DirectX 11的游戏<br> F(Full):可以运行所有作品，包括基于DirectX 11的游戏<br> P(Partly):部分工作，可以直接运行基于DirectX 8的游戏，对于基于DirectX 9的游戏，需要安装<a href="https://down.mrl646.top/d/Exagear/%E5%B7%B2%E5%BC%83%E7%94%A8%E7%9A%84Exagear/%E7%AE%80%E5%8D%95%E8%A1%A5%E4%B8%81/%20%E8%87%AA%E8%A7%A3%E5%8E%8B%E8%A1%A5%E4%B8%81.exe" target="_blank" rel="noreferrer">WineD3D</a>来正常运行<br> U(Unknown):未知，有待测试<br> B(Black screen):因为未知原因黑屏</p><p>基于DirectX 8的游戏：TH06-09及TH07.5、TH09.5，红魔乡、妖妖梦、永夜抄、花映塚、萃梦想、文花帖<br> 基于DirectX 9的游戏：TH10，东方风神录及之后的所有正作；TH12.5、TH12.8、TH14.5、TH16.5，除了东方文花帖之外的所有<a href="https://thwiki.cc/-/9d#%E5%B0%8F%E6%95%B0%E7%82%B9%E5%B0%84%E5%87%BB%E6%B8%B8%E6%88%8F" target="_blank" rel="noreferrer">小数点射击游戏</a><br> 基于DirectX 11的游戏：TH15.5，东方凭依华及之后的所有格斗作</p>',8),n=[i];function o(c,l,s,p,h,_){return e(),r("div",null,n)}const f=t(a,[["render",o]]);export{b as __pageData,f as default};
