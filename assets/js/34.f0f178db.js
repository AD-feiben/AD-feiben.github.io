(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{569:function(t,s,a){"use strict";a.r(s);var v=a(5),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("虽然迟了一天，但还是祝各位小伙伴端午安康。")]),t._v(" "),a("p",[t._v("最近因为端午节到来，物业举办了一个网页小游戏，得分最高的前 N 名可以拿到奖品。")]),t._v(" "),a("p",[t._v("闲来无事的我参加了一下，发现自己实在是太菜了，总是玩不过别人，于是转变思路，研究看看这个小游戏是如何提交分数的。")]),t._v(" "),a("h2",{attrs:{id:"抓包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抓包"}},[t._v("#")]),t._v(" 抓包")]),t._v(" "),a("p",[t._v("通过 Charles 进行抓包，发现游戏结束时会调用 "),a("code",[t._v("commit")]),t._v(" 接口提交分数。那这就好办了，因为我们可以利用 Postman 伪造请求，从而达到 “不战而胜”。")]),t._v(" "),a("p",[t._v("如果想了解如何抓包，可以在评论区留言，有需要的话再写一篇抓包教程。")]),t._v(" "),a("h2",{attrs:{id:"接口分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口分析"}},[t._v("#")]),t._v(" 接口分析")]),t._v(" "),a("p",[t._v("抓包知道哪个接口还远远不够，因为接口最重要的还是请求参数，所以我们需要弄清楚每个参数的代表的意思，一般可以参数名可以猜出来。")]),t._v(" "),a("h3",{attrs:{id:"特殊参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊参数"}},[t._v("#")]),t._v(" 特殊参数")]),t._v(" "),a("p",[t._v("一个特殊的参数 "),a("code",[t._v("sign")]),t._v("，这个参数是签名的意思，由其他参数计算得到，作用是防止请求参数被篡改。因为参数发生变化，计算出来的签名也是不同的。服务端经过相同的计算，可以校验参数与签名是否匹配。")]),t._v(" "),a("p",[t._v("因为 "),a("code",[t._v("sign")]),t._v(" 是计算得到的，我们伪造请求同样需要计算 "),a("code",[t._v("sign")]),t._v("，那么就要知道签名算法，如何知道？我们只能通过网页源码查看。")]),t._v(" "),a("p",[t._v("现在的网页源码大部分都是经过打包工具压缩混淆，我们想要阅读是一件比较困难的事情。但是我们只需要看提交分数的部分即可，如何快速定位代码位置？答案是通过搜索字符串来定位。")]),t._v(" "),a("p",[t._v("打包工具混淆代码只能修改变量名，而字符串是不能被混淆的，我们通过字符串搜索就可以稍微快速找到对应位置的代码。比如通过接口名 "),a("code",[t._v("'commit'")]),t._v("、参数名 "),a("code",[t._v("'sign'")]),t._v(" 进行搜索，查看签名算法的逻辑。")]),t._v(" "),a("h2",{attrs:{id:"请求头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),a("p",[t._v("很多人伪造请求，都不注意请求头的参数。例如 "),a("code",[t._v("User-Agent")]),t._v(" 用户代理，即用户使用的浏览器标识、"),a("code",[t._v("Cookie")]),t._v(" 一般会携带用户信息，用于区分用户。")]),t._v(" "),a("p",[t._v("既然要伪造请求，那就要伪造的真实一点，将抓包中显示的请求头都复制到 Postman 中（"),a("code",[t._v("Content-Length")]),t._v("除外）。")]),t._v(" "),a("h2",{attrs:{id:"发起请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发起请求"}},[t._v("#")]),t._v(" 发起请求")]),t._v(" "),a("p",[t._v("一切都准备就绪，那么就可以开始利用 Postman 发起请求。因为涉及签名计算，我们可以利用 Postman 提供的 Pre-requset Script 编写请求前的计算逻辑，并将计算结果写入环境变量中，然后再使用 "),a("code",[t._v("{{}}")]),t._v(" 进行取值。")]),t._v(" "),a("p",[t._v("将 "),a("code",[t._v("sign")]),t._v(" 保存到环境变量中")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sign'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sign"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("变量的使用\n"),a("img",{attrs:{src:"https://feiben-1253434158.cos.ap-guangzhou.myqcloud.com/PicGo/sign.png",alt:"变量的使用"}})]),t._v(" "),a("p",[t._v("到这里就可以发起请求了，从而达到 “不战而胜” 的效果。当然了，这种做法破坏了游戏的公平性，是不可取的。不过我们可以从中吸取经验，多思考问题，提升自身的技能。")]),t._v(" "),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),a("p",[t._v("换位思考一下，假如这个小游戏是我们自己开发的，那么请你思考这几个问题。")]),t._v(" "),a("ol",[a("li",[t._v("我们的应用该如何提高安全性，如何防止源码被轻易解读？")]),t._v(" "),a("li",[t._v("我们如何去发现识别这类伪造请求？")])]),t._v(" "),a("p",[t._v("欢迎评论区留言讨论，也可以 wx 搜索 "),a("code",[t._v("fe_develop6")]),t._v(" 一起在群里学习讨论。最后别忘了关注我，点赞来一波哦~")]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[t._v("该方法并不适用所有游戏，请自行分辨；")]),t._v(" "),a("li",[t._v("本文仅供学习，如产生不良后果，本文概不负责；")]),t._v(" "),a("li",[t._v("转载请标明出处 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/PlBb1XzRo_JcBEi0sMCYFw",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术人玩小游戏，如何“不战而胜”"),a("OutboundLink")],1),t._v(" @前端develop。")])])])}),[],!1,null,null,null);s.default=_.exports}}]);