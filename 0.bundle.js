(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./docs/index.js":function(s,a,n){"use strict";n.r(a);var t=n("./node_modules/rsuite/lib/Grid.js"),e=n.n(t),c=n("./node_modules/rsuite/lib/Row.js"),l=n.n(c),d=n("./node_modules/rsuite/lib/Col.js"),o=n.n(d),r=n("./node_modules/react/index.js"),p=n.n(r),h=n("./node_modules/react-dom/index.js"),i=n.n(h),m=n("./node_modules/react-markdown-reader/lib/index.js"),g=n("./node_modules/@rsuite/document-nav/lib/index.js"),u=(n("./docs/less/index.less"),n("./docs/showcases/BasicLineChartShowcase.js")),j=n("./docs/showcases/MultipleLinesShowcase.js"),x=n("./docs/showcases/DoubleValueAxisShowcase.js"),v=n("./docs/showcases/LineAreaShowcase.js"),b=n("./docs/showcases/BasicBarChartShowcase.js"),f=n("./docs/showcases/VerticalMultipleBarsShowcase.js"),C=n("./docs/showcases/HorizontalMultipleBarsShowcase.js"),B=n("./docs/showcases/MultipleStackedBarsShowcase.js"),y=n("./docs/showcases/LineAndBarsShowcase.js"),E=n("./docs/showcases/BarAndScatterShowcase.js"),w=n("./docs/showcases/BasicPieChartShowcase.js"),L=n("./docs/showcases/DonutChartShowcase.js"),S=n("./docs/showcases/ChinaMapChartShowcase.js"),A=n("./docs/showcases/TreeChartShowcase.js"),M=n("./docs/showcases/TreemapChartShowcase.js"),O=n("./docs/showcases/SankeyChartShowcase.js");function D(s){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}function k(s,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,t.key,t)}}function R(s,a){return!a||"object"!==D(a)&&"function"!=typeof a?function(s){if(void 0===s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}(s):a}function P(s){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)})(s)}function _(s,a){return(_=Object.setPrototypeOf||function(s,a){return s.__proto__=a,s})(s,a)}var I=function(s){function a(){return function(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),R(this,P(a).apply(this,arguments))}var t,c,d;return function(s,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),a&&_(s,a)}(a,r["Component"]),t=a,(c=[{key:"render",value:function(){return p.a.createElement(g.NavProvider,null,p.a.createElement(e.a,{className:"page"},p.a.createElement(l.a,null,p.a.createElement(o.a,{md:6,xsHidden:!0},p.a.createElement(g.Nav,{width:210,showOrderNumber:!1})),p.a.createElement(o.a,{md:18},p.a.createElement(g.Content,null,p.a.createElement("h1",null,"Charts"),p.a.createElement("p",null,"A set of charts based on rsuite and ECharts"),p.a.createElement("p",null,p.a.createElement("a",{href:"https://github.com/rsuite/charts"},"https://github.com/rsuite/charts")),p.a.createElement("h2",null,"基本示例"),p.a.createElement(u.a,null),p.a.createElement(b.a,null),p.a.createElement(w.a,null),p.a.createElement(S.a,null),p.a.createElement(A.a,null),p.a.createElement(M.a,null),p.a.createElement(O.a,null),p.a.createElement("h2",null,"高级示例"),p.a.createElement("h3",null,"<LineChart>"),p.a.createElement(j.a,null),p.a.createElement(x.a,null),p.a.createElement(v.a,null),p.a.createElement("h3",null,"<BarChart>"),p.a.createElement(f.a,null),p.a.createElement(C.a,null),p.a.createElement(B.a,null),p.a.createElement("h4",null,"与折线、散点并用"),p.a.createElement(y.a,null),p.a.createElement(E.a,null),p.a.createElement("h3",null,"<PieChart>"),p.a.createElement(L.a,null),p.a.createElement(m.Markdown,null,n("./docs/md/props.md")))))))}}])&&k(t.prototype,c),d&&k(t,d),a}(),T=document.getElementById("app");i.a.render(p.a.createElement(I,null),T)},"./docs/less/index.less":function(s,a,n){},"./docs/md/BarsWithLine.md":function(s,a){s.exports='\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  &lt;BarChart data={data}&gt;\n    &lt;YAxis minInterval={1000000} axisLabel={value =&gt; `${value / 1000}K`} /&gt;\n    &lt;Bars name="触达用户数" barWidth={10} /&gt;\n    &lt;Line name="曝光量" /&gt;\n  &lt;/BarChart&gt;\n);\n\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/BarsWithScatter.md":function(s,a){s.exports='\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  &lt;BarChart horizontal data={data}&gt;\n    &lt;Bars name="本月曝光量" barWidth={10} /&gt;\n    &lt;Scatter name="购买前实际发生曝光量" /&gt;\n  &lt;/BarChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/BasicBarChart.md":function(s,a){s.exports='<h3 id="-">柱状图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\n<span class="hljs-keyword">const</span> colors = [\n  <span class="hljs-string">\'#1464AC\'</span>,\n  <span class="hljs-string">\'#2485C1\'</span>,\n  <span class="hljs-string">\'#32A4D4\'</span>,\n  <span class="hljs-string">\'#41C5E9\'</span>,\n  <span class="hljs-string">\'#51E8FF\'</span>,\n  <span class="hljs-string">\'#42C2DC\'</span>,\n  <span class="hljs-string">\'#13BA9E\'</span>,\n  <span class="hljs-string">\'#50E3C2\'</span>,\n  <span class="hljs-string">\'#7ED321\'</span>,\n  <span class="hljs-string">\'#B8E986\'</span>,\n];\n\nReactDOM.render(\n  &lt;BarChart name="客户数" data={data}&gt;\n    &lt;YAxis axisLabel={value =&gt; `${value / 1000000}M`} minInterval={1000000} /&gt;\n    &lt;Bars color={colors} label={({ value }) =&gt; `${(value / sum * 100).toFixed(2)}%`}/&gt;\n  &lt;/BarChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/BasicLineChart.md":function(s,a){s.exports='<h3 id="-">折线图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\n<span class="hljs-comment">// const data = [</span>\n<span class="hljs-comment">//   [\'00:00\', random()],</span>\n<span class="hljs-comment">//   [\'01:00\', random()],</span>\n<span class="hljs-comment">//   ...</span>\n<span class="hljs-comment">// ];</span>\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">LineChart</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"浏览量(PV)"</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span> /&gt;</span>\n);\n</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/BasicPieChart.md":function(s,a){s.exports='<h3 id="-">饼图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">PieChart</span>\n    <span class="hljs-attr">name</span>=<span class="hljs-string">"访问来源"</span>\n    <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span>\n    <span class="hljs-attr">legend</span>=<span class="hljs-string">{false}</span>\n    <span class="hljs-attr">startAngle</span>=<span class="hljs-string">{210}</span>\n  /&gt;</span>\n);</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/Donut.md":function(s,a){s.exports='<h4 id="-">环形饼图</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\n<span class="hljs-keyword">const</span> colors = [\n  <span class="hljs-string">\'#34c3ff\'</span>,\n  <span class="hljs-string">\'#1464AC\'</span>,\n];\n\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">PieChart</span>\n    <span class="hljs-attr">name</span>=<span class="hljs-string">"汽车"</span>\n    <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span>\n    <span class="hljs-attr">donut</span>\n    <span class="hljs-attr">color</span>=<span class="hljs-string">{colors}</span>\n  /&gt;</span>\n);</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/DoubleValueAxis.md":function(s,a){s.exports='<h4 id="-y-">多个 Y 轴</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\n<span class="hljs-comment">// const data = [</span>\n<span class="hljs-comment">//   [\'00:00\', random(), random()],</span>\n<span class="hljs-comment">//   [\'01:00\', random(), random()],</span>\n<span class="hljs-comment">//   ...</span>\n<span class="hljs-comment">// ];</span>\n\nReactDOM.render(\n  &lt;LineChart data={data}&gt;\n    &lt;YAxis name="指标1" minInterval={30000} /&gt;\n    &lt;YAxis name="指标2" axisLabel={value =&gt; value.toFixed(2)} /&gt;\n    &lt;Line name="点击" yAxisIndex={0} /&gt;\n    &lt;Line name="花费" yAxisIndex={1} /&gt;\n  &lt;/LineChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/HorizontalBars.md":function(s,a){s.exports='<h4 id="-">水平图柱</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  &lt;BarChart horizontal height={400} data={data}&gt;\n    &lt;XAxis axisLabel={value =&gt; `${value}K`} minInterval={15} /&gt;\n    &lt;Bars name="曝光用户" /&gt;\n    &lt;Bars name="购买用户" /&gt;\n  &lt;/BarChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/LineArea.md":function(s,a){s.exports='<h4 id="-">图线阴影</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\n<span class="hljs-comment">// const data = [</span>\n<span class="hljs-comment">//   [\'00:00\', random(), random()],</span>\n<span class="hljs-comment">//   [\'01:00\', random(), random()],</span>\n<span class="hljs-comment">//   ...</span>\n<span class="hljs-comment">// ];</span>\n\nReactDOM.render(\n  &lt;LineChart data={data}&gt;\n    &lt;Line name="品牌销量指数" area /&gt;\n    &lt;Line name="品类销量指数" area /&gt;\n  &lt;/LineChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/MapChart.md":function(s,a){s.exports='<h3 id="-">地图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MapChart</span>\n    <span class="hljs-attr">name</span>=<span class="hljs-string">"覆盖率"</span>\n    <span class="hljs-attr">map</span>=<span class="hljs-string">"china"</span>\n    <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span>\n  /&gt;</span>\n);</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/MultipleBars.md":function(s,a){s.exports='<h4 id="-">多条图柱</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  &lt;BarChart data={data}&gt;\n    &lt;YAxis axisLabel={value =&gt; `${value / 1000}K`} minInterval={500000} splitLine={false} /&gt;\n    &lt;Bars name="休眠客户" /&gt;\n    &lt;Bars name="新客" /&gt;\n    &lt;Bars name="非品牌用户" /&gt;\n    &lt;Bars name="老客" /&gt;\n    &lt;Bars name="流失至竞品" /&gt;\n    &lt;Bars name="来自竞品" /&gt;\n  &lt;/BarChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/MultipleLines.md":function(s,a){s.exports='<h4 id="-">多条图线</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\n<span class="hljs-comment">// const data = [</span>\n<span class="hljs-comment">//   [\'00:00\', random(), random()],</span>\n<span class="hljs-comment">//   [\'01:00\', random(), random()],</span>\n<span class="hljs-comment">//   ...</span>\n<span class="hljs-comment">// ];</span>\n\nReactDOM.render(\n  &lt;LineChart data={data}&gt;\n    &lt;YAxis minInterval={30000} axisLabel={value =&gt; `${value / 1000}K`} /&gt;\n    &lt;Line name="昨日浏览量(PV)" /&gt;\n    &lt;Line name="今日浏览量(PV)" /&gt;\n  &lt;/LineChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/SankeyChart.md":function(s,a){s.exports='<h3 id="-">桑基图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">SankeyChart</span>\n    <span class="hljs-attr">height</span>=<span class="hljs-string">{800}</span>\n    <span class="hljs-attr">name</span>=<span class="hljs-string">"能量"</span>\n    <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span>\n  /&gt;</span>\n);</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/StackedBars.md":function(s,a){s.exports='<h4 id="-">堆叠图柱</h4>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  &lt;BarChart data={data}&gt;\n    &lt;YAxis minInterval={1000} /&gt;\n    &lt;Bars name="男-互联网电视曝光量" color="#2485C1" stack="男" /&gt;\n    &lt;Bars name="男-移动曝光量" color="#32A4D4" stack="男" /&gt;\n    &lt;Bars name="男-电脑曝光量" color="#34C3FF" stack="男" /&gt;\n    &lt;Bars name="女-互联网电视曝光量" color="#AB005B" stack="女" /&gt;\n    &lt;Bars name="女-移动曝光量" color="#EA3797" stack="女" /&gt;\n    &lt;Bars name="女-电脑曝光量" color="#FF8FCB" stack="女" /&gt;\n  &lt;/BarChart&gt;\n);\n</code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/TreeChart.md":function(s,a){s.exports='<h3 id="-">树状图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">TreeChart</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"标签名称"</span> <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span> /&gt;</span>\n);</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/TreemapChart.md":function(s,a){s.exports='<h3 id="-">矩形树图</h3>\n\x3c!--start-code--\x3e\n<div class="doc-highlight"><pre><code class="javascript">\nReactDOM.render(\n  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">TreemapChart</span>\n    <span class="hljs-attr">height</span>=<span class="hljs-string">{400}</span>\n    <span class="hljs-attr">name</span>=<span class="hljs-string">"配置项"</span>\n    <span class="hljs-attr">data</span>=<span class="hljs-string">{data}</span>\n  /&gt;</span>\n);</span></code></pre></div>\x3c!--end-code--\x3e\n'},"./docs/md/props.md":function(s,a){s.exports='<h2 id="api">API</h2>\n<p><code>@rsuite/charts</code> 中的 React 组件对应 ECharts 配置项中的各个部分。\n除特殊说明的 props 外，它们会将接收的所有 props 直接转换为相应的 ECharts　配置项。</p>\n<p>如：</p>\n<div class="doc-highlight"><pre><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">XAxis</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"value"</span> <span class="hljs-attr">minInterval</span>=<span class="hljs-string">{1000}</span> /&gt;</span></code></pre></div><p>即对应：</p>\n<div class="doc-highlight"><pre><code class=""><span class="hljs-selector-tag">xAxis</span>: {\n  <span class="hljs-attribute">type</span>: <span class="hljs-string">\'value\'</span>,\n  minInterval: <span class="hljs-number">10000</span>\n}</code></pre></div><h3 id="echarts"><code>&lt;ECharts&gt;</code></h3>\n<p><code>&lt;ECharts&gt;</code> 是 <code>@rsuite/charts</code> 中最基础的组件，\n接收 option 参数，\n生成一个 ECharts 图表。</p>\n<table>\n<thead>\n<tr>\n<th>prop</th>\n<th>type</th>\n<th>default</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>option</td>\n<td><code>object</code></td>\n<td></td>\n<td>ECharts 配置项，详见　<a href="http://echarts.baidu.com/option.html">ECharts 配置项手册</a></td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>number</code></td>\n<td>300</td>\n<td>图表高度</td>\n</tr>\n<tr>\n<td>locale</td>\n<td><code>object&lt;{emptyMessage, loading}&gt;</code></td>\n<td><code>{emptyMessage: &#39;No data found&#39;, loading: &#39;Loading...&#39;}</code></td>\n<td>数据为空/loading 时显示的信息</td>\n</tr>\n</tbody>\n</table>\n<h3 id="charts-series">charts/series</h3>\n<p><code>series</code> 是展示数据的主要组件，\n包括 <code>&lt;Line&gt;</code> <code>&lt;Bars&gt;</code> <code>&lt;Scatter&gt;</code> <code>&lt;Pie&gt;</code> <code>&lt;Map&gt;</code> <code>&lt;Tree&gt;</code> <code>&lt;Treemap&gt;</code> <code>&lt;Sankey&gt;</code>，\n分别对应 <a href="http://echarts.baidu.com/option.html#series">ECharts 配置项中各个 type 的 series</a>。</p>\n<p>除了 <code>&lt;Line&gt;</code> <code>&lt;Bars&gt;</code> <code>&lt;Scatter&gt;</code> 外，其他的 <code>series</code> 通常不会单独使用，而是继承相应的 <code>charts</code> 接收的 props。如 <code>&lt;Pie&gt;</code> 会从 <code>&lt;PieChart&gt;</code> 继承 <code>donut</code> 等 props。</p>\n<h4 id="line"><code>&lt;Line&gt;</code></h4>\n<table>\n<thead>\n<tr>\n<th>prop</th>\n<th>type</th>\n<th>default</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>stack</td>\n<td><code>boolean</code>&#124;<code>string</code></td>\n<td></td>\n<td>当设为 <code>true</code> 时，所有 <code>stack={true}</code> 的 <code>&lt;Line&gt;</code> 会在同一个堆叠中。其它用法同 ECharts 配置项手册。</td>\n</tr>\n<tr>\n<td>area</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>设为 <code>true</code> 时，相当于设置 <code>areaStyle={{opacity: 0.2}}</code>。</td>\n</tr>\n</tbody>\n</table>\n<h4 id="bars"><code>&lt;Bars&gt;</code></h4>\n<table>\n<thead>\n<tr>\n<th>prop</th>\n<th>type</th>\n<th>default</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>stack</td>\n<td><code>boolean</code>&#124;<code>string</code></td>\n<td></td>\n<td>当设为 <code>true</code> 时，所有 <code>stack={true}</code> 的 <code>&lt;Bars&gt;</code> 会在同一个堆叠中。其它用法同 ECharts 配置项手册。</td>\n</tr>\n<tr>\n<td>color</td>\n<td><code>string</code>&#124;<code>array&lt;string&gt;</code></td>\n<td></td>\n<td>当设为数组时，该组图柱中的各条图柱将显示为数组中的各个颜色。其它用法同 ECharts 配置项手册。</td>\n</tr>\n</tbody>\n</table>\n<h4 id="pie"><code>&lt;Pie&gt;</code></h4>\n<table>\n<thead>\n<tr>\n<th>prop</th>\n<th>type</th>\n<th>default</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>donut</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否为环形图。默认 <code>innerRadius</code> 比 <code>outerRadius</code> 小 15%。</td>\n</tr>\n</tbody>\n</table>\n<h3 id="charts-components">charts/components</h3>\n<p><code>components</code> 是图表的其他组成部分，包括 <code>&lt;XAxis&gt;</code> <code>&lt;YAxis&gt;</code> <code>&lt;Legend&gt;</code> <code>&lt;Tooltip&gt;</code> <code>&lt;DataZoom&gt;</code> <code>&lt;VisualMap&gt;</code>。</p>\n<h3 id="charts-charts">charts/charts</h3>\n<p><code>charts</code> 是 <code>@rsuite/charts</code> 预先封装的一些常用图表，通常包括一个默认 <code>series</code> 和一些默认 <code>components</code>。</p>\n<p><code>charts</code> 都接收 <code>name</code> 和 <code>data</code> 两个 props，并传递给其内部的 <code>series</code>。大多时候，其他的 props 也会被传递下去。</p>\n<h4 id="linechart-barchart"><code>&lt;LineChart&gt;</code> 和 <code>&lt;BarChart&gt;</code></h4>\n<p>除了使用默认 <code>series</code> 之外，<code>&lt;LineChart&gt;</code> 和 <code>&lt;BarChart&gt;</code> 还可以手动添加更多的 <code>series</code>，并将 <code>data</code> 中的数据依次分配给它们。</p>\n<div class="doc-highlight"><pre><code class=""><span class="hljs-attribute">data</span>: [\n  [category, value1, value2, ...],\n  ...\n]\n</code></pre></div><h3 id="-props">特殊 props</h3>\n<p><code>@rsuite/charts</code> 对一些常用的配置项进行了处理，使用更加简便。</p>\n<h4 id="textoption-formatter-"><code>textOption.formatter()</code></h4>\n<p>如果对 <code>label</code> <code>axisLabel</code> <code>tooltip</code> 等 props 传入一个函数，<code>@rsuite/charts</code> 会自动将它用作该项配置的 <code>formatter</code> 字段。</p>\n<p>如：</p>\n<div class="doc-highlight"><pre><code class="">&lt;XAxis axisLabel={value =&gt; <span class="hljs-string">`<span class="hljs-subst">${value}</span>%`</span>} /&gt;</code></pre></div><p>相当于：</p>\n<div class="doc-highlight"><pre><code class="">&lt;XAxis\n  axisLabel={{\n    <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>,\n    <span class="hljs-attr">formatter</span>: <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> <span class="hljs-string">`<span class="hljs-subst">${value}</span>%`</span>\n  }}\n/&gt;</code></pre></div><p>类似地，如果传入一个字符串或数字，则被视作 <code>formatter()</code> 的返回值。</p>\n'}}]);