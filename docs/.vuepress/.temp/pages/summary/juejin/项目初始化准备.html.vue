<template><div><h2 id="拉取项目" tabindex="-1"><a class="header-anchor" href="#拉取项目" aria-hidden="true">#</a> 拉取项目</h2>
<h3 id="使用-ssh-config-配置文件来管理-ssh-连接" tabindex="-1"><a class="header-anchor" href="#使用-ssh-config-配置文件来管理-ssh-连接" aria-hidden="true">#</a> 使用 ssh config 配置文件来管理 ssh 连接</h3>
<p>在电脑上.ssh 文件夹中的 config 文件添加以下配置，没有就创建一个名为 config 的文件。</p>
<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre v-pre class="language-Plain"><code>  Host hostName的别名。
  HostName 是目标主机的主机名，也就是平时我们使用ssh后面跟的地址名称。
  User 指定的登陆用户名。
  Port 指定的端口号。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置本地用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置本地用户名和邮箱" aria-hidden="true">#</a> 配置本地用户名和邮箱</h3>
<p>查看当前的本地用户名和邮箱</p>
<p><code v-pre>git config user.name</code></p>
<p><code v-pre>git config user.email</code></p>
<p>重新配置本地的用户名和邮箱，会覆盖掉以前的</p>
<p><code v-pre>git config --global user.name &quot;用户名&quot;</code></p>
<p><code v-pre>git config --global user.email &quot;邮箱地址&quot;</code></p>
<p>查看配置是否成功</p>
<p><code v-pre>git config --global --list</code></p>
<h3 id="公钥" tabindex="-1"><a class="header-anchor" href="#公钥" aria-hidden="true">#</a> 公钥</h3>
<p>生成公钥 <code v-pre>ssh-keygen -t rsa -C &quot;邮箱地址&quot;</code></p>
<p>查看公钥 <code v-pre> cat ~/.ssh/id_rsa.pub</code></p>
<p>上传公钥到 gitlab</p>
<p><img src="@source/summary/juejin/img/拉取gitlab代码.assets/image-20230204160052848.png" alt="image-20230204160052848"></p>
<h3 id="克隆代码到本地" tabindex="-1"><a class="header-anchor" href="#克隆代码到本地" aria-hidden="true">#</a> 克隆代码到本地</h3>
<p><img src="@source/summary/juejin/img/拉取gitlab代码.assets/image-20230204160148757.png" alt="image-20230204160148757"></p>
<p><code v-pre> git clone 项目链接</code></p>
<h3 id="约定式提交" tabindex="-1"><a class="header-anchor" href="#约定式提交" aria-hidden="true">#</a> 约定式提交</h3>
<p><a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer">约定式提交 (conventionalcommits.org)<ExternalLinkIcon/></a></p>
<h3 id="代码上传" tabindex="-1"><a class="header-anchor" href="#代码上传" aria-hidden="true">#</a> 代码上传</h3>
<p>三种分支代表啥含义?</p>
<ul>
<li>prod 分支: 基本没有问题的代码，是 feat 特性分支经过在 dev 上的多次测试后的没问题的代码。</li>
<li>dev 分支:大家手.上各个 feat 特性分支在这里测试，都是从 feat 分支合入的。</li>
<li>feat 分支:针对单独一个需求建立的，完成这个需求后被合入 prod，结束。</li>
</ul>
<p>创建 fate 分支</p>
<p><code v-pre>git check -b feat/story-xxx-xxx</code></p>
<p><code v-pre>git add.</code></p>
<p><code v-pre>git commit -m &quot;feat：简述本次提交&quot;</code></p>
<p><code v-pre>gti push origin feat分支名称</code></p>
<p>分支被修改</p>
<blockquote>
<p>别人传了分支我怎么拉取到</p>
</blockquote>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p><code v-pre>npm i -g pnpm</code></p>
<p><code v-pre>pnpm install</code></p>
<p>运行<code v-pre>pnpm prepare</code>安装 git hook，用于在 commit 时使用 eslint 校验、prettier 格式化、commitlint 校验提交信息，校验不通过则无法提交。</p>
<p>安装插件</p>
<p><img src="@source/summary/juejin/img/拉取gitlab代码.assets/image-20230204180441975.png" alt="image-20230204180441975"></p>
<hr>
<p>Expected linebreaks to be 'LF' but found 'CRLF'.</p>
<p>如果拉取代码后⾏尾红⾊波浪线报错，底下显⽰ CRLF 是 git 设置的问题，需要执⾏</p>
<p><code v-pre>git config --global core.autocrlf false</code></p>
<p>重新拉取代码 应该显⽰的是</p>
<p><img src="@source/summary/juejin/img/项目初始化准备.assets/image-20230210023232951.png" alt="image-20230210023232951"></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>git clone http://101.35.245.109/gold-miner/juejin.git  从prod克隆代码
git checkout dev
git checkout -b 新分支名
git checkout feat/story-105-about-article-directory
git pull origin feat/story-105-about-article-directory
git add .
git commit -m "feat：简述本次提交"
git push origin feat/story-105-about-article-directory
合到dev分支
git checkout dev
git pull origin dev
解决冲突
git merge feat/story-105-about-article-directory
git push origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


