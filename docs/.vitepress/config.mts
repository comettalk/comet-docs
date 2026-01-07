import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'force-dark',
  title: "코멧 가이드북",
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }]
  ],
  description: "코멧 공식 가이드북",
  themeConfig: {
    outline: {
      label: '목차'
    },

    nav: [
      { text: '홈', link: '/' },
      { text: '플레이 가이드', link: '/play/chat-type' },
      { text: '제작 가이드', link: '/tutorial/create' }
    ],

    sidebar: [
      {
        text: '플레이 가이드',
        items: [
          { text: '채팅 종류', link: '/play/chat-type' },
          { text: '모델 정보', link: '/play/chat-models' },
          { text: '세션 기능', link: '/play/chat-basic' },
          { text: '페르소나 설정', link: '/play/chat-persona' },
          { text: '메모리 설정', link: '/play/chat-memory' }
        ]
      },
      {
        text: '제작 가이드',
        items: [
          { text: '제작 종류', link: '/tutorial/create' },
          {
            text: '템플릿 튜토리얼',
            collapsed: true,
            items: [
              { text: '기본 정보', link: '/tutorial/template/tab1' },
              { text: '프롬프트', link: '/tutorial/template/tab2' },
              { text: '에디터', link: '/tutorial/template/tab3' },
              { text: '스크립트', link: '/tutorial/template/tab4' },
              { text: '스토리지', link: '/tutorial/template/tab5' },
              { text: '트리거', link: '/tutorial/template/tab6' }
            ]
          },
          {
            text: '시네마챗 튜토리얼',
            collapsed: true,
            items: [
              { text: '기본 정보', link: '/tutorial/cinema/tab1' },
              { text: '프롬프트', link: '/tutorial/cinema/tab2' },
              { text: '시작 대화', link: '/tutorial/cinema/tab3' },
              { text: '이미지', link: '/tutorial/cinema/tab4' },
              { text: '로어북', link: '/tutorial/cinema/tab5' },
              { text: '업로드', link: '/tutorial/cinema/tab6' },
            ]
          },
          {
            text: '노벨챗/프로챗 튜토리얼',
            collapsed: true,
            items: [
              { text: '기본 정보', link: '/tutorial/novel/tab1' },
              { text: '프롬프트', link: '/tutorial/novel/tab2' },
              { text: '시작 대화', link: '/tutorial/novel/tab3' },
              { text: '매크로', link: '/tutorial/novel/tab4' },
              { text: '로어북', link: '/tutorial/novel/tab5' },
              { text: '업로드', link: '/tutorial/novel/tab6' },
            ]
          }
        ]
      },
      {
        text: 'Terms of Service',
        items: [
          { text: '서비스 이용약관', link: '/terms/service' },
          { text: '개인정보 처리정책', link: '/terms/privacy' },
          { text: '컨텐츠 관리 정책', link: '/terms/content' }
        ]
      }
    ],

    // socialLinks: [ ]
  },
  markdown: {
    breaks: true
  }
})
