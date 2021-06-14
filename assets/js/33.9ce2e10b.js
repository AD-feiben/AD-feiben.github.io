(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{567:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("最近这段时间下班回家之后一直在写小程序，导致了最近很长一段时间都没更新文章，刚好利用这次假期，总结一下这段时间的工作。")]),s._v(" "),a("h2",{attrs:{id:"为什么要写小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要写小程序"}},[s._v("#")]),s._v(" 为什么要写小程序？")]),s._v(" "),a("p",[s._v("其一，工作了几年了，都没有在实际项目中开发过小程序，为了提升自己的技术面，所有这段时间又捡起了小程序。")]),s._v(" "),a("p",[s._v("其二，小程序出来没多久的时候，其实是有写过一些 demo 来练手的，但是因为当时没有服务器，有服务器的时候又觉得各种配置太过繁琐，导致了我对小程序并不是太在意，也就就只是写了一些样式在本地看看。")]),s._v(" "),a("p",[s._v("最近这段时间 Serverless 的概念很火，于是想利用小程序云开发来了解一下 Serverless。而且用了云开发之后，少去了各种繁琐的配置，例如获取 access token、验签等各种繁琐的操作，最重要的是可以不用花钱买服务器。想到这里就大大提升了开发一个小程序的兴致。")]),s._v(" "),a("p",[s._v("其三、现有的很多小程序都贴满了各种广告，这其实就是开发者的一个盈利模式。假如我的小程序也能够贴广告的话，那也是增加收入的一个方式。")]),s._v(" "),a("p",[s._v("一举三得，那为什么还不开发一个小程序呢？回到重点，关注 Serverless。")]),s._v(" "),a("h2",{attrs:{id:"什么是-serverless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-serverless"}},[s._v("#")]),s._v(" 什么是 Serverless")]),s._v(" "),a("p",[s._v("最近在掘金、朋友圈经常看到 Serverless，一开始看到 server 还以为是后端的技术。了解之后才发现原来这玩意更倾向前端。")]),s._v(" "),a("p",[s._v("那 Serverless 到底是什么呢？")]),s._v(" "),a("p",[s._v("根据 CNCF 的定义，无服务器计算是指构建和运行不需要服务器管理的应用程序的概念。")]),s._v(" "),a("blockquote",[a("p",[s._v("Serverless computing refers to the concept of building and running applications that do not require server management. --- CNCF")])]),s._v(" "),a("p",[s._v("Severless 可以分为两个部分 FasS + BasS")]),s._v(" "),a("h3",{attrs:{id:"fass-function-as-a-service-函数即服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fass-function-as-a-service-函数即服务"}},[s._v("#")]),s._v(" FasS (Function as a Service) 函数即服务")]),s._v(" "),a("p",[s._v("FasS 就是一些运行函数的平台，例如小程序中的云函数、阿里云的函数计算等。")]),s._v(" "),a("p",[s._v("当驱动函数执行的事件到来的时候，首先需要下载代码，然后启动一个容器，在容器里面再启动一个运行环境，最后才是执行代码。")]),s._v(" "),a("p",[s._v("在小程序云开发的 demo 中提供了一个 "),a("code",[s._v("login")]),s._v(" 的云函数模板。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 云函数模板")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端\n *\n * event 参数包含\n * - 小程序端调用传入的 data\n * - 经过微信鉴权直接可信的用户唯一标识 openid\n *\n */")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("main")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可执行其他自定义逻辑")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console.log 的内容可以在云开发云函数调用日志查看")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    openid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("在小程序端可以使用 "),a("code",[s._v("wx.cloud.callFunction")]),s._v(" 调用云函数")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("callFunction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("globalData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("complete")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("对于前端来说调用云函数其实和调用接口比较类似，似乎体现不了 Serverless 的优势。但站在后端开发的角度，使用 Serverless 之后，后端无需搭建运行环境，能够更专注于业务，进行快速开发。")]),s._v(" "),a("p",[s._v("当然了，云函数的业务也可以由前端实现。")]),s._v(" "),a("h3",{attrs:{id:"bass-backend-as-a-service-后端即服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bass-backend-as-a-service-后端即服务"}},[s._v("#")]),s._v(" BasS (Backend as a Service) 后端即服务")]),s._v(" "),a("p",[s._v("这里的 Backend 指的是一些后端云服务，例如云数据库、云存储等。")]),s._v(" "),a("p",[s._v("在小程序的云开发中当然也提供了数据库及存储。")]),s._v(" "),a("p",[s._v("小程序云开发的 demo 里提供了上传图片、操作数据库的例子，这里就拿在小程序端操作数据库作为例子，当然在云端同样可以操作数据库，这里就不过多举例。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" db "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查询当前用户所有的 counters")]),s._v("\ndb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("collection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'counters'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    _openid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("openid\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            queryResult"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[数据库] [查询记录] 成功: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("fail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'none'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'查询记录失败'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[数据库] [查询记录] 失败：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("小程序提供的是一个 NoSQL 的数据库，首先需要回去数据库对象，然后通过 collection 获取集合进行操作。")]),s._v(" "),a("p",[s._v("这里可以看出在 Serverless 的架构下，前端的权限更大了，都可以在客户端直接操作数据库了。")]),s._v(" "),a("p",[s._v("还有在客户端直接操作存储的 demo，这里就不再举例。")]),s._v(" "),a("h2",{attrs:{id:"serverless-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-的特点"}},[s._v("#")]),s._v(" Serverless 的特点")]),s._v(" "),a("p",[a("strong",[s._v("事件驱动")])]),s._v(" "),a("p",[s._v("函数在 FaaS 平台中，需要通过事件来驱动函数执行。例如触发器（定时器）、客户端调用等。")]),s._v(" "),a("p",[a("strong",[s._v("无状态")])]),s._v(" "),a("p",[s._v("因为每次执行函数，使用的容器不一定相同，所以无法进行内存或数据共享。如果要共享数据，则只能通过第三方服务。")]),s._v(" "),a("p",[a("strong",[s._v("无运维")])]),s._v(" "),a("p",[s._v("使用 Serverless 并不需要关心服务器。")]),s._v(" "),a("p",[a("strong",[s._v("低成本")])]),s._v(" "),a("p",[s._v("使用 Serverless 只需为函数执行付费，函数不执行则不花钱。")]),s._v(" "),a("p",[s._v("以上内容参考自"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/65914436",target:"_blank",rel:"noopener noreferrer"}},[s._v("Serverless 掀起新的前端技术变革"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"使用-serverless-与传统应用开发的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-serverless-与传统应用开发的区别"}},[s._v("#")]),s._v(" 使用 Serverless 与传统应用开发的区别")]),s._v(" "),a("p",[s._v("传统应用开发，需要前后端进行开发、联调，开发完需要将前后端的代码部署到服务器上，这就少不了对服务器的运维。包含运行环境搭建、前后端部署等等。")]),s._v(" "),a("p",[s._v("而使用 Serverless 之后，直接上传云函数就可以部署。无需使用服务器，省去了许多运维成本。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("Serverless 比较适合用于短时间内处理大量数据的需求，使用了 Serverless 可以避免资源浪费。")]),s._v(" "),a("p",[s._v("具体落地项目可以参考"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/100651901",target:"_blank",rel:"noopener noreferrer"}},[s._v("听上去很美的 Serverless 在中国落地的怎么样了？"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("也许现在公司还不会使用 Serverless，但是多了解一门技术，将来在遇到这样的需求时，才会想起 Serverless 这个选择。")]),s._v(" "),a("p",[s._v("如果想体验 Serverless，还是比较推荐微信小程序云开发，对个人来说使用微信小程序云开发确实非常容易上手。")]),s._v(" "),a("p",[s._v("最后的最后，推广一下我的小程序【实用工具包】")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/%E5%89%8D%E7%AB%AF/8.png",alt:"实用工具包"}})]),s._v(" "),a("p",[s._v("本来想开发一个待办提醒，因为有时候快递到了，下班回家需要拿快递，经常到了家才想起来快递没拿。")]),s._v(" "),a("p",[s._v("功能开发完没想到审核不通过，因为涉及备忘录，需要企业主体的小程序。无奈只能屏蔽待办提醒，目前只有视频去水印功能，欢迎各位小伙伴扫码体验，如有需求或者建议也可以在评论区留言。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("如果有讲的不对的地方，还请各位大佬指点。")]),s._v(" "),a("p",[s._v("如果觉得内容还不错的话，希望小伙伴可以帮忙点赞转发，给更多的同学看到，感谢感谢！")]),s._v(" "),a("p",[s._v("如果你喜欢我的文章，还可以关注我的公众号【前端develop】")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/qrcode.png",alt:"前端develop"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);