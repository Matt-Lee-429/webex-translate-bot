# Webex Translation Bot

Webex 메시지에서 한국어나 베트남어를 감지하여 자동으로 영어로 번역해주는 Webex Bot입니다.

## 기능

- 한국어 텍스트 감지 및 영어 번역
- 베트남어 텍스트 감지 및 영어 번역
- Webex 그룹 채팅방 지원
- 1:1 채팅 지원

## 기술 스택

- Node.js
- Express.js
- Google Cloud Translation API
- Webex Bot Framework

## 환경 설정

1. `.env` 파일 생성 및 설정
```env
BOTTOKEN=your_webex_bot_token
PORT=3000
GOOGLE_API_KEY=your_google_cloud_project_id
```

2. 필요한 패키지 설치
```bash
npm install
```

## 사용 방법

### 1:1 채팅
- 봇에게 직접 메시지를 보내면 자동으로 번역됩니다.

### 그룹 채팅
- 봇을 멘션(@)하고 메시지를 입력하면 번역됩니다.
- 예시: 
  - `@{YOUR_BOT_NAME} 안녕하세요`
  - `@{YOUR_BOT_NAME} Xin chào`

## 프로젝트 구조

```
webex-translate-bot/
├── index.js                    # 메인 애플리케이션 파일
├── GoogleTranslateService.js   # Google 번역 서비스
├── StringUtils.js             # 문자열 처리 유틸리티
└── .env                       # 환경 변수 설정
```

## 개발 환경에서 실행하기

```bash
node index.js
```

## 참고사항

- 번역 시 오류가 발생하면 콘솔에 에러 로그가 기록됩니다.
