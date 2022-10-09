<template>
    <router-view></router-view>
  </template>
  <script lang="ts" setup>
  // import './mock'
  
  //禁止缩放字体
  ;(function () {
    if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
      handleFontSize()
    } else {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
      }
    }
    function handleFontSize() {
      // 设置网页字体为默认大小
      WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
      // 重写设置网页字体大小的事件
      WeixinJSBridge.on('menu:setfont', function () {
        WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
      })
    }
  })()
  </script>
  <style></style>
  