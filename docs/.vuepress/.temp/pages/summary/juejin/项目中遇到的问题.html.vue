<template><div><p>菜狗啊 要被沙爆啦</p>
<p>对 Nuxt3 不熟悉，官方文档看英文相当吃力，底力不足，学艺不精</p>
<p>不敢合并项目，担心修改冲突的时候搞坏代码</p>
<h3 id="页面刷新或转跳后-页面停留在之前滚动位置" tabindex="-1"><a class="header-anchor" href="#页面刷新或转跳后-页面停留在之前滚动位置" aria-hidden="true">#</a> 页面刷新或转跳后，页面停留在之前滚动位置</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History/scrollRestoration" target="_blank" rel="noopener noreferrer">History.scrollRestoration - Web API 接口参考 | MDN (mozilla.org)<ExternalLinkIcon/></a></p>
<p>其实浏览器提供了原生的 API ，滚动后每次都回到顶部。</p>
<p>https://stackoverflow.com/questions/69902990/page-not-scrolling-to-top-when-route-changes-in-nuxt-js</p>
<p><img src="img/项目中遇到的问题.assets/image-20230224144200572.png" alt="image-20230224144200572"></p>
<p>The router property lets you customize Nuxt router. (vue-router ).</p>
<p>nuxt3表示还不支持回到顶部。</p>
<p><img src="img/项目中遇到的问题.assets/image-20230224150050618.png" alt="image-20230224150050618"></p>
<p><a href="https://nuxtjs.org/docs/configuration-glossary/configuration-router#scrollbehavior" target="_blank" rel="noopener noreferrer">Nuxt - The router Property (nuxtjs.org)<ExternalLinkIcon/></a></p>
<p><em>~/app/router.scrollBehavior.ts</em></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import type { RouterOptions } from '@nuxt/schema';

export default &lt;RouterOptions>{
  scrollBehavior() {
    return { top: 0 };
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="动态绑定作者的level图片" tabindex="-1"><a class="header-anchor" href="#动态绑定作者的level图片" aria-hidden="true">#</a> 动态绑定作者的level图片</h3>
<p>以往vue中绑定图片</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>:src="require(`~/assets/img/lv/lv-${authorInfo.level}.png`)"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="img/项目中遇到的问题.assets/image-20230218095504480.png" alt="image-20230218095504480"></p>
<p>nuxt3不支持require</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>:src="`~/assets/img/lv/lv-${authorInfo.level}.png`"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="服务器上运行时图片无法显示-而且图片地址不正确" tabindex="-1"><a class="header-anchor" href="#服务器上运行时图片无法显示-而且图片地址不正确" aria-hidden="true">#</a> 服务器上运行时图片无法显示，而且图片地址不正确</h3>
<p>https://nuxt.com/docs/getting-started/assets#public-directory</p>
<p><strong>nuxt</strong>使用<code v-pre>assests/</code>与<code v-pre>public/</code>目录来处理css样式，字体，图片等资产。</p>
<ul>
<li><code v-pre>assests/</code>用于添加将由构建工具（Webpack或Vite）处理的所有网站资产。</li>
<li><code v-pre>public/</code>用于添加将由服务器提供的资产。</li>
</ul>
<p><img src="img/项目中遇到的问题.assets/image-20230224150900933.png" alt="image-20230224150900933"></p>
<h3 id="nuxt3中获取数据的方法" tabindex="-1"><a class="header-anchor" href="#nuxt3中获取数据的方法" aria-hidden="true">#</a> Nuxt3中获取数据的方法</h3>
<ol>
<li>数据获取的方法：useAsyncData ，useLazyAsyncData ，useFetch ，useLazyFetch（注意：他们只能在setup或者是生命周期钩子中使用）；</li>
<li>跨组件状态共享 useState （useState 仅在 setup 和 生命周期钩子 中生效） ；</li>
<li>访问运行时配置 useRuntimeConfig （useRuntimeConfig 仅在 setup函数 或 生命周期钩子 内有效）（注意：客户端和服务器端的行为是不同的）；</li>
</ol>
<h3 id="获取服务器的url" tabindex="-1"><a class="header-anchor" href="#获取服务器的url" aria-hidden="true">#</a> 获取服务器的URL</h3>
<p>https://nuxt.com/docs/api/composables/use-runtime-config</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { useRuntimeConfig } from '#imports';
const runtimeConfig = useRuntimeConfig();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;img
  class="rank"
  :src="`${runtimeConfig.app.baseURL}img/lv/lv-${authorInfo.level}.png`"
  :alt="authorInfo.level"
/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="nuxt3配置不同开发环境" tabindex="-1"><a class="header-anchor" href="#nuxt3配置不同开发环境" aria-hidden="true">#</a> Nuxt3配置不同开发环境</h3>
<p>https://blog.csdn.net/aizenmoxiguan/article/details/127527689</p>
<ul>
<li>多个开发环境：根目录下创建env文件夹，文件夹中创建需要配置不同环境的.env.名字</li>
<li>单个开发环境：根目录下创建 .evn 文件</li>
</ul>
</div></template>


