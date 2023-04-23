<template><div><h2 id="目录贴顶" tabindex="-1"><a class="header-anchor" href="#目录贴顶" aria-hidden="true">#</a> 目录贴顶</h2>
<p>遇到了获取元素的 offsetTop 的问题 https://blog.csdn.net/weixin_48702807/article/details/120969046</p>
<p>问题是获取到初始的 boxTop 值</p>
<ul>
<li>created 肯定不行，压根通过 this.$refs 获取不到元素</li>
<li>mounted 也不行，数据还没有获取到</li>
<li>updated 也不行，获取到了数据 Dom 还没有渲染</li>
<li>$nextTick 也不行，因为 dom 渲染了但是图片还没有加载完毕</li>
<li>在图片都加载完毕后获取元素的 offsetTop, 这里注意防抖函数的应用</li>
</ul>
<p>普通 元素用的是 this.$refs.元素 ref 名.offsetTop</p>
<p>组件 用的是 this.$refs.组件ref名.$el.offsetTop</p>
<p>最后采用在挂载时使用 setTimeout，做一个宏任务处理</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let boxTop = ref(0);
let scrollTop = ref(0);
onMounted(() => {
  setTimeout(() => {
    boxTop.value = document.querySelector('.catalog-box').offsetTop;
  }, 0);
  window.addEventListener('scroll', () => {
    scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    handleScroll();
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定样式 isTop，通过监听滚动，来判断现在滚动到哪里。合并项目还有个 header，所以+60。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;div id="catalog-main" :class="{ isTop: isTop }" ref="catalog">
let isTop = ref(false);
const handleScroll = () => {
  if (scrollTop.value >= boxTop.value + 60) {
    isTop.value = true;
  } else {
    isTop.value = false;
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>bug 发现！！！</p>
<p>页面刷新问题，刷新页面后不会回到顶部。鼠标下滚后刷新页面就会崩坏 boxTop.value 定死就不会了</p>
</blockquote>
<h2 id="目录显示与点击转跳" tabindex="-1"><a class="header-anchor" href="#目录显示与点击转跳" aria-hidden="true">#</a> 目录显示与点击转跳</h2>
<p>思路：</p>
<p>在文章内容组件获取数据时，通过数据查找 h 标签，把 h1 和 h2 的内容提取出来，传标签 size，标签内容，标签 id。</p>
<p>我决定用 a 标签锚点进行转跳，因为掘金官网看着是 a 标签转跳。</p>
<p>给原本筛选出来的 h 标签套一层 div</p>
<blockquote>
<p>bug 发现！！！</p>
<p>同等级同内容的 h 标签，转跳就会崩坏</p>
<p>直接在 h 标签上</p>
</blockquote>
<p>这里采用&quot;jump-xx&quot;命名，直接追加上# 保存，这样目录组件使用更方便。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
let tocs = articleContent.match(/&lt;h[1-2].*?>.*?&lt;\/h[1-2]>/g);
tocs.forEach((item, index) => {
    let _tocs = `&lt;div id="jump-${index}">${item}&lt;/div>`;
    articleContent = articleContent.replace(item, _tocs);
});
let hData = tocs.map((item, index) => {
    let hContent = item.match(/&lt;h(\d).*?>(.*?)&lt;\/h[1-2]>/);
    const jump = `#jump-${index}`;
    return { id: hContent[1], content: hContent[2], jumpId: jump };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过状态管理将数据保留</p>
<p><a href="https://pinia.web3doc.top/ssr/nuxt.html" target="_blank" rel="noopener noreferrer">Nuxt.js | Pinia 中文文档 (web3doc.top)<ExternalLinkIcon/></a></p>
<p>使用 pinia</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install @pinia/nuxt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>npm add -D pinia @pinia/nuxt @nuxtjs/composition-api</code></p>
<p>在 nuxt.config.js 中（这里暂时是 nuxt 项目，后期变为 nuxt3，无需配置</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    modules: [
        '@pinia/nuxt',
      ],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 stores/hData.ts 中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { defineStore } from 'pinia'

export const useHListStore = defineStore('hData', {
    state: () => {
        return {
            hList: []
        }
    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 [id].vue 中，将获取的数据放入</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { useHListStore } from "@/stores/hData"
//传给子组件 目录
const hListStore = useHListStore();
hListStore.$patch({hList: hData});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在目录组件中</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;a :href="hItem.jumpId">{{ hItem.content }}&lt;/a>
import { useHListStore } from "@/stores/hData"
const hListStore = useHListStore();
const hList = hListStore.hList;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录点击时样式" tabindex="-1"><a class="header-anchor" href="#目录点击时样式" aria-hidden="true">#</a> 目录点击时样式</h2>
<ul>
<li>点击对应标题时，通过点击事件传递当前的标题 index，通过定义一个 activeIndex 来判断是哪个导航条高亮样式。</li>
<li>这里通过获取的 h 标签等级来进行导航条的缩进 :style=&quot;{ marginLeft: `${hItem.id * 10}px` }</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>          &lt;li v-for="(hItem, index) in hList" :key="index" :title="hItem.content"
            :class="[hItem.id * 1 === 1 ? 'a-container-h1' : 'a-container-h2', activeIndex === index ? 'active' : '']">
            &lt;div class="a-container" :style="{ marginLeft: `${hItem.id * 10}px` }">
              &lt;a :href="hItem.jumpId" @click="jump(index)">{{ hItem.content }}&lt;/a>
            &lt;/div>
          &lt;/li>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>let activeIndex = ref(0);
const jump = (index) => {
  activeIndex.value = index;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导航高亮样式：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">.active </span><span class="token punctuation">{</span>
  <span class="token selector">a </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-dir-active<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span> ::before </span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-dir-active<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 4px 4px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录滚动高亮优化" tabindex="-1"><a class="header-anchor" href="#目录滚动高亮优化" aria-hidden="true">#</a> 目录滚动高亮优化</h2>
<p>在页面挂载完成后，获取所有需要的 h 标签距离顶部的距离存入 hTopList 数组。</p>
<blockquote>
<p>bug 发现！</p>
<p>如果文章中存在图片，图片还未加载完就获得了 hTopList，导致目录点击转跳跟随错位，我明明使用的 a 标签转跳，img 的 src 加载...。虽然我添加了延时，本地是解决了但是放到服务器上不行，所以本项目中没让数据人员给我在文章中添加图片数据。</p>
<p>我还尝试在文章图片加载完后，再获取 hTopList，但也失败了，我觉得这和 markdown css 里定义的 img 样式有关。我应该去解决一下。</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//获取所有h标签的offsetTop
let hTopList = ref([]);
const getHTopList = () => {
  let arr = [];
  for (let i = 0; i &lt; hList.length; i++) {
    arr.push(document.querySelector(hList[i].jumpId).offsetTop);
  }
  arr.push(Number.MAX_VALUE); //兜底
  hTopList.value = arr;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>目录跟随文章滚动</strong></p>
<p>监听页面滚动，对比页面滚动值 scrollTop 和标签的高度来判断是否高亮，</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  for (let i = 0; i &lt; hTopList.value.length; i++) {
    if (scrollTop.value > hTopList.value[i] &amp;&amp; scrollTop.value &lt; hTopList.value[i + 1] &amp;&amp; activeIndex.value != i) {
      activeIndex.value = i;
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>滚动时样式优化</strong></p>
<p>这里通过滚动目录 div 来实现。这里的 keep 参数就是导航条过多时，滚动条高亮处在第七个，其实应该根据导航 box 的高度对半取整算一下，这里图方便，数了下掘金是在第几个高亮就写了第几个。34 是每条导航 li 标签的高度。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  let catalogList = document.querySelector('.catalog-list');
  const keep = 7;
  let hListLength = hList.length;
  if (activeIndex.value &lt;= keep) {
    catalogList.scrollTop = 0;
  } else if (activeIndex.value > hListLength - keep) {
    catalogList.scrollTop = 34 * (hListLength - keep);
  } else {
    catalogList.scrollTop = 34 * (activeIndex.value - keep);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数节流" tabindex="-1"><a class="header-anchor" href="#函数节流" aria-hidden="true">#</a> 函数节流</h2>
<p>在实现文章目录滚动样式，使用到了 <code v-pre>window.addEventListener</code> 监听鼠标滚动。每一次滚动都会调用一次内部函数。这里采用节流，每 0.1 秒（草）内行数只执行一次。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> boxTop <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> scrollTop <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> scroll<span class="token punctuation">;</span>
<span class="token keyword">let</span> timer<span class="token punctuation">;</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    boxTop<span class="token punctuation">.</span>value <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".catalog-box"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getHTopList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">getHTopList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
    <span class="token string">"scroll"</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token function-variable function">scroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        scrollTop<span class="token punctuation">.</span>value <span class="token operator">=</span>
          window<span class="token punctuation">.</span>scrollY <span class="token operator">||</span>
          window<span class="token punctuation">.</span>pageYOffset <span class="token operator">||</span>
          document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>scrollTop<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">handleScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">watchActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


