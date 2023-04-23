<template><div><p>https://blog.csdn.net/m0_48489737/article/details/127325786</p>
<p>npx nuxi init nuxt-app</p>
<p>npm install</p>
<p>npm run dev</p>
<blockquote>
<p>这里写下自己负责的部分实现</p>
</blockquote>
<h2 id="文章预览" tabindex="-1"><a class="header-anchor" href="#文章预览" aria-hidden="true">#</a> 文章预览</h2>
<p>后台传html还是md？</p>
<ol>
<li>后台数据传html。这样只需要预览html文本。这就想到v-md-editor中有html预览组件。( https://code-farmer-i.github.io/vue-markdown-editor/zh/examples/preview-html-demo.html )</li>
<li>后台数据传md。尝试使用mavon-editor ( https://github.com/hinesboy/mavonEditor ) 回显，因为要使用window对象，而nuxt使用服务器渲染，所以需要配置<code v-pre>ssr: false</code>或者<no-ssr></no-sssr>标签，这违反了要求 。</li>
</ol>
<blockquote>
<p>出大问题，改为nuxt3后我不懂得如何正确引用支持vue3的插件</p>
</blockquote>
<h3 id="markdown转为html" tabindex="-1"><a class="header-anchor" href="#markdown转为html" aria-hidden="true">#</a> markdown转为html</h3>
<p>在网上搜索如何引入markdown相关插件到nuxt3时，然后意外搜索到了  https://github.com/nuxt-community/markdownit-module/issues/47 , 以及使用案例  https://github.com/jyotirmaybarman/nuxt3-tailwind-pinia/blob/main/components/MarkdownEditor.vue</p>
<p>决定改为使用 markdown-it ( https://markdown-it.docschina.org/ )</p>
<p>提供了renderer类实例，其中使用render方法，获取 token 流并生成 HTML。</p>
<p>安装 <code v-pre>npm install markdown-it</code></p>
<p>在 script 中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import md from "markdown-it";
const renderer = md();
const article = `
# 一级标题 \n > 这里是文章内容 \n ## 二级标题 \n ### 创建Nuxt3项目 \n ` +
  ' `npx nuxi init nuxt-app `  创建项目  ' +
  '\n' +
  '\n ![猫猫打电脑](https://user-images.githubusercontent.com/71304537/193831026-07cf0de0-48b4-4055-bb8a-97e8aa554704.gif) \n' +
  '\n' +
  '\n' +
  'npx nuxi init nuxt-app \n' +
  '\n' +
  'npm install\n' +
  '\n' +
  'npm run dev\n' +
  '\n' +
  '> 这里写下自己负责的部分实现\n' +
  '\n' +
  '## 文章预览 \n' 
  '```\n' +
  '测试代码快的样式是否可行'
  '```\n';
const articleContent =  renderer.render(article);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 要写  <code v-pre>class=&quot;markdown-body&quot;</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div class="markdown-body" v-html="articleContent">&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样获得了文章的html</p>
<blockquote>
<p>获取后端接口</p>
</blockquote>
<h3 id="文章添加样式" tabindex="-1"><a class="header-anchor" href="#文章添加样式" aria-hidden="true">#</a> 文章添加样式</h3>
<blockquote>
<p>我放弃了使用github-markdown-css，整了个markdown-css，来适应主题变化。</p>
<p>import 'assets/css/markdown.css';</p>
</blockquote>
<p>现在给文章添加markdown的样式 https://github.com/sindresorhus/github-markdown-css</p>
<p>因为考虑到主题化，正好github-markdown-css有light和dark两种样式。</p>
<p>安装 <code v-pre>npm install github-markdown-css</code></p>
<p>在 script 中 <code v-pre>import &quot;github-markdown-css/github-markdown-light.css&quot;</code></p>
<p>使用 <code v-pre> class=&quot;markdown-body&quot;</code></p>
<h3 id="处理动态引入-放弃" tabindex="-1"><a class="header-anchor" href="#处理动态引入-放弃" aria-hidden="true">#</a> 处理动态引入（放弃</h3>
<blockquote>
<p>呃呃呃通过计算属性获取存在theme里的数据，watchEffect，检测样式发生改变</p>
<p>import { useTheme } from '@/composables/useTheme';</p>
<p>import {  computed, watchEffect } from '#imports';</p>
<p>const Theme = useTheme();</p>
<p>const theme = computed(() =&gt; {</p>
<p>return Theme.theme;</p>
<p>});</p>
<p>watchEffect(()=&gt;{</p>
<p>判断然后，因为是import(`github-markdown-css/github-markdown-${ theme }.css`)引入样式，所以切换后就会冲突</p>
<p>看网上有些是给个link，href样式</p>
<p>})</p>
</blockquote>
<p>掘金的markdown主题  https://github.com/xitu/juejin-markdown-themes</p>
</div></template>


