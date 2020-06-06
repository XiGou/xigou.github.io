---
title:  "（大合集）各种排序算法的介绍与实现"
tag:  "技术" 
key: all_sorting_algorithm
---

**写在前边**：这篇文章又臭又长，纯属个人无聊总结之作。


[TOC]

排序算法在计算机界是很基础，很重要的，对人类也是至关重要的，没有排序算法，就难以把人类分成三六九等，区别对待了，那样的世界是多么恐怖啊。





为了演示方便，此文排序的对象都是一个int类型的vector，其中交换两个元素，采用了位运算，至于为什么，第一是我恰好会，第二是，我认为这三行写在一起有一种独特的美感。
```c++
vec[i]=vec[j]^vec[i];
vec[j]=vec[j]^vec[i];
vec[i]=vec[j]^vec[i];
 ```
 (看起来似乎有点画蛇添足了，还不如。sort()......)。

## 1.菜鸟排序
这个排序算法，是所有学生最开始接触编程的时候碰到的一个算法，其地位就像是>hello world！<在IT界的地位一般，所以必须放在开头。

其思想相当接近大多数常人的思维，从前向后，对每个位置，都从当前位置开始，向后面扫描，如果发现一个元素比当前位置的值大，就把它，交换过来。

这个算法，大约进行（n到1求和）次比较操作，所以复杂度是O(n^2)。
```c++
/*
noob sort
*/
int noob_sort(vector<int>& vec )
{
		int i,j;
  for(i=0;i<vec.size()-1;i++)
  {
	for(j=i+1;j<vec.size();j++)
	{
		if(vec[j]>vec[i])
		{
			vec[i]=vec[j]^vec[i];
			vec[j]=vec[j]^vec[i];
			vec[i]=vec[j]^vec[i];
		}
	}
  }
  return 0;

}
```
## 2. 选择排序（selected sort）

一般同学们学到了上面那个算法，老师们就会指出，其中的很多交换是不必要的，如果我们先找出当前元素后面最大或者最小的元素，就能只用一次交换将一个元素放到正确的位置。于是就有了如下算法，用一个变量存储，后边的元素中最大或最小的元素下标，在遍历完之后才进行交换操作，减少了交换的次数，提高了效率。

不过它的复杂度依然是O(n^2)，因为这种优化带来的效果是操作次数常数倍的减少，决定这个算法效率的关键是比较的次数，这一类依赖于比较的算法，可以严格证明它们的复杂度是有下限的，稍后将会看到这样的算法。
```c++
/*
selected sort
*/
int selected_sort(vector<int>& vec )
{

  	int i,j,k;
  for(i=0;i<vec.size()-1;i++)
  {
	 k= i;
	for(j=i+1;j<vec.size();j++)
	{

		if(vec[j]>vec[k])
		{
			k=j;

		}

	}
	vec[i]=vec[k]^vec[i];
	vec[k]=vec[k]^vec[i];
	vec[i]=vec[k]^vec[i];
  }
  return 0;
}
```
## 3. 冒泡排序（bubble sort）
这个算法的思想是从左往右去遍历数组，每次比较相邻两个元素的大小，如果其大小和你需要的大小关系相反（假设需要从大到小排序，那么你需要的排序结果左边的元素一定大于等于右边的元素），就交换两个元素的位置，这样一次从左到右的遍历，就能把最小的元素放到最后面去，这个最小的元素也就走到了它该去的地方，完成了历史的使命。第二次遍历的时候也就不用考虑这个元素了，具体来讲就是遍历范围的右边界减去1.

这个过程类似于每次把一个比较轻的泡泡冒出水面，所以这个算法叫做冒泡法。对于一个长度为n的数组，这个算法第i趟的时候需要比较n-i次，所以算法的复杂度依然是O(n^2)。
```c++
/*
bubble sort
*/
int bubble_sort(vector<int>& vec )
{

  	int i,j;
  for(i=vec.size()-1;i>0;i--)
  {
	for(j=1;j<i+1;j++)
	{
		if(vec[j]>vec[j-1])
		{
			vec[j]=vec[j-1]^vec[j];
			vec[j-1]=vec[j-1]^vec[j];
			vec[j]=vec[j-1]^vec[j];
		}
	}
  }
  return 0;
}
```
## 3. 鸡尾酒排序（cocktail sort）
这个算法是冒泡排序的一个变种，它的具体做法就是来回冒泡，每次把一个泡泡冒到右边，然后把一个石子沉到水底，代码实现方面，用两个变量存储遍历的左右边界，每次从左向右遍历到头就将右边界减一后向左遍历，如此，直到左右边界重合，排序就完成了。这个算法相比于冒泡排序，性能上没有优化，复杂度依然是n^2只是过程显得更加酷炫狂拽，估计也就因此得名鸡尾酒，如果是中国人发明的估计应该命名洗剪吹算法。

```c++
/*
cocktail sort
*/
int cocktail_sort(vector<int>& vec )
{
	int i=0,j=vec.size()-1,k;
	while(j>i)
	{
		for(k=i;k<=j-1;k++)
		{
			if(vec[k]<vec[k+1])
			{
				vec[k]=vec[k+1]^vec[k];
				vec[k+1]=vec[k+1]^vec[k];
				vec[k]=vec[k+1]^vec[k];
			}
		}
		j--;
		if(j>i)
		{
			for(k=j-1;k>=i;k--)
			{
				if(vec[k]<vec[k+1])
				{
					vec[k]=vec[k+1]^vec[k];
					vec[k+1]=vec[k+1]^vec[k];
					vec[k]=vec[k+1]^vec[k];
				}
			}
			i++;
		}
	}
  return 0;
}
```
## 4. 插入排序（insertion sort）
这个算法的思想依次选取待排数组中间的元素，插入到已经有序的数组内合适的位置，最终得到的元素序列就是有序的。初始的时候，我们从待排数组左边选择一个元素当作是已经有序的数组。

分析它的复杂度我们主要看发生的比较的次数，插入的时候我们是有序数列的从一侧向另一侧遍历，如果运气好，比较一次就找到了它应该在的位置，如果数组本身是反序的，你每次都要从左到右把已经有序的部分比较完才能找到其应该的位置。所以这个算法的复杂度和以上几个有了不一样的地方，有最好的和最坏的情况，这种情形用复杂度的期望来衡量复杂度是比较自然而然的做法。

总共需要插入n次，第i次插入操作平均会比较（i-1）2次，所以他的期望的复杂度为O（n^2/2）==O(n^2).

插入排序实际上可以优化到O(nlog(n),插入的时候采用二分法插入即可。
```c++
/*
insertion sort
*/
int insertion_sort(vector<int>& vec )
{

  	int i,j;
  for(i=1;i<vec.size();i++)
  {

	for(j=i;j>0;j--)
	{
		if(vec[j]>vec[j-1])
		{
			vec[j]=vec[j-1]^vec[j];
			vec[j-1]=vec[j-1]^vec[j];
			vec[j]=vec[j-1]^vec[j];
		}
		else{break;}
	}
  }
  return 0;
}
```
## 5. 堆排序（heap sort）
堆排序是利用了堆的特性，根据大根堆的定义，堆的根就是整个堆当中最大的一个元素，那么我们不断的去取出这个根（由于取出后会重建堆，导致新的根被选出来），那么得到的数列就是有序的了。

所以说这个算法关键在建一个堆，此处采用线性存储结构，直接用数组存储堆，为了原地排序，我们取出堆的根之后，重建堆，这样尾端就会空出一个位置，把取出的元素放到这个位置，等堆的元素个数为1的时候，数组就有序了。

若我们不看堆的操作，这个算法就需要n-1次操作就能完成任务啦，现实是我们必须考虑每次取出堆头后堆的重建。由于堆是完全二叉树，所以这个树的深度最多log(n)+1,根据堆调整过程，最多log(n)次的比较交换就能完成调整。所以算法复杂度为O（n*log(n)），这个数字就是比较类算法的复杂度的下限，可见它是一种很快的算法。
```c++
/*
 heap sort
*/

int rebuild_heap(vector<int>& vec,int n,int size)
{
	int largest=n;
	if(2*n>size){return 0;}
	 if(2*n<=size)
		{
			if(vec[n]<vec[2*n])
			{
				largest=2*n;
			}
			else largest=n;
		}
	 if(2*n+1<=size)
			{
				if(vec[2*n+1]>vec[largest])
				{
					largest=2*n+1;
				}
			}
	if(largest!=n)
	{
		vec[n]=vec[n]^vec[largest];
		vec[largest]=vec[n]^vec[largest];
		vec[n]=vec[n]^vec[largest];
		rebuild_heap(vec,largest,size);
	}
	return 0;

}
int build_heap(vector<int>& vec )
{
	for(int i=vec.size()-1;i>0;i--)
	{
		rebuild_heap(vec,i,vec.size()-1);
	}
	return 0;
}
int heap_sort(vector<int>& vec )
{

  	int i,size;
	size=vec.size()-1;
	/*build  heap*/
	build_heap(vec);
	  for(i=size;i>1;i--)
	  {
		vec[1]=vec[size]^vec[1];
		vec[size]=vec[size]^vec[1];
		vec[1]=vec[size]^vec[1];
		/*1和size位置的值交换*/
		size--;
		rebuild_heap(vec, 1, size);
	  }
  return 0;
}

```
## 桶排序（ bucket sort）
这个算法的思想是，给出一列有顺序的桶，每个桶编上号，从待排数列中取出一个元素，放到对应标号的桶里，这个操作在程序实现的时候极其方便，用数组的下标作为桶号，只需要一个赋值语句即可，对应桶的位置上的数字，用来标记桶号在待排数组内出现的次数。

输出的时候，按顺序扫描桶，若桶是空的，就跳过，若不空就根据桶中的数字输出相应个数的元素。

根据原理，很显然，只需要一次遍历就能把元素放进桶内，再一次便利桶即可输出有序的元素，为保证每个元素都能找到属于自己的桶，桶的个数需要包含待排数组的最小和最大值中间的所以情况。倘若待排数组长度n，桶个数m，那么算法的空间复杂度就是O(m)，时间复杂度就是O(n+m).

这似乎打破了前述的nlog(n)的复杂度下限，其实不然，之前说的复杂度下限，是直的基于比较的排序算法，而桶排序是不需要比较的。
```c++
/*
 bucket sort
*/
int bucket_sort(vector<int>& vec )
{
	vector<int> bucket;
	bucket.resize(vec.size(),0);
	/*造桶*/
  	int i;
	for(i=0;i<vec.size();i++)
	{
		bucket[vec[i]]++;
	}
	vec.resize(0);
	for(i=0;i<bucket.size();i++)
	{
		while(bucket[i]!=0)
		{
			vec.push_back(i);
			bucket[i]--;
		}
	}
  return 0;
}
```



##  proxmap sort

这东西没找着中文翻译，据我猜测 proximal是近似的意思，map是映射，它的中文应该是近似映射排序吧。

这是桶排序的升级版，桶排序最大的缺点就是浪费空间，因为桶排序中，大部分的桶都是空着的，所以有人提出每个桶装某个范围内的元素，所以它直接指定定一个桶的范围，然后在入桶的时候采用插入排序，最后遍历桶输出。 
```c++
/*
proxmap sort
*/
int proxmap_sort(vector<int>& vec )
{
	vector<vector<int> > bucket;
	bucket.resize(vec.size()/10+1);
	/*造桶*/
  	int i,j,k,* n,* m;
	//入桶
	for(i=0;i<vec.size();i++)
	{
		for(j=1;j<=bucket.size();j++)
		{
			if(vec[i]<10*j)
			{
				bucket[j-1].push_back(vec[i]);
				for(k=bucket[j-1].size()-1;k>0;k--)
				{
					m=&bucket[j-1][k];
					n=&bucket[j-1][k-1];
					if(*n<*m)
					{
						*n=*n^(*m);
						*m=*n^(*m);
						*n=*n^(*m);
					}
				}
				break;
			}
		}
	}
	//出桶
	vec.resize(0);
	for(j=0;j<bucket.size();j++)
	{
		while(bucket[j].size())
		{
			vec.push_back(bucket[j].back());
			bucket[j].pop_back();
		}
	}
	
	
  return 0;
}

```
## 基数排序（radix sort）

这个基数也就是数学中各种进制数字表示法的基数，由于我们用的是十进制，在此处，基数就是10。

这个算法分配十个桶，标号0到9，先按照个位数入桶，然后从左到右遍历桶，将元素取出，按照十位数字入桶，以此类推。

分析一下这个操作，就知道，按照个位数入桶的时候，个位数小的第二轮会先入桶，也就是说，第二轮完毕之后，每个桶内十位数相同，但是个位数小的被压在下面。继续分析，到百位数入桶的时候，每个桶十位数小的被压在下面，那这些被压在下边的十位数相同的一组，他们的个位数是否有序呢？显然是有的，其大小方向，取决于我们上一层的桶的取出方式为保持小的压在下面的性质，出桶应该采用先进先出的方式。
```c++
/*
radix sort
*/
int radix_sort(vector<int>& vec )
{
	int i,temp=vec.size();
	vector< vector<int> > bucket;
	bucket.resize(10);
	/*造桶*/
  	
	for(i=vec.size()-1;i>=0;i--)
	{
		bucket[vec[i]%10].push_back(vec[i]);
	}
	vec.resize(0);
	for(i=0;i<10;i++)
	{
		while(bucket[i].size()>0)
		{
			vec.push_back(bucket[i].back());
			bucket[i].pop_back();
		}
	}
	for(i=vec.size()-1;i>=0;i--)
	{
		bucket[(vec[i]/10)%10].push_back(vec[i]);
	}
	vec.resize(0);
	for(i=0;i<10;i++)
	{
		while(bucket[i].size()>0)
		{
			vec.push_back(bucket[i].back());
			bucket[i].pop_back();
		}
	}
  return 0;
}
```
## 耐心排序（patience sort）
这个排序的思想是依次取出待排数组元素，从左往右查找桶，只有小于桶底元素才能入桶，如果没有桶或者元素不小于任何一个桶的桶底元素，就新建一个桶，把这个元素放到桶底部。

这一边操作结束的结果就是，把待排数组分成了很多段，在每个桶分别插入排序就能得到有序数组。

插入排序的最坏情况是在反序的时候出现的，这个算法相比插入排序，将那些反序得太离谱的元素进行了调整，减小了问题规模。

```c++
/*
patience sort
*/
int patience_sort(vector<int>& vec)
{
	vector< vector<int> > bucket;
	int i,j,k,cur_bucket,len=vec.size();
	for(i=0;i<len;i++)
	{
		cur_bucket=-1;
		for(j=0;j<bucket.size();j++)
		{
			if(bucket[j][0]>=vec[i])
			{
				cur_bucket=j;break;
			}
		}
		if(cur_bucket==-1)
		{
			bucket.push_back(*(new vector<int>));
			bucket.back().push_back(vec[i]);
		}
		else
		{
			bucket[cur_bucket].push_back(vec[i]);
		}
	}
	vec.resize(0);
	for(k=0;k<bucket.size();k++)
	{
		while(bucket[k].size()!=0)
		{
			vec.push_back(bucket[k].back());
			bucket[k].pop_back();
		}
	}
	//插入排序
	for(k=1;k<len;k++)
	{
		for(j=k;j>0;j--)
		{
			if(vec[j]<vec[j-1])
			{
				vec[j]=vec[j]^vec[j-1];
				vec[j-1]=vec[j]^vec[j-1];
				vec[j]=vec[j]^vec[j-1];
			}
		}
	}

    return 0;
}
```


##  闪电排序（flash sort）

这也是proximap排序的一种升级算法，对于长度为n的桶，它把数组最大值和最小值之间分成n个区间，落在同个区间的放进同一个桶，入桶的时候进行插入排序，最后按顺序遍历桶，得到的数组就是有序的。
```c++
/*
 flash sort
*/
int flash_sort(vector<int>& vec )
{
	vector<vector<int> > bucket;
	bucket.resize(vec.size());
	/*造桶*/
  	int i,j,max=0,min=0,*m,*n,k;
	for(i=0;i<vec.size();i++)
	{
		if(vec[i]>max)max=vec[i];
		if(vec[i]<min)min=vec[i];
	}
	for(i=0;i<vec.size();i++)
	{
		j=(vec.size()-1)*(vec[i]-min)/(max-min);
		bucket[j].push_back(vec[i]);
		for(k=bucket[j].size()-1;k>0;k--)
		{
			m=&bucket[j][k];
			n=&bucket[j][k-1];
			if(*n<*m)
			{
				*n=*n^(*m);
				*m=*n^(*m);
				*n=*n^(*m);
			}
		}
	}
	vec.resize(0);
	for(j=0;j<bucket.size();j++)
	{
		while(bucket[j].size())
		{
			vec.push_back(bucket[j].back());
			bucket[j].pop_back();
		}
	}
  return 0;
}
```


## 计数排序（ counting sort）
这个算法的核心思想是，如果待排数组中比一个元素小的有k个，那么这个元素就该放在第k+1个位置上。

当然对待重复的元素，需要特殊处理，假设有m个元素都发现数组中有k个元素比自己小，他们肯定不能全部挤在k+1号坑，显然，它们应该占据k+1到k+m这m个坑。

由于对每个元素，我们都需要遍历整个数组来统计比它小的元素个数，所以这个算法复杂度应该为O(n^2).
```c++
/*
 counting sort
*/
int counting_sort(vector<int>& vec )
{
	int i,j,count;
	vector<int> bucket;
	bucket.resize(vec.size(),-1000);
	/*造桶*/
	for(i=0;i<vec.size();i++)
	{
		count=0;
		for(j=0;j<vec.size();j++)
		{
			if(vec[j]<vec[i]&&(j!=i))
			{
				count++;
			}
		}
		while(bucket[count]!=(-1000))
		{
			count++;
		}
		bucket[count]=vec[i];
	}
	vec=bucket;
  return 0;
}
```
## 圈排序（ cycle sort）
如果你看懂了计数排序，你也许会想到，它并不是原地算法，因为通过对某个元素计数之后，你知道了这个元素应该去的位置，但是在原地那个位置上还占着一个不知该放在哪里的元素。所以我们的做法是建立一个新的数组来安放排好序的元素，最后赋值给原数组。当然为了节约能源，你也可以建一个数组用于保存每个位置应该放的元素的标号（因为实际排序不可能只排关键字，必然有数据域），最后再根据标号去让各个元素归位，不过这样操作依然不是最理想的。

圈排序解决了这个问题，把计数排序升级成了原地排序。

它的思想是这样的：当你找到一个a元素应该放在1号位，而1号位被另一个元素b占着，你就把b元素取出，然后把a放到1号位，给a本来的位置放一个空标记。接着寻找b应该放在哪里。最终你一定会找到一个元素应该放在a原来的位置，由于这个位置是空的，直接把元素放在此处就结束了，这样的一系列操作构成一个圈，每个元素移动一次，就能让一个圈上所有元素归位。

这里有个confused的地方，就是，你为什么知道能够找到这样的圈？

这背后是有数学原理的，这种排序前和排序之后的映射关系在抽象代数中称作置换，而上述的圈称作轮换，就是一个集合到自身的映射，可以严格证明，每个置换都能写成几个不相交的轮换乘积形式，此处只摆出结论，不做证明。


```c++
/*
cycle sort
*/
int cycle_sort(vector<int>& vec)
{
	int i, j, temp,count;
	/*造桶*/
	for (i = 0; i<vec.size(); i++)
	{
		temp = vec[i];
		while (1)
		{
			count = 0;
			for (j = 0; j<vec.size(); j++)
			{
				if (vec[j]<temp && (j != i))
				{
					count++;
				}
			}
			while (vec[count] == temp)
			{
				if (count == i)break;
				count++;
				
			}
			temp = temp^vec[count];
			vec[count] = temp^vec[count];
			temp = temp^vec[count];
			if (i == count)break;
		}
	}
	return 0;
}

```
## 地精 排序（gnome sort）
这个算法我认为跟他的名字很搭调，地精就是生活在花园里的一种精灵，他们喜欢在土里钻来钻去。

这个算法具体操作概括为，先从左往右进行相邻元素比较，当发现一个元素不满足需要的大小关系的时候，就交换他们然后调转方向向左边冒泡，直到相邻元素满足大小关系的时候，停止冒泡。

按照这个过程，左边的一部分元素总是有序的，每次地精抓住一个元素把它插入到有序的序列内，所以这其实是插入排序的低配版，因为插入排序实际上在插入操作的时候可以优化到O(log(n),也就是二分法插入。

```c++
/*
 gnome sort
*/
int gnome_sort(vector<int>& vec )
{
	
  	int i;
	for(i=0;i<(int)(vec.size())-1;)
	{
		if(i==-1)i++;
		if(vec[i]<vec[i+1])
		{
			vec[i]=vec[i+1]^vec[i];
			vec[i+1]=vec[i+1]^vec[i];
			vec[i]=vec[i+1]^vec[i];
			i--;
		}
		else
		{
			i++;
		}
	}
	
  return 0;
}
```
## 珠排序（bead sort）
这个算法有种让人眼前一亮的感觉，[维基百科页面](https://zh.wikipedia.org/wiki/%E7%8F%A0%E6%8E%92%E5%BA%8F)
讲的会更加清楚，这个算法按照理论，只需要把珠子穿在一系列棍子上，在‘duang’的一敲，排序就完成了。不过现实很骨感，它只能排整数列，并且在编程的时候，复杂度也是n^2级别，但是这种想法的确让人惊叹，发明这个算法的人真的是天才。

这个算法实际上基本是不可用的，不过我还是写了一个实现。
```c++
/*
bead sort
*/
int bead_sort(vector<int>& vec)
{

	int i,j;
	vector<int> temp;
	temp.resize(vec.size(),0);
	/*下落*/
	for (i = 0; i<vec.size();i++)
	{
		for (j=0;j<vec.size();j++)
		{
			if (vec[j] >= i + 1)temp[i]++;
		}
	}
	vec.resize(0);
	vec.resize(temp.size(),0);
	for (i = 0; i<vec.size();i++)
	{
		for (j=0;j<vec.size();j++)
		{
			if (temp[j] >= i + 1)vec[i]++;
		}
	}
	return 0;
}
```
##　快速排序（quick sort）
这个算法采用的是分治法的思想，选取一个元素，然后遍历整个数组，小于等于这个元素的都放在这个元素左边，其余的放在它右边。这样数组就被分为三部分，这个元素本身已经处于正确的位置上，不需要再移动，而左右两部分都是无序的，但是左边部分的元素的正确位置只可能在左边，所以只要将左右两边分别排序，整个数组都有序了。

实现的时候，数组头尾各放一个指针（抽象意义的），左边指针向右移动直到有大于指定元素的时候停下来，右边指针也类似，等两边指针都停下来了，就进行一次交换，最终两个指针相遇的时候,再中间放上之前指定的那个元素，就完成了数组的分片操作。

递归的调用这个过程，最终得到的数组就是有序的。

由于这个算法递归深度为log（n）到n之间，它的复杂度也在n^2到nlogn之间，实际上他的平均复杂度是O（nlogn），既然他的名字叫做快速排序它总不能打自己脸来个n^2复杂度吧。
```c++
/*
quick sort
*/
int quick_sort(vector<int>& vec,int left,int right)
{
	int i=left+1,j=right,k,temp;
	if(left>=right)return 0;
	temp=vec[left];
	while(i<j)
	{
		while(vec[left]>=vec[i])
		{
			if(i==j)break;
			vec[i-1]=vec[i];
			i++;
		}
		while(vec[left]<vec[j])
		{
			if(i==j)break;
			j--;
		}
		if(i<j)
		{
			vec[i]=vec[i]^vec[j];
			vec[j]=vec[i]^vec[j];
			vec[i]=vec[i]^vec[j];
		}
	}
	
	vec[k]=temp;
	quick_sort(vec,left,i-2);
	quick_sort(vec,i,right);
	return 0;
}
```

## 归并排序（merge sort）

归并排序的思想也是挺直观的，对于已经有序的两个（或者n个）数列，我们只需要比较队列头部两个元素就能找出最终合并后数列的最大or最小元素。

假设我们需要从大到小排列，每次比较后把两个队头中大的那个放到新的队列，然后从待排队列中剔除它，直到其中一个列没有元素之后，就把另一列全部接到已经排序好的数列后边。

算法实现上，通过设置两个队头指针（抽象意义），用移动指针来表示元素的剔除，实现原地操作（当然就增加了时间复杂度）。

同时也用了分治法，先归并排序左半个数列，再归并排序右半边数列，最后归并排序整个数列。
```c++
/*
merge sort
*/
int merge_sort(vector<int>& vec,int l,int h)
{
	if(l>=h)return 0;
	int i,j,k,m,n;
	i=(h-l+1)/2;
	j=h-l+1-i;
	m=l;
	n=l+i;
	merge_sort(vec,l,l+i-1);
	merge_sort(vec,l+i,h);
	
  	for(;(m<n)&&(n<=h);)
	{
		if(vec[m]>=vec[n])
		{
			m++;
		}
		else
		{
			for(k=n;k>m;k--)
			{
				vec[k]=vec[k]^vec[k-1];
				vec[k-1]=vec[k]^vec[k-1];
				vec[k]=vec[k]^vec[k-1];
			}
			n++;
			m++;
		}
	}

  return 0;
}
```
## strand sort

这个算法首先给出一个有序数组（实际上选取待排数组中的第一个，就是一个有序数组了），然后遍历数组中余下的部分找到一个有序子列，具体做法是选一个元素作为子列开头，往后遍历若找到一个元素小于子列的尾部元素（这里是指的从大到小排列的情形），就从待排数组剔除这个元素，然后将它接到子列尾部。

最后将有序数组和子列归并排序，直到待排数组为空。



```c++
/*
strand sort
*/
int strand_sort(vector<int>& vec)
{
	vector<int> temp;//'有序列'
	temp.push_back(vec[0]);
	vec.erase(vec.begin());
	vector<int>::iterator i;
	int j,k,m,n;
	

	
	while(1)
	{
		n=temp.size();
		if (vec.size() == 0)break;
		for(i=vec.begin();i!=vec.end();)
		{
			if(i==vec.begin())
			{
				temp.push_back(*i);
				i++;
				continue;
			}
			if(*i<=temp.back())
			{
				temp.push_back(*i);
				i=vec.erase(i);
			}
			else
			{
				i++;
			}
			
		}
		if(n==temp.size())break;
		vec.erase(vec.begin());
		m = 0;
		for(;(m<n)&&(n<=temp.size()-1);)
		{
			if(temp[m]>=temp[n])
			{
				m++;
			}
			else
			{
				for(k=n;k>m;k--)
				{
					temp[k]=temp[k]^temp[k-1];
					temp[k-1]=temp[k]^temp[k-1];
					temp[k]=temp[k]^temp[k-1];
				}
				n++;
				m++;
			}
		}
	
	}	
    
	vec = temp;
  return 0;
}
```
## 希尔排序（shell sort）
希尔排序是选择一系列的间隔，对每个间隔把元素等距离的分为若干组，每组分别进行插入排序。

这个间隔序列的选取应该是递减的，并且最后一个间隔是1.这个算法相比于插入排序，优势在于当间隔不为1的时候进行的排序，实际上相当于在整个数列中，让元素跨过多元素进行移动，这样解决了逆序带来的复杂度的提升。
```c++
/*
shell sort
*/
int shell_sort(vector<int>& vec)
{
	int interval=10,i,j,k,len=vec.size(),cur_len;
	while(interval>0)
	{
		for(i=0;i<interval;i++)
		{
			cur_len=(len/interval)+(i<len%interval?1:0);
			for(j=0;j<cur_len-1;j++)
			{
				for(k=0;k<cur_len-1-i;k++)
				{
					if(vec[i+interval*k]<vec[i+interval*(k+1)])
					{
						vec[i+interval*k]=vec[i+interval*k]^vec[i+interval*(k+1)];
						vec[i+interval*(k+1)]=vec[i+interval*k]^vec[i+interval*(k+1)];
						vec[i+interval*k]=vec[i+interval*k]^vec[i+interval*(k+1)];
					}
				}
			}
		}
		interval=interval/1.3;
	}
	

    return 0;
}
```
## 梳子排序（comb sort）

这个算法就是希尔排序的冒泡版本，因为他按照等距离的方法把元素分为很多组，分别冒泡排序，就像梳子的齿一样，所以得名comb sort。
```c++
/*
comb sort
*/
int comb_sort(vector<int>& vec)
{
	int interval=10,i,j,k,len=vec.size(),cur_len;
	while(interval>0)
	{
		for(i=0;i<interval;i++)
		{
			cur_len=(len/interval)+(i<len%interval?1:0);
			for(j=1;j<cur_len;j++)
			{
				for(k=j;k>0;k--)
				{
					if(vec[i+interval*k]<vec[i+interval*(k-1)])
					{
						vec[i+interval*k]=vec[i+interval*k]^vec[i+interval*(k-1)];
						vec[i+interval*(k-1)]=vec[i+interval*k]^vec[i+interval*(k-1)];
						vec[i+interval*k]=vec[i+interval*k]^vec[i+interval*(k-1)];
					}
				}
			}
		}
		interval=interval/1.3;
	}
	

    return 0;
}
```
## 奇偶排序（odd_even sort）
这个算法将元素按照下标的奇偶分为两组，首先在第一组进行相邻两个元素的比较，然后在第二组进行相邻两个元素比较（相邻的定义要一致，可以都用后一个相邻，也可以都用前一个乡邻，绝对不能一个前一个后），如此循环。直到某一次进行完检查后，第一组和第二组都没有改动，这时候就说明元素已经有序了。

这个算法一看就知道只是花拳绣腿，改变一下冒泡排序的顺序而已，性能没有任何变化。

```c++
/*
odd_even sort
*/
int odd_even_sort(vector<int>& vec)
{
	int odd_len,even_len,len,j,flag=1;
	len=vec.size();
	odd_len=len/2+(len%2==0?(-1):0);
	even_len=len/2+(len%2==0?0:0);
	while(flag==1)
	{
		flag=0;
		for(j=0;j<even_len;j++)
		{
			if(vec[2*j]<vec[2*j+1])
			{
				vec[2*j]=vec[2*j]^vec[2*j+1];
				vec[2*j+1]=vec[2*j]^vec[2*j+1];
				vec[2*j]=vec[2*j]^vec[2*j+1];
				flag=1;
			}			
		}
		for(j=0;j<odd_len;j++)
		{
			if(vec[2*j+1]<vec[2*j+2])
			{
				vec[2*j+2]=vec[2*j+2]^vec[2*j+1];
				vec[2*j+1]=vec[2*j+2]^vec[2*j+1];
				vec[2*j+2]=vec[2*j+2]^vec[2*j+1];
				flag=1;
			}			
		}
		
	}
	return 0;
}
```
## 图书馆排序（library sort）
这个算法是二十一世纪才提出的，由此便看出计算机科学的活力，在数学上，那些让你觉得深不可测的东西，你一看年代，往往在几百年前就被大师上课的时候在草稿纸上解决了，等你学到21世纪的数学，你就是大师了。

这个算法灵感源于在图书馆放书的时候在书之间留下空隙，当你需要插入一本书的时候就不必移动整个架子的书。


所以我们在数组元素间留一些空隙，插入的时候就能够减少对其他元素的移动。

```c++
/*
library sort
*/
int library_sort(vector<int>& vec)
{
	const int empty_flag = -1000;

	vector<int> temp;
	temp.resize(vec.size()*2,empty_flag);
	
	int i, j, k,l, indicator;
	for (i=0;i<vec.size();i++)
	{
		
		for (j=2*i;j>=-1;j--)
		{
			if ( j == -1||(temp[j] >= vec[i]&&temp[j]!= empty_flag))
			{
				indicator = 0;
				for(l=2*i;l>j;l--)
				{
					if (temp[l] != empty_flag)
					{
						indicator = 1; break;
					}
				}
				if (indicator == 1)
				{
					if (temp[j + 1] != empty_flag)
					{

						k = j + 1;
						while (temp[k] != empty_flag)
						{
							k++;
						}
						for (; k > j + 1; k--)
						{
							temp[k] = temp[k - 1];
						}
						temp[k] = vec[i];
					}
					else
					{
						temp[j + 1] = vec[i];
					}
				}
				else
				{
					temp[i * 2] = vec[i];
				}
				break;
			}
			
		}
		
	}
	vec.resize(0);
	for (i = 0; i < temp.size(); i++)
	{
		if (temp[i] != empty_flag)
		{
			vec.push_back(temp[i]);

		}
	}

	return 0;
}
```
## bogo sort

这个算法也没有中文翻译，不过我把它作为压轴算法，它必然有过人之处，它的过人之处就是，超级慢。

这个算法思想类似于把一副牌扔向空中，掉到地上后去看看它是不是有序的，如果不是，再扔一次。

它的复杂度是O（n!）,这个东西和n^n是同阶的。可见其相当恐怖。

数学说起来太抽象，假设排十个数需要时间t，那么排20个就需要2^20\*10^10\*t，也就是大约2\*10^16\*t，我实测了一下，半分钟才能排11个数字。

这个算法存在的意义估计是挑战运算的极限吧，等有朝一日，这个算法能用于生产生活，人类文明估计就会进入新纪元了。
```c++
/*
bogo sort
*/
int bogo_sort(vector<int>& vec)
{
	int randa=1, randb=2,count=0,i,flag=1;
	while (true)
	{
		while (true)
		{
			randa = (time(NULL)+rand())%vec.size();
			randb = (time(NULL)+rand())% vec.size();
			if (randb != randa)break;
		}
		vec[randa] = vec[randa] ^ vec[randb];
		vec[randb] = vec[randa] ^ vec[randb];
		vec[randa] = vec[randa] ^ vec[randb];
		count++;
		if (count >= 1)
		{
			count = 0;
			flag = 0;
			for ( i = 0; i < vec.size()-1; i++)
			{
				if (vec[i] < vec[i + 1])
				{
					flag = 1;
					break;
				}
			}
		}

		if (flag == 0)break;
	}
	return 0;
}
```