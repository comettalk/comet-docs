<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

const { Layout } = DefaultTheme

// 채널톡 초기화 및 제어 로직
onMounted(() => {
  // 1. 채널톡 로드 (function 내용 압축)
  ;(function() {
    var w = window;
    if (w.ChannelIO) return;
    var ch = function() { ch.c(arguments) };
    ch.q = []; ch.c = function(args) { ch.q.push(args) };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) return;
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript'; s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') l();
    else if (window.attachEvent) window.attachEvent('onload', l);
    else window.addEventListener('DOMContentLoaded', l, false);
  })();

  // 2. Boot
  window.ChannelIO('boot', {
    "pluginKey": "bc812dc9-bfcc-46d0-b438-1a2e8a90920c" // 여기에 키 입력
  });
})
</script>

<template>
  <Layout />
</template>