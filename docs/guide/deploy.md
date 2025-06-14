# 系统部署


`wl-admin`提供两种部署方式
* **`Nginx`部署**：将前端服务单独部署到`Nginx`服务器，大多数前后端分离项目常规做法，需要安装`Nginx`。
* **前后端一体部署**，将前端代码打包后放到后端`Springboot`服务中，只需要发布一个jar包即可，不需要安装web服务器，适合功能简单，体量较小的项目。


## 后端部署

* 请提前在服务器上安装好`JDK`环境

### 打包

* 使用`idea`打包，直接在`idea`中右侧找到`maven`，在`Lifecycle`中双击`package`

* 如果你想使用命令打包
```shell
# 进入项目根目录
cd wl-admin

# 执行打包命令
mvn clean package
```

### 发布

#### Linux系统（推荐）
```shell
# 一般使用nohup命令后台运行
nohup java -jar wl-admin.jar >wl-admin.log 2>&1 &

# 查看运行情况
ps -ef | grep java

# 如果你不需要wl-admin.log文件
nohup java -jar wl-admin.jar >/dev/null 2>&1 &
```
::: tip
1.请切换成自己上传的jar包名字

2.`>>`是追加，`>` 是覆盖
:::

#### Windows系统

```shell
# 进入包目录
cd wl-admin\target

# 避免中文乱码
chcp 65001

# 运行
java -jar wl-admin.jar
```
* 也可以创建一个`bat`文件

```shell
@echo off
chcp 65001

title 系统名字

:: 设置要检测的端口
set PORT=9000
:: 设置jar名称
set JAR=wl-admin.jar
:: 设置日志文件名
set LOG=wl-admin.log

:: 检查端口是否被占用
netstat -ano | findstr "%PORT%" > nul
if %ERRORLEVEL% equ 0 (
    echo 端口 %PORT% 已被占用，请检查。
    pause
    exit /b
) else (
    echo 开始运行程序，请勿关闭本窗口，并在 "%LOG%" 文件中检查运行详情...
)

java -jar "%JAR%" >> "%LOG%" 2>&1


:: 检查程序是否成功启动
if !ERRORLEVEL! neq 0 (
    echo 程序启动失败，请检查 "%LOG%" 文件获取更多信息。
    echo 程序启动失败，请检查 "%LOG%" 文件获取更多信息。
    echo 程序启动失败，请检查 "%LOG%" 文件获取更多信息。
    pause
    exit /b !ERRORLEVEL!
)

exit
pause

```

## 前端部署

### Nginx部署（推荐）

::: tip
这种方式需要你在`Windows`或`Linux`安装`Nginx`，请自行百度~
:::

```shell
# 打包
npm run build
```
* 将打包后的文件（项目根目录下的`dist`文件夹）放到服务器，并配置好`Nginx`
* `Nginx`参考配置
```

```

## 前后端一体部署

* 在后端服务`src/main/resources`下创建`static`文件夹
* 前端打包（使用`.env.spring`环境打包）
```shell
# 打包
npm run build:spring
```
* 将前端打包的文件（`dist`下所有文件）放到`static`下
* 在`WebSecurityConfig`中`webSecurityCustomizer`方法中放行前端资源

```java
@Bean
public WebSecurityCustomizer webSecurityCustomizer() {
    return new WebSecurityCustomizer() {
        @Override
        public void customize(WebSecurity web) {
            // 放行登录接口
            web.ignoring().requestMatchers("/login", "/getCaptcha","/refreshToken","/avatar/**")
            // 放行前端资源目录
            .and().ignoring().requestMatchers("/assets/**","/index.html","logo.ico","/page/**");// [!code ++]
        }
    };
}
```

* 添加页面转发`PageController`

```java
package com.gltqe.wladmin.system.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 页面跳转控制器
 * @author gltqe
 * @date 2024/11/22 11:13
 */
@Controller
public class PageController {
    @RequestMapping(value = "/page/**")
    public String redirect() {
        return "forward:/index.html";
    }
}

```
* 参考后端部署，将后端代码打`jar`包部署到服务器
* 访问地址变为：`http://localhost:9000/wl/page`