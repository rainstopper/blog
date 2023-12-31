<!-- 自动加载的知识图谱组件 -->
<!-- 封装了知识图谱组件 -->
<!-- 默认加载 /data/knowledge 下与 this.$route.path 对应目录下的 nodes.json 和 edges.json 资源 -->

<template>
  <knowledge-graph
    :width="width"
    :height="height"
    :title="title"
    :nodes="nodes"
    :edges="edges"
    :loading="loading"
    :legends="legends"
    :force="force"
    :sort-legends="sortLegends"
  />
</template>

<script>
export default {
  name: 'knowledge-graph-auto-fetch',

  props: {
    /**
     * 宽度
     * 透传给知识图谱组件
     * @param {String}
     */
    width: String,

    /**
     * 高度
     * 透传给知识图谱组件
     * @param {String}
     */
    height: String,

    /**
     * 标题
     * 透传给知识图谱组件
     * @param {String}
     */
    title: String,

    /**
     * 自定义图例
     * 透传给知识图谱组件
     * @param {Array}
     */
    legends: Array,

    /**
     * 用于加载节点数据的 url
     * 如果不传，默认取 `${baseUrl}/nodes.json`
     * @param {String}
     */
    nodesUrl: String,

    /**
     * 用于加载边数据的 url
     * 如果不传，默认取 `${baseUrl}/edges.json`
     * @param {String}
     */
    edgesUrl: String,

    /**
     * 用于加载节点和边信息的基础 url
     * 当 nodesUrl 熟悉或 edgesUrl 熟悉未传值时使用
     * 如果不传，默认取 `/data/knowledge${this.$route.path}`
     * @param {String}
     */
    baseUrl: String,

    /**
     * 力引导布局相关的配置项
     * 透传给知识图谱组件
     * @param {Object}
     */
    force: Object,

    /**
     * 图例是否按名称首字母重排序
     * 透传给知识图谱组件
     * @param {Boolean}
     */
    sortLegends: Boolean,
  },

  data() {
    return {
      /**
       * 存放节点数据
       * @param {Array}
       */
      nodes: [],

      /**
       * 存放边数据
       * @param {Array}
       */
      edges: [],

      /**
       * 加载状态
       * @param {Boolean}
       */
      loading: false,
    };
  },

  computed: {
    /**
     * 获取加载节点数据的 url
     * 当属性 nodesUrl 未传值时，取 `${_baseUrl}/nodes.json`
     * @return {String}  加载节点数据的 url
     */
    _nodesUrl() {
      const { nodesUrl, _baseUrl } = this;
      return nodesUrl || (_baseUrl && `${_baseUrl}${_baseUrl.endsWith('/') ? '' : '/'}nodes.json`) || '';
    },

    /**
     * 获取加载边数据的 url
     * 当属性 edgesUrl 未传值时，取 `${_baseUrl}/edges.json`
     * @return {String}  加载边数据的 url
     */
    _edgesUrl() {
      const { edgesUrl, _baseUrl } = this;
      return edgesUrl || (_baseUrl && `${_baseUrl}${_baseUrl.endsWith('/') ? '' : '/'}edges.json`) || '';
    },

    /**
     * 获取加载节点和边信息的基础 url
     * 当属性 baseUrl 未传值时，取 `/data/knowledge${this.$route.path}`
     * @return {String} 加载节点和边信息的基础 url
     */
    _baseUrl() {
      return this.baseUrl || `/data/knowledge${this.$route.path}`;
    },
  },

  mounted() {
    // 加载知识图谱所需的数据
    // 默认节点数据和边数据来自于两个不同的 api，需要分两次请求
    this.loading = true;
    const { _nodesUrl, _edgesUrl } = this;
    Promise.all([
      fetch(this.$withBase(_nodesUrl)).then(res => res.json()),
      fetch(this.$withBase(_edgesUrl)).then(res => res.json()),
    ]).then(([nodes, edges]) => {
      this.nodes = nodes;
      this.edges = edges;
    }).finally(() => {
      this.loading = false;
    });
  },
};
</script>

<style lang="css" scoped>
</style>
