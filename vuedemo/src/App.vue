<template>
  <div id="app">
      <router-view/>
      <!--
        现在开始解决冲突
       -->
      <!-- 我悟了 -->
      <!-- 在来一次 -->
<!-- 我又悟了 -->
<!-- 哈啊哈哈 -->
<div>
  我来解决冲突。
  果然，我又悟了。
</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
