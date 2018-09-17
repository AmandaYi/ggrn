# 呱呱农服APP ReactNative
## 技术栈
react + react-native + redux + react-redux + redux-form + axios + RESTful + ...
## 项目运行
cd ggnfrn
npm install  或 yarn (推荐)
react-native run-android
react-native run-ios
## 功能
- [ ] 登录 -- 状态进行中

## 项目规范
### 命名规范
#### 小驼峰
* 变量
* 文件名
* 文件夹名
* 导出的样式名

#### 大驼峰
* 类名

#### 大写+下划线      
* 全部的常量      ADD_DATA_BY_GO

#### servers
* ApiService 必须符合ApiService里面的测试函数定义方式,必须符合请求定义方式,具体Demo见ApiServer.js文件
* HttpService 禁止修改

### 代码函数规范
* 所有的函数均需要采用如下格式,禁止直接书写函数
```javascript
    render=()=>{
        return ();
    }
    test=()=>{
        return ();
    }
```
### 代码组件规范
* 所有的代码尽可能的做到组件分离
## 目录结构
新建文件,必须遵循以下目录结构布局方式    

├── android                                    // 项目android目录
├── app                                        // 项目RN目录--源码目录
│   ├── action                                 // Redux的Action的全部方法
│   │   ├── cartAction.js                      // 购物车Action.js               
│   │   └── loginAction.js                     // 以下类似           
│   ├── assets                                 // 静态资源,或者第三方资源         
│   ├── common                                 // [RN内部组件的二次封装],公用文件,
│   │   ├── storageUtil.js                     // [RN内部组件的二次封装],本地存储封装
│   │   └── variable.js                        // [RN内部组件的二次封装],常见样式处理封装
│   ├── components                             // 公共通用组件 
│   │   ├── normalHeader                       // 通用头部组件
│   │   └── style                              // 全部的组件的样式      
│   │       └── normalHeaderStyle.js           // 通用头部样式
│   ├── pages                                  // 全部的UI
│   │   ├── home                               // UI组件,页面一 
│   │   ├── pay                                // UI组件,页面二      
│   │   ├── provide                            // UI组件,页面三
│   │   │   ├── components                     // 当前模块页面下的组件
│   │   │   ├── images                         // 当前模块页面下的静态图片
│   │   │   ├── style                          // 当前模块页面下的样式
│   │   │   │   ├── commonStyle.js             // 当前模块的---->>>>>>>> [ 通用样式 ]
│   │   │   │   └── cartStyle.js               // 当前模块单个页面UI的样式 
│   │   │   └── cart.js                        // 当前模块的UI样式
│   │   └── supplier                           // UI组件,页面四          
│   ├── reducer                                // reducer,[ 必须按照模块进行新建文件 ]
│   │       ├── authReducer.js                 // 全部的导航路由导出口,[ 新建的router必须要在这里进行注册 appNavigator.js]
│   │       ├── cartReducer.js                 // router模块          
│   │       ├── index.js                       // router模块                   
│   │       ├── navReducer.js                  // router模块                  
│   │       └── provideReducer.js              // router模块                  
│   ├── router                                 // router导航路由,[ 必须按照模块进行新建文件 ]
│   │       ├── appNavigator.js                // 全部的导航路由导出口,[ 新建的router必须要在这里进行注册 appNavigator.js]
│   │       ├── homeStack.js                   // router模块          
│   │       ├── payStack.js                    // router模块                   
│   │       └── provideStack.js                // router模块        
│   ├── services                               // 全部的服务工具函数
│   │   ├── apiService                         // 请求接口类
│   │   │   └── apiService.js                  // 请求接口类函数,必须写到此处,必须按照里面的测试代码书写函数名          
│   │   ├── contants                           // 请求静态地址
│   │   │   └── contants.js                    // 请求静态地址        
│   │   ├── httpService                        // 请求方法类
│   │   │   └── httpService.js                 // 请求方法类封装,>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>禁止修改
│   │   ├── previewimgService                  // 图片base64预览类
│   │   │   └── previewimgService.js           // 图片base64预览类
│   │   ├── regService                         // 正则匹配类
│   │   │   └── regService.js                  // 正则匹配类,请一一添加
│   │   └── untiService                        // 工具函数类
│   │       └── untiService.js                 // 工具函数类    
│   ├── store                                  // store 文件夹          
│   ├── App.js                                 // 包装入口         
│   └── Root.js                                // 应用入口           
├── ios                                        // 项目ios目录
├── node_modeles                               // 项目依赖文件
├── .babelrc                                   // babel配置,解析JS新特性
├── .buckconfig                                // 项目配置
├── .gitattributes                             // 项目配置
├── .gitignore                                 // 项目配置
├── .watchmanconfig                            // 项目配置
├── .app.json                                  // 项目配置
├── .index.js                                  // 项目配置
├── .package.json                              // 项目依赖配置
├── .readme.md                                 // 项目配置
└── .yarn.lock                                 // 项目配置
```


