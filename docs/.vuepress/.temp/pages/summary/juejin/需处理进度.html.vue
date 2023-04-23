<template><div><ul>
<li>
<p>[x] 该处理的样式都处理了</p>
</li>
<li>
<p>[x] button写样式</p>
</li>
<li>
<p>[x] 切换 markdowncss主题切换</p>
</li>
<li>
<p>[x] 根据屏幕size进行处理</p>
</li>
<li>
<p>[x] 重构代码</p>
</li>
<li>
<p>[x] 接收端口数据</p>
</li>
<li>
<p>[x] 页面刷新先回到顶部，又转跳回当前位置</p>
</li>
<li>
<p>[x] 用户等级图标，想要动态绑定作者的level信息</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>:src="require(`~/assets/img/lv/lv-${authorInfo.level}.png`)"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="img/需处理进度.assets/image-20230218095504480.png" alt="image-20230218095504480"></p>
<p>首先nuxt3不支持require</p>
<p>http://localhost:3000/_nuxt/assets/img/lv/lv-4.png  这是正确的链接地址</p>
<p>https://zenn.dev/one_dock/articles/77cd256c887204</p>
<p><img src="img/需处理进度.assets/image-20230219101424986.png" alt="image-20230219101424986"></p>
<p>https://github.com/nuxt/nuxt/issues/12797</p>
<hr>
<p>https://nuxt.com/docs/getting-started/assets#public-directory</p>
<p>静态文件</p>
<ul>
<li>[x] 判断是否为广告</li>
<li>[x] 文章封面的图片，没有就不要显示了</li>
<li>[x] 相关文章转跳，使用NuxtLink路由但是页面未刷新</li>
</ul>
<p>https://nuxt.com/docs/api/components/nuxt-link</p>
<p>改NuxtLink为a标签</p>
<p>很怪异好吧，to=&quot;https://nuxtjs.org&quot; to链接行，</p>
<p>:to=&quot;`/article/${i.id}`&quot; 不行</p>
<p>带动态参的NuxtLink，不适合在Page文件夹之外使用</p>
<p><img src="img/需处理进度.assets/image-20230219100021893.png" alt="image-20230219100021893"></p>
<ul>
<li>[ ] 文章预览没有数据界面</li>
</ul>
<p>https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/ca1e08b7f30860aecb1b7bb31ae18e50.svg</p>
<ul>
<li>[x] 回到顶部</li>
</ul>
<p>呜呜呜在三条分支里摸爬滚打</p>
<p>样式在队友的手机上不兼容</p>
<p><img src="img/需处理进度.assets/image-20230223110020022.png" alt="image-20230223110020022"></p>
<p>类名优先级小了<img src="img/需处理进度.assets/image-20230223110041058.png" alt="image-20230223110041058"></p>
<p>被改成了</p>
<p><img src="img/需处理进度.assets/image-20230223110325451.png" alt="image-20230223110325451"></p>
</div></template>


