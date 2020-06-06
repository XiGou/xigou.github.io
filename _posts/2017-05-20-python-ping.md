---
title:  "自己实现一个ping程序"
tag:  "技术" 
key: python_ping
---


小时候不太会玩电脑，一般自己玩的时候流程是：开始--附加功能--游戏与娱乐。

倘若旁边有妹子在围观，我便会win+R-----cmd----ping baidu.com.然后看着屏幕上跳出一行行数字，假装自己看得懂的样子，过一会儿再慢悠悠地打开太空弹球玩起来

现在想起来真的是图样图森破，甚至还非常naive啊。


这个ping程序算是我对计算机最早的认识了，作为一个生活在图形界面时代的人类，这也是我第一次知道了命令行形式的人机交互。

之前学习了计算机网络的知识，知道了它的原理其实是利用ICMP协议的回显请求来实现的，通过构造ICMP报文向目的主机发出，然后接收返回报文，计算经过的时间，就能计算出主机到目的主机之间的RTT（Round Trip Time），也就是我们平时讲的延迟。

由于ICMP工作在网络层,不能保证交付，也不保证顺序，所以发送多个请求的时候，可能会出现乱序的情况，于是ping程序中在数据段保存包本身的发送时间，接收到之后用系统时间减去报文中读取的时间即可得到RTT。为了简化过程，我在此只发送一个报文。
要构造ICMP包，首先要知道其格式，
>Type （8bit）     |     Code（8bit）   |          Checksum       （16bit）  |           Identifier        （16bit）  |       Sequence Number   （16bit）  |     Data ...
我们要用到的是回显请求，对应type是8，code是0，checksum要通过特定的算法获得，其他部分自己处理即可。
    
    import socket
    import  array,struct,time,select
    def checksum(data):
    if(len(data)%2!=0):
        data+=b'\x00'
    a=array.array('H',data)
    s=0
    for d in a:
        s=s+d
    s=(~s)&0xffff
    return s
	
	
这段代码将已经除checksum以外其它打包好的数据进行一系列计算，得到一个16bit的数，用于差错检测，如果计算错误，服务器方不会响应，你也就接受不到响应的报文了。在编写网络程序的时候，调试时要利用抓包工具查看自己发出的报文的具体内容，否则难以得知自己错在何处。

    def send_packet(my_socket,destination_addr):
    header=struct.pack('bbHh',8,0,1,1)
    data=0
    data=struct.pack('d',data)
    checks=checksum(header+data)
    packet=struct.pack('bbHHh',8,0,checks,1,1)+data
    my_socket.sendto(packet,(destination_addr,1))
    t=recive_ping(my_socket, 5)
    print(t)

    def recive_ping(my_socket,timeout):
    timeleft=timeout
    while True:
        starttime=time.time()
        select_=select.select([my_socket],[],[],timeleft)
        if select_[0]==[]:
            print("timeout")
            return -1
        t=time.time()-starttime
        return  t
		
		
这两个函数一起完成了报文的构造和发送，这其中用到了raw类型socket，select用于接收数据，由于数据要翻译成二进制发送，直接连接字符串肯定是不行的，所以要用struct将数据打包。

    def do(addr):
    icmp=socket.getprotobyname('icmp')
    s=socket.socket(socket.AF_INET,socket.SOCK_RAW,icmp)
    send_packet(s, addr)

    do("220.181.57.217")

这就是程序的入口了，运行效果就不贴了，反正就是打印出一个浮点数。

与ping相似的另一个traceroute，实现原理也类似，它利用的是ip头部的TTL,通过构造指向目的主机的ttl从1递增的数据包，就能获得源主机到目的主机之间所有经过的路由，这可以在网上找到不少资料，此处不再赘述。

参考:[1]:https://bbs.ichunqiu.com/thread-8970-1-1.html