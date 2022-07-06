安卓12注意事项

> 尚未完工

见[Termux issues #2366](https://github.com/termux/termux-app/issues/2366)

对于使用安卓12的Termux用户，可能遇到如下问题，这会导致Termux直接退出
```
[Process completed (signal 9) - press Enter]
```
 这是因为Android 12 上，Google 引入了一个 "phantom process killer" 的机制，这个机制会定期清理后台进程  
我不确定Exagear会不会遇到这个问题，但为了保险起见，请根据如下步骤操作：

> 教程没时间写(无法截屏)，先临时看这个：[Disable phantom process killing.](https://gist.github.com/agnostic-apollo/dc7e47991c512755ff26bd2d31e72ca8#disable-phantom-process-killing)