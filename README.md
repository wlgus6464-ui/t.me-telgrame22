# 김지현 관점방 홈페이지

## 글 수정하는 법

홈 화면 채팅은 `index.html`이 아니라 **`chats.js`** 에서 고칩니다.

1. GitHub 저장소에서 `chats.js` 클릭
2. 연필(Edit) 아이콘 클릭
3. 글 내용만 바꾸고 Commit changes

채널 이름, 소개, 링크는 파일 위쪽 `window.SITE` 를 고치세요.
채팅 하나하나는 아래쪽 `window.CHATS` 배열에서 고치세요.

새 채팅을 추가하려면 `{ type: "post", ... }` 덩어리를 복사해 붙이면 됩니다.

## 올릴 파일

저장소 맨 위에 이것이 보여야 합니다.

- index.html
- chats.js
- .nojekyll
- assets/
