---
title:  "huffman树及编码的实现"
tag:  "技术" 
key: huffman_tree_and_huffman_code
---

最近学到Huffman编码，于是想要实现出来看看，查阅了一些资料，就开始动手了。
首先整理一下思路，Huffman编码关键是构造huffman树，输入字母表以及对应权重，构建Huffman树；由Huffman树即可生成Huffman码和字母表的映射。



由于hufgman树的特殊性，节点的度只有0和2，只有叶子结点代表字母，其他节点均为辅助接点，当有n个叶子的时候必然有n-1个辅助节点。考虑用连续存储来存放，具体来说就是个结构体数组。每个结构体中记录节点的字母，权重，父亲节点，孩子节点，没有的置为-1；在长度为2n-1的结构体数组中，前n个存放叶子结点，后n-1个存放辅助节点，初始的时候叶子结点都没有父亲节点，构建Huffman树的时候，只需要依次进行n-1轮插入辅助节点操作即可（没插入一个辅助节点就会导致森林中的树减少一个）。



首先定义一个hufTree类：

```
#include <stdlib.h>
#include "stdafx.h"
#include"Windows.h"
#include <string>
#include <iostream>
using namespace std;
class hufTree {
private:
	typedef struct hufNode {
		char alpha;
		int weight;
		int lChild, rChild, parent;
	}  *pNode;

	int  _n;
	int _m;//叶子数和总节点数

	pNode huf_arr;
	void getMintwo(int  flag,int *min1,int* min2);
public:
	 hufTree(char * alpha,int * weight,int N);//构造huf树，alpha为字母数组
	 ~hufTree() {};
	string*  hufCodingtable();
	string encode(string str,string * huftable, char * alpha);
	string decode(string str, string * huftable, char * alpha);
};
```
由于要多次选取森林中权最小的两个树，所以，写成函数getMintwo（）；
```
void hufTree::getMintwo(int  flag, int *min1, int* min2) {
	pNode hf = huf_arr;
	*min1 = 0; *min2 = 1;
	int weight1=9999, weight2=9999;
	for (int i = 0; i < flag;i++)
	{
		if ((hf[i].parent == -1) && (hf[i].weight < weight1)) { *min1 = i; weight1 = huf_arr[i].weight; }
		else if ((hf[i].parent == -1) && (hf[i].weight < weight2)) { *min2 = i; weight2 = huf_arr[i].weight; }
	}
}

```
重载构造函数，实现Huffman树的构建,这里最开始的时候，申请长度为2n-1的结构体数组空间，然后将前n个初始化为叶子结点，并且没有父亲节点（独立成为一棵树）和孩子节点，之后在插入辅助接点形成新树删除旧树之时只需改变元素之间的父子关系即可。
```
//构造huf树
hufTree::hufTree(char * alpha, int * weight, int N) {
	char* tmp=new char[20];
	_n = N;
	_m = N * 2 - 1;
	huf_arr = new hufNode[_m];
	for (int i = 0; i < _n; i++)
	{
		huf_arr[i].alpha = alpha[i];
		huf_arr[i].parent = -1;
		huf_arr[i].lChild = -1;
		huf_arr[i].rChild = -1;
		huf_arr[i].weight = weight[i];
		//*tmp = huf_arr[i].alpha;
		//OutputDebugStringA(tmp);
	}
	int min1, min2;
	for (int i = _n; i < _m; i++)
	{
		getMintwo(i,&min1,&min2);
		huf_arr[i].parent = -1;
		huf_arr[i].lChild = min1;
		huf_arr[i].rChild = min2;
		huf_arr[min1].parent = i;
		huf_arr[min2].parent = i;
		huf_arr[i].weight = huf_arr[min1].weight + huf_arr[min2].weight;
	   
	}

}
```
然后根据已有的Huffman树生成对应的编码映射表，此处应该有键值表，但是我嫌麻烦，所以直接用两个平行的数组分别存放键和值(函数值返回hufman码表，和已知的字母表一一顺序对应)。方法是，从对应的叶子开始向上搜索到根节点，每次判断当前节点是父亲节点的左节点还是右节点，对应加入0或1，由于得到的码是反序的，最后将字符串反转后插入编码表即可。
```
string* hufTree::hufCodingtable() {
	string* table = new string[_n];
	for (int i = 0; i < _n; i++)
	{
		int cur = i,parent=huf_arr[i].parent;
		string tmp = "";
		while (parent!=-1) {
			if (huf_arr[parent].lChild==cur)
			{
				tmp += "0";
			}
			else
			{
				tmp += "1";
			}
			cur = parent;
			parent = huf_arr[cur].parent;

		}
		reverse(tmp.begin(),tmp.end());

		table[i] = tmp;
	}
	return table;
}

```
编码和解码函数，编码函数很简单，每次取出一个字符，将其对应Huffman码值查出后加到输出字符串即可；解码函数由于每个码长短未知，所以设置一个buffer变量，每次读入一个二进制位到buffer，比对Huffman码表是否有相应的字母，如有，取出加入输出字符串后，buffer归零；若无，则在buffer中再加入一个二进制位。
```
string hufTree::encode(string str, string * huftable, char * alpha)
{
	string tmp = "";

	int len = str.length();
	for (int i = 0; i < len; i++)
		for (int  j = 0; j < _n; j++)
		{
		if (huf_arr[j].alpha==str.at(i))
			{
			tmp += huftable[j];
			}
		}
	return tmp;
}
string hufTree::decode(string str, string * huftable, char * alpha)
{
	string tmp = "";
	string buffer = "";
	int len = str.length();
	for (int i = 0; i < len; i++)
	{
		buffer += str.at(i);

		for (int j = 0; j < _n; j++)
		{
			if (huftable[j] == buffer)
			{
				tmp += alpha[j];
				buffer = "";
			}
		}
	}
	return tmp;
}

```
然后就是主函数了,..以前上课老爱用getchar停住cmd黑框，今天忽然掉进个坑，我把黑框关闭后再去修改了代码后就出现lnk1168错误，原因是之前那个程序根本没停，我去任务管理器试图关闭发现关闭不了，估计是没给它个char他不甘心停止吧。所以改成了system（“pause”），暂时还没出现问题。
```
int main()
{
	char  alpha[] = { 'a','b','c','d','e','f','g' };
	int   weight[] = { 1,2,3,4,5,6,7 };
	hufTree hf(alpha,weight,7);
    string str = "abcdefg";
	string encode=hf.encode(str,hf.hufCodingtable(),alpha);
	cout << encode;
	string decode = hf.decode(encode,hf.hufCodingtable(),alpha);
	cout << decode;
	system("pause");
    return 0;
}
```
输出：
>011001110101101110010
>abcdefg
>Press any key to continue . . .