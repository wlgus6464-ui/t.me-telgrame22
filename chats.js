/* =========================================================
   채팅 수정 파일 — 이 파일만 고치면 화면 글이 바뀝니다.
   ========================================================= */

window.SITE = {
  channelName: "김지현 관점방",
  badge: "🎖",
  subscribers: "구독자 11,786명",
  joinUrl: "https://t.me/nostradamousbtc",
  joinLabel: "채널 들어가기",
  avatar: "assets/avatar.jpg"
};

/* type: "date" | "post"
   hearts, likes, views, time 숫자/글자는 기본값입니다.
   사진 넣는 법:
     1) 사진을 assets 폴더에 넣기 예: assets/chart1.jpg
     2) 글에 image: "assets/chart1.jpg" 한 줄 추가
     여러 장이면 images: ["assets/a.jpg", "assets/b.jpg"]
*/
window.CHATS = [

  {
    id: "post-1",
    type: "post",
    text: "만약 내가 원하는 자리를 주지 않고 올린다면? 어쩔수 없는 거고\n\n만약 내가 원하는 자리를 준다면? 좋은 거고\n\n그런 마인드가 매매에 유리하기 때문입니다.\n\n몰랐는데 제가 전체 공개 라이브를 안한지도 1년 가까이 되더라구요.\n\n조만간 한번 켜보도록 하겠습니다.",
    disclaimer: "매매 권유가 아니니 공부용으로만 봐주세요. 모든 책임은 본인에게 있습니다.",
    hearts: 136,
    likes: 15,
    views: 4013,
    time: "오후 9:04"
  },

  {
    id: "day-919",
    type: "date",
    text: "9월 19일"
  },

  {
    id: "post-2",
    type: "post",
    text: "분석 업데이트 해서 영상 업로드 했습니다.\n\n오래 기다리셨습니다.\n\n드디어 코인에도 봄날이 오는 것 같네요\n\nhttps://youtu.be/uF-r_OBRWKw",
    youtube: {
      url: "https://youtu.be/uF-r_OBRWKw",
      label: "YouTube",
      title: "비트코인, 오래 기다리셨습니다. 드디어 시작됐네요.",
      desc: "텔레그램 채널\n→ https://t.me/nostradamousbtc",
      thumb: "assets/yt-thumb.jpg"
    },
    hearts: 82,
    likes: 8,
    views: 2427,
    time: "오후 4:30"
  }

];
