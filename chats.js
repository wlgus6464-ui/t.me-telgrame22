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
   하트·따봉은 화면에서 누르면 올라가고, 다시 누르면 취소됩니다.
*/
window.CHATS = [

  {
    id: "post-1",
    type: "post",
    text: "ㅇ오늘 디비 100개나왔으면 좋겠다되더라구요.\n\n조만간 한번 켜보도록 하겠습니다.",
    disclaimer: "매매 권유가 아니니 공부용으로만 봐주세요. 모든 책임은 본인에게 있습니다.",
    hearts: 136,
    likes: 15,
    views: 4013,
    time: "오후 9:04"
  },

  {
    id: "day-919",
    type: "date",
    text: "9월 21일"
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
