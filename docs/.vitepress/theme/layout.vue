<script setup>
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme

onMounted(() => {
  // 이미 로드되었는지 확인
  if (window.ChannelIOInitialized) {
    // 이미 초기화된 경우 shutdown 후 재부팅
    window.ChannelIO?.('shutdown')
    setTimeout(() => {
      window.ChannelIO('boot', {
        pluginKey: "bc812dc9-bfcc-46d0-b438-1a2e8a90920c"
      })
    }, 100)
    return
  }

  // 채널톡 로더
  ;(function() {
    var w = window
    if (w.ChannelIO) return
    
    var ch = function() { ch.c(arguments) }
    ch.q = []
    ch.c = function(args) { ch.q.push(args) }
    w.ChannelIO = ch
    
    function l() {
      if (w.ChannelIOInitialized) return
      w.ChannelIOInitialized = true
      
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js'
      s.charset = 'UTF-8'
      
      // 스크립트 로드 완료 후 boot 호출
      s.onload = function() {
        window.ChannelIO('boot', {
          pluginKey: "bc812dc9-bfcc-46d0-b438-1a2e8a90920c"
        })
      }
      
      var x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
    }
    
    if (document.readyState === 'complete') {
      l()
    } else {
      window.addEventListener('load', l, false)
    }
  })()
})

// 컴포넌트 언마운트 시 정리 (선택사항)
onUnmounted(() => {
  // 필요시 shutdown 호출
  // window.ChannelIO?.('shutdown')
})
</script>

<template>
  <Layout />
</template>