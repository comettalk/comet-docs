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
      { text: '레퍼런스', link: '/tutorial/create' },
      { text: '제작 가이드', link: '/guide/introduction/1' },
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
        text: '레퍼런스',
        items: [
          {
            text: '템플릿 매뉴얼',
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
            text: '시네마챗 매뉴얼',
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
            text: '노벨챗 매뉴얼',
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
        text: '제작 가이드',
        items: [
          {
            text: 'Part 0 - 소개',
            collapsed: true,
            items: [
              { text: '0. 개요', link: '/guide/introduction/1' },
              { text: '1. AI의 정의', link: '/guide/introduction/2' },
            ]
          },
          {
            text: 'Part 1 - 프롬프트 기초',
            collapsed: true,
            items: [
              { text: '2. 자연어와 문법', link: '/guide/part1/1' },
              { text: '3. 문법의 종류', link: '/guide/part1/2' },
              { text: '4. 프롬프트 구조 설계', link: '/guide/part1/3' },
              { text: '5. 프롬프트 작성 기법', link: '/guide/part1/4' },
            ]
          },
          {
            text: 'Part 2 - 기본 구성 요소',
            collapsed: true,
            items: [
              { text: '6. 이미지', link: '/guide/part2/1' },
              { text: '7. 로어북', link: '/guide/part2/2' },
              { text: '8. 매크로', link: '/guide/part2/3' }
            ]
          },
          {
            text: 'Part 3 - 실전 프롬프팅',
            collapsed: true,
            items: [
              { text: '9. 구조화', link: '/guide/part3/1' },
              { text: '10. 출력 형식 프롬프팅', link: '/guide/part3/2' },
              { text: '11. 문체 프롬프팅', link: '/guide/part3/3' },
              { text: '12. 캐릭터 설정 구성', link: '/guide/part3/4' }
            ]
          },
          {
            text: 'Part 4 - 크리에이팅 테크닉',
            collapsed: true,
            items: [
              { text: '13. 데이터 포매팅', link: '/guide/part4/1' },
              { text: '14. 프롬프트 압축 키워드', link: '/guide/part4/2' },
              { text: '15. 로어북 키워드 문법', link: '/guide/part4/3' },
            ]
          },
          {
            text: 'Part 5 - 이미지 데이터 압축',
            collapsed: true,
            items: [
              { text: '16. 이미지와 정보량', link: '/guide/part5/1' },
              { text: '17. 파라미터와 정규식', link: '/guide/part5/2' },
              { text: '18. 이미지 예외처리', link: '/guide/part5/3' },
            ]
          },
          {
            text: 'Appendix - 추가 자료',
            collapsed: true,
            items: [
              { text: '캐릭터 성격 키워드 모음', link: '/guide/appendix/1.md' },
              { text: 'R2 Storage 사용법', link: '/guide/appendix/2.md' },
              { text: '전체 프롬프트 예제', link: '/guide/appendix/3.md' },
              { text: '정규식 설계', link: '/guide/appendix/4.md' }
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

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Comet. All rights reserved.`
    }
  },
  markdown: {
    breaks: true
  }
})
