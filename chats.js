/* =========================================================
   채팅 / 채널 글 수정 파일
   - 이 파일만 고치면 홈 화면 글이 바뀝니다.
   - GitHub에서 chats.js 를 연 뒤 연필(Edit) 아이콘으로 수정하세요.
   - 따옴표 " 와 쉼표 , 를 지우지 마세요.
   ========================================================= */

window.SITE = {
  channelName: "김지현 관점방🎖",
  username: "@kimjihyun",
  subscribers: "11,785 subscribers",
  description: "중동 세력방",
  joinUrl: "https://t.me/nostradamousbtc",
  joinLabel: "채널 입장",
  youtubeName: "김지현 유튜브",
  youtubeUrl: "https://www.youtube.com/@bitcoin-nostradamus",
  youtubeMeta: "YouTube",
  heroText: "중동 세력방 — 관점과 시나리오를 한곳에서.",
  pills: ["중동 세력방", "관점방", "시황"],
  footerText: "김지현 관점방🎖 · 중동 세력방",
  footerButton: "텔레그램에서 보기"
};

/* 홈 화면 채팅 목록
   type:
     - "notice"  회색 안내 박스
     - "date"    날짜 구분선
     - "post"    일반 채팅
     - "links"   아래 링크 카드 2개
   pinned: true  이면 파란 테두리 + "고정됨"
   image: "assets/파일이름.jpg"  없으면 사진 없음
   reactions: ["📌 고정", "👍 214"] 처럼 쓰면 됨
*/
window.CHATS = [

  {
    type: "notice",
    text: "글 수정은 chats.js 파일에서 하시면 됩니다. 본 콘텐츠는 투자 자문이 아닙니다. 모든 판단과 책임은 본인에게 있습니다."
  },

  {
    type: "post",
    pinned: true,
    author: "김지현 관점방🎖",
    time: "고정됨",
    text: "📌 채널 안내\n중동 세력방\n본 콘텐츠는 투자 자문이 아닙니다.",
    reactions: ["📌 고정", "👍 214", "🔥 89"]
  },

  {
    type: "date",
    text: "2026년 9월 21일"
  },

  {
    type: "post",
    author: "김지현 관점방🎖",
    time: "10:21",
    text: "여기에 두 번째 채팅 내용을 적으세요.\n\n줄을 바꾸려면 \\n 을 쓰거나, 위처럼 따옴표 안에서 Enter 를 치세요.",
    image: "assets/x39LN.jpg",
    imageAlt: "차트 1920x1080",
    reactions: ["👍 128", "🔥 41", "👀 19"]
  },

  {
    type: "post",
    author: "김지현 관점방🎖",
    time: "어제",
    text: "여기에 세 번째 채팅 내용을 적으세요.",
    image: "assets/1SSvA.jpg",
    imageAlt: "차트 1920x1080",
    reactions: ["👍 96", "⚡ 22"]
  },

  {
    type: "post",
    author: "김지현 관점방🎖",
    time: "이번 주",
    text: "여기에 네 번째 채팅 내용을 적으세요.",
    image: "assets/Qqpfp.jpg",
    imageAlt: "작업실 1920x1080",
    reactions: ["👍 77", "🎖 15"]
  },

  {
    type: "links"
  },

  {
    type: "notice",
    text: "※ 가상자산 거래 시 원금 손실 가능성이 있습니다. 모든 선택과 책임은 본인에게 있습니다."
  }

];
