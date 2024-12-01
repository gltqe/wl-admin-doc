# 项目简介
## 介绍
源于同事的一句：“你做了这么久JavaWeb，有没有自己写的一套管理后台？”，`wl-admin`被创建了。

如你所见，`wl-admin`是基于`JDK21`、`Springboot3`、`Vue3`开发的，技术栈采用的都是相对较新的稳定版本，未来也会持续更新相关依赖。

`wl-admin`的目标是成为代码简约、功能完善，能适用于大多数场景的管理后台。

## 源码下载

后端代码：[wl-admin](https://gitee.com/gltqe/wl-admin)

前端代码：[wl-admin-ui](https://gitee.com/gltqe/wl-admin-ui)

## 软件架构

* 运行环境：JDK21、Nodejs18.20.0、Maven3.9.8
* 后端框架：SpringBoot3.x、SpringSecurity3.x、MybatisPlus3.5.x、DynamicDatasource3.x、Quartz3.x
* 前端框架：Vue3.x、ElementPlus2.x、Axios1.7.x、echarts5.x
* 数据库：Mysql8.x、redis5.x
* web服务器：Nginx1.x

::: tip
所有技术栈版本都会持续更新，保持最新稳定版
:::

## 功能模块

### 系统管理

* 用户管理：系统用户基本信息的增删改查，修改密码等
* 菜单管理：控制左侧菜单栏和按钮的增删改查，可无限嵌套
* 部门管理：机构或部门的组织结构
* 角色管理：功能权限与数据权限，都通过角色与用户关联
* 职位管理：用户职位
* 参数配置：配置系统参数，例如：是否启用验证码
* 字典配置：维护固定参数值
* 接口限制：用于配置接口访问次数，针对每个接口分为单用户和全部用户限制，基于`redis`+`lua`

### 系统监控

* 定时任务：基于`Quartz`的定时任务模块
* 服务监控：监控内存，CPU，服务器信息
* 操作日志：通过自定义日志注解，记录操作
* 登录日志：记录登录用户信息
* 在线用户：查看当前在线用户