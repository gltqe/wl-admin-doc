# 快速开始

## 准备环境

由于`wl-admin`采用的都是技术栈相对较新的稳定版本，所以你可能需要更改你现有的环境。

* 本项目是前后端分离的，前后端都运行成功才能登录

> [!IMPORTANT]
>JDK >= 17 （推荐21）
>
>Mysql >= 8 （推荐8.0.33）
>
>Maven >= 3.6 （推荐3.9.8）

* 常用下载站点：

[OpenJdk](https://jdk.java.net/archive/)

[Mysql](https://downloads.mysql.com/archives/installer/)

[Maven](https://maven.apache.org/download.cgi)

## 后端代码
1.下载代码
```shell
# 克隆到本地
git clone https://gitee.com/gltqe/wl-admin.git
```
2.导入`idea`，等待`maven`依赖下载完成

3.运行`redis`数据库

4.创建`mysql`数据库，执行`wl-admin/sql`下的`wl-admin.sql`

> [!TIP]
>字符集：utf8mb4
>
>排序规则：utf8mb4_general_ci

5.修改`yml`
```yml
driver-class-name: com.mysql.cj.jdbc.Driver
url: jdbc:mysql://IP:端口/数据库?useSSL=false&useUnicode=true&characterEncoding=utf-8&zeroDateTimeBehavior=convertToNull&allowPublicKeyRetrieval=true&serverTimezone=Asia/Shanghai
username: 用户名
password: 密码
```
> [!TIP]
> 需要修改为自己的数据库IP地址、端口、用户名、密码

## 前端代码

```shell
# 克隆到本地
git clone https://gitee.com/gltqe/wl-admin-ui.git

# 进入项目根目录
cd wl-admin-ui

# 安装依赖
npm install

# 启动开发环境
npm run dev

```

* 前端开发工具可以使用`idea`或者`vscode`
* 打开浏览器进入[http://127.0.0.1:8000](http://127.0.0.1:8000)
* 输入账号密码：admin/123
* 正常进入页面即运行成功
