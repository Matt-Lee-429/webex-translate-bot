# Webex Translation Bot

Webex 메시지에서 한국어나 베트남어를 감지하여 자동으로 영어로 번역해주는 Webex Bot입니다.

## 기능

- 한국어 텍스트 감지 및 영어 번역
- 베트남어 텍스트 감지 및 영어 번역
- Webex 그룹 채팅방 지원
- 1:1 채팅 지원

## 기술 스택

- Node.js (v20 이하)
- Express.js
- Google Cloud Translation API
- Webex Bot Framework

## 환경 설정

1. `.env` 파일 생성 및 설정
```env
BOTTOKEN=your_webex_bot_token
PORT=3000
GOOGLE_API_KEY=your_google_cloud_project_id
AIMEMBER_API_KEY=your_aimember_api_key
LOTTE_AI_API_ENDPOINT=your_aimember_api_endpoint
```

2. 필요한 패키지 설치
```bash
npm install
```

## 사용 방법
- (구글 번역 사용)
  - 몽골어로 번역되어야 한다   -> ##
  - 한국어로 번역되어야 한다   -> $$
  - 영어로 번역되어야 한다     -> ^^
  - 베트남어로 번역되어야 한다 -> &&
- (AiMember 번역 사용)
  - 그냥 메시지 입력하면 알아서 번역됩니다.
  - (지원)
  - 한국어->영어
  - 영어->한국어
  - 베트남어->한국어

### 1:1 채팅
- 봇에게 직접 메시지를 보내면 자동으로 번역됩니다.

### 그룹 채팅
- 봇을 멘션(@)하고 메시지를 입력하면 번역됩니다.
- 베트남어를 번역하기 위해서는 문장 처음에 $$ 표시를 붙여야 합니다.
- 예시: 
  - `@{YOUR_BOT_NAME}안녕하세요`
  - `@{YOUR_BOT_NAME}$$Xin chào`


## 개발 환경에서 실행하기

```bash
node index.js
```

## 참고사항

- 번역 시 오류가 발생하면 콘솔에 에러 로그가 기록됩니다.
