(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{573:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是持续集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是持续集成"}},[s._v("#")]),s._v(" 什么是持续集成")]),s._v(" "),a("p",[a("strong",[s._v("持续集成（Continuous integration，简称CI）是指频繁地将代码集成到主干。")])]),s._v(" "),a("p",[s._v("持续集成的好处可以帮助我们快速发现错误，集成到主干前需要经过自动测试，如果过程中出现错误，将无法完成此次集成，这是其一。")]),s._v(" "),a("p",[s._v("第二点好处是可以防止分支与主干的偏差过大，导致集成难度变大。假如在分支发开时，没有及时集成到主干，而主干又在不断更新，将会导致分支与主干的偏差过大，最终导致难以集成。")]),s._v(" "),a("p",[s._v("使用持续集成工具还能够替我们完成繁琐的工作，例如自动部署等。")]),s._v(" "),a("p",[s._v("持续集成的工具非常多，例如 "),a("code",[s._v("Travis CI")]),s._v("、"),a("code",[s._v("Jenkins")]),s._v("、"),a("code",[s._v("Gitlab CI")]),s._v(" 等等。本文将简单介绍一下 "),a("code",[s._v("Travis CI")]),s._v(" 的使用。")]),s._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")]),s._v(" "),a("p",[s._v("Travis 是一款流行的 CI 工具，可免费用于开源项目。在托管时，不必依赖任何平台。Travis CI 工具为许多构建配置和语言提供支持。")]),s._v(" "),a("p",[s._v("前段时间写了个 Python 的项目，才开始了解到了 "),a("code",[s._v("Travis CI")]),s._v("。在项目的根目录添加了 "),a("code",[s._v(".travis.yml")]),s._v(" 文件进行配置，当代码发生变动时，Travis CI 将会执行测试脚本，通过测试后将代码打包成 Docker 镜像并推送到官方仓库。")]),s._v(" "),a("p",[s._v("这两天我用 VuePress 搭建了一个新的博客站点 "),a("a",{attrs:{href:"http://blog.fedevelop.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.fedevelop.cn"),a("OutboundLink")],1),s._v("，刚好利用 Travis CI 实现部署的工作，省下了宝贵的时间。")]),s._v(" "),a("h2",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("p",[s._v("下面我将自动部署博客的应用作为例子，带大家熟悉持续集成工具。")]),s._v(" "),a("p",[s._v("首先在我的 VuePress 项目里添加 "),a("code",[s._v(".travis.yml")]),s._v(" 文件。我的内容只有简单 3 行，如下")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定语言")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" npm run deploy\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("code",[s._v("deploy")]),s._v(" 命令是我在 "),a("code",[s._v("package.json")]),s._v(" 中定义好的一个命令，内容如下")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("bash deploy.sh")]),s._v(" 意思是执行 "),a("code",[s._v("deploy")]),s._v(" 这个 "),a("code",[s._v("shell")]),s._v(" 脚本, "),a("code",[s._v("deploy.sh")]),s._v(" 的内容如下")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成静态文件的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blogs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto push"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${token}")]),s._v("@github.com/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".github.io.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f --set-upstream origin master\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("意思为先执行 "),a("code",[s._v("npm run build")]),s._v(" 命令进行编译，如果报错的话，Travis 将不会进行下面的操作。如果编译没有报错的话，将会进入 "),a("code",[s._v("blogs/.vuepress/dist")]),s._v(" 目录，将里面的内容推送到我的 GitHub Page 项目，完成部署工作。")]),s._v(" "),a("p",[s._v("其中 "),a("code",[s._v("${token}")]),s._v(" 将会获取 Travis 中设置的环境变量。涉及隐私的数据，我们可以通过环境变量的方式来传递。下面我们就来看如何设置。")]),s._v(" "),a("p",[s._v("下一步打开 Travis 官网 "),a("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://travis-ci.org"),a("OutboundLink")],1),s._v(" 可以看到右上角的 "),a("code",[s._v("Sign in with GitHub")]),s._v(" 即用 "),a("code",[s._v("GitHub")]),s._v(" 账号登录。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/%E5%B7%A5%E5%85%B7/0.jpeg",alt:"Travis 官网"}})]),s._v(" "),a("p",[s._v("完成登录后，进入设置页，可以看到本人的 GitHub 的项目，找到 VuePress 的项目。如果项目过多，找不到项目，可以点击 "),a("code",[s._v("Sync account")]),s._v(" 按钮同步账户。接下里进入设置页，这里我们可以设置监听的分支、环境变量等。")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/%E5%B7%A5%E5%85%B7/1.jpeg",alt:"设置页"}})]),s._v(" "),a("p",[s._v("其中 Environment Variables 为环境变量，Cron Jobs 为定时任务。在 "),a("code",[s._v(".travis.yml")]),s._v(" 中可以使用 "),a("code",[s._v("${key}")]),s._v(" 取得环境变量中的值。")]),s._v(" "),a("p",[s._v("因为从 Travis 提交代码到 GitHub 默认是会被拒绝的，我们需要加上 access_token，我的项目里设为了 token。")]),s._v(" "),a("p",[s._v("接下来就可以去 GitHub "),a("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/settings/tokens"),a("OutboundLink")],1),s._v(" 获取 access_token，点击 "),a("code",[s._v("Generate new token")]),s._v(" 按钮，将生成好的 access_token 复制到 Travis 的环境变量中。到这里就算配置完成。")]),s._v(" "),a("p",[s._v("接下来只要我的提交代码，Travis 就会帮我构建部署，这样我就省去了许多部署的时间。")]),s._v(" "),a("p",[s._v("关于 "),a("code",[s._v(".travis.yml")]),s._v(" 的配置还有很多，如果感兴趣也可以到 Travis 官网查看文档。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("如果你喜欢我的文章，希望可以关注一下我的公众号【前端develop】")]),s._v(" "),a("p",[a("img",{attrs:{src:"/imgs/qrcode.png",alt:"前端develop"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);