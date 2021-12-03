# 简介
表单设计器前端代码


# 开发环境

## 安装依赖
>npm install 或者 npm i 

## 启动服务

>npm run dev  

启动服务请先配置项目根目录下的dev-config.js文件  
启动服务，请先检查配置端口是否被占用

# 生产环境

## 打包
>npm run build

打包会将项目打包成静态资源文件到public文件夹下


### puclic文件夹目录
- index.html    ----------------------项目挂载html
- img --------------------------------图片资源
- js ---------------------------------静态js文件
- css --------------------------------静态css文件

# 项目目录结构
- images 项目静态图片
- script 服务脚本  
  - config 打包配置文件
  - utils 脚本工具类
  - bulid.js 打包项目js脚本
  - dev.js 开发环境服务脚本
- src 项目源码
  - components 项目组件
  - config 路由配置文件夹
  - pages 页面配置文件夹
  - utils 工具类
  - app 项目入口组件
  - @design 用于表单设计中开发可拖拽的控件库
    - components 表单设计控件存放文件夹
    - control-dill.ts 系统要拖拽的控件列表配置文件
    - control-map.ts 约定控件的type类型配置文件
    - control-options-map.ts 配置控件具有的属性
  - @magpie_cloud 用于规范表单设计组件开发的规范接口等

