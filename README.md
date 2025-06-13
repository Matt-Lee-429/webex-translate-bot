# Webex 번역 봇

Cisco Webex 봇으로, Google Translate와 Aimember Translation API를 활용한 다중 번역 서비스를 제공합니다.

## 주요 기능

- Webex 스페이스에서 실시간 번역
- 다국어 지원:
  - 한국어 (KO)
  - 영어 (EN)
  - 베트남어 (VI)
  - 몽골어 (MN)
- 다중 번역 서비스 제공:
  - Google Translate API
  - Aimember Translation API

## 필수 요구사항

- Node.js 20.x
- Cisco Webex 봇 토큰
- Google Cloud Translation API 키
- Aimember Translation API 키

## 환경 변수 설정

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 다음 변수들을 설정하세요:

```
BOTTOKEN=your_webex_bot_token
PORT=your_port_number
GOOGLE_API_KEY=your_google_translate_api_key
AIMEMBER_API_KEY=your_aimember_api_key
LOTTE_AI_API_ENDPOINT=your_aimember_api_endpoint
```

## 설치 방법

1. 저장소 클론
2. 의존성 설치:
```bash
npm install
```

## 사용 방법

### 봇 실행하기

```bash
npm start
```

### 번역 명령어

Webex 스페이스에서 다음 명령어 중 하나를 사용하여 봇을 호출하세요:

1. 한국어로 번역:
   - 영어와 베트남어에서: `@봇이름 메시지`
   - 모든 언어에서: `@봇이름 $$메시지`

2. 영어로 번역:
   - 한국어에서: `@봇이름 메시지`
   - 모든 언어에서: `@봇이름 ^^메시지`

3. 몽골어로 번역:
   - 모든 언어에서: `@봇이름 ##메시지`

4. 베트남어로 번역:
   - 모든 언어에서: `@봇이름 &&메시지`

## 아키텍처

봇은 다음과 같은 서비스 기반 아키텍처를 사용합니다:

- `TranslationManager`: 다양한 번역 서비스 관리
- `GoogleTranslateService`: Google Translate API를 사용한 번역 처리
- `AimemberTranslateService`: Aimember Translation API를 사용한 번역 처리
- `StringUtils`: 텍스트 처리를 위한 유틸리티 함수

## Docker 지원

프로젝트는 Docker를 통한 쉬운 배포를 지원합니다:

```bash
docker-compose up
```

## 라이선스

ISC 