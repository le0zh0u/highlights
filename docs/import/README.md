---
lang: zh-CN
title: 从苹果图书导入
---

# 苹果图书
如果平时使用iBooks进行阅读，需要通过电脑端的软件进行导入笔记数据。

::: danger 导入数据问题
从iBooks中导入的数据，因为数据源存在问题，会导致高亮笔记与真实所在的章节存在出入。需要注意。例如在章节末的文本，可能会被归入下一个章节中。

方案构思中...
:::

## 操作
点击「导入iBooks」数据后，如果第一次导入，会出现选择文件目录的弹窗，不用选择目录，直接点击「打开」即可。

在第一次点击后，后续的同步导入，不需要再重复选择了。

![](https://raw.githubusercontent.com/le0zh0u/ImageSpace/main/picgo/20220827230348.png)

## 配置

**删除iBooks路径缓存**

在「偏好设置」中，选择「扩展」的选项页，可以看到有「iBooks导入配置」，可以在这里手动删除已经👆设置的iBooks数据目录。

## 生成章节目录

从iBooks导入的笔记会因为无法导入章节目录，使得无法通过章节结构关联笔记。这个问题会让部分功能无法正常使用，比如按照章节查看、导出、整理章节要点等等。

因此诞生了解析生成章节目录的功能，可以根据模板解析、微信读书中的HTML解析、epub的toc文件解析。

**操作路径**

在书本详情页的右上角，点击`...`「更多」按钮，选择「章节」，选择「解析生成章节」。

通过此方式生成的章节目录，会通过匹配高亮笔记中的章节名称做自动匹配。

如果完全一致则自动关联；如果不一致，可以通过编辑笔记的功能，关联到章节中。

![](https://raw.githubusercontent.com/le0zh0u/ImageSpace/main/picgo/20221025175313.png)

### 解析EPUB中的TOC文件
因为EPUB中的章节目录名称因为编码等问题，虽然输入了名称相同，但是无法和笔记关联起来的情况（后面两种情况无法顺利使用）。为此，直接解析对应EPUB文件中的目录结构，这样获取到的章节结构是可以匹配笔记中章节名称的属性值的。 **推荐使用这种方式**

第一步，将Epub文件解压缩。

第二步，进入生成的解压文件夹中，找到`toc.ncx`文件。这个文件可能直接在文件夹目录下，也可能在子文件夹下，需要找一下，但一定是有的。

第三步，将`toc.ncx`文件拖入到弹框中，然后软件会自动解析文件，生成章节。确认后没有问题，点击确认按钮，完成章节生成。


### 通过手动输入的方式生成

选择解析方式为「模板」，然后在输入框中，按照预置内容的样式，将对应的书本章节目录结构化地输入进来。

``` 模板
H1标题
+H2标题
++H3标题
H1标题
...
```

输入完成后点击「解析」，检查章节是否正确。

完成后点击右下角的「确认」按钮，会自动将章节结构保存到书本中，并根据章节名称关联对应的笔记。

### 解析微信读书章节

此方法需要借助微信读书的网页界面，提取HTML内容生成。

操作如下：

第一步，使用Chrome打开[微信读书网页端](https://weread.qq.com/)，登录后，搜素并打开需要操作的书本。
![](/images/app/20220812170230.png)

第二步，点击书本进入阅读页面，并点击右侧的目录按钮。
![](/images/app/20220812170350.png)

第三步，唤起调试工具，找到目录对应的HTML元素，右键选择复制元素
![](/images/app/20220812170756.png)

第四步，选择解析方式为「微信读书的HTML」，然后将上面复制的内容粘贴进去

第五步，完成粘贴后，进行解析，检查没问题后，点击确认，会自动将章节导入到书本当中，并自动根据笔记的章节名称进行关联。

**后两种生成目录的方法均有一个弊端：如果输入的章节名称与笔记中章节名称不匹配，则不会自动关联上。**