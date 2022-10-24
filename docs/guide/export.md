# 导出

## 导出到Markdown
在书本详情页中，右上角的菜单栏中找到「导出」菜单，可以选择
- 导出Markdown文件
- 复制Markdown格式

**导出Markdown文件**

点击后，指定到对应的文件夹，会生成以书名为文件名的Markdown文件。

**复制Markdown格式**

点击后，会将书本以Markdown的格式保存到剪切板中，在目标位置粘贴即可获得内容。

## 导出设置
在「偏好设置」中，找到「导出」的标签页。

### 导出块内容
通过可视化的界面自己选择导出的内容中需要包含的部分。

已有选项：
- 高亮文本
- 闪念笔记
- 标签
- 直接跳转到阅读器地址

![](https://raw.githubusercontent.com/le0zh0u/ImageSpace/main/picgo/20221024230927.png)

如果觉得不够直观，可以切换成简单视图。

### 导出Markdown

**包含章节**

在导出Markdown内容时，

- 如果打开，意味着会以章节为二级标题进行导出。
- 如果关闭，意味着会只导出划线文本内容。

**转义特殊字符**

在导出Markdown内容时，如果包含以下特殊字符，会在该字符前加上转义符`\`，尽量确保导出的markdown文件在Obsidian等管理软件中不会出现异常。

``` swift
case slash = "/"
case asterisk = "*"
case underline = "_"
case numberSign = "#"
case exclamationMark = "!"
case lessThanSign = "<"
case greaterThanSign = ">"
case squareBracketsOpen = "["
case squareBracketsClose = "]"
```
