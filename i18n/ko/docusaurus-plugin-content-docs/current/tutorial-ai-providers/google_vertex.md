---
sidebar_position: 4
---

# Google Vertex AI
공식 웹사이트 https://cloud.google.com/

## Google Cloud 계정 연결
- 이 링크를 통해 PaLM 2 또는 Gemini에 액세스 권한을 요청하세요. [Google AI Studio](https://makersuite.google.com/)
- [API 키 가져오기](https://makersuite.google.com/app/apikey) 메뉴로 이동합니다.
- 새로운 API 키를 생성합니다.
- 이 API 키를 클립 보드로 복사하고 모델의 링크를 복사합니다.
- `Vertex`를 `공급자`로 선택합니다.
- `연결 설정`을 선택하고 `⋮` 버튼을 사용하여 계정에 연결합니다.
- 여기에 API 키와 모델 링크를 복사하세요 :

<p align="center">
      <img width="400" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/1d483a4f-05a8-4fe8-b239-04fe07b48076" />
</p>
 
- 또는, VSCode에서 `cmd + shift + p`를 누르고 **`API 키 설정`**을 검색합니다.
- API 키를 붙여넣습니다.

:::caution 키 제거
CodeGPT에서 API 키를 제거하려면 명령 팔레트를 열고 `CodeGPT: API 키 제거`를 검색합니다. 또는 `⋮` 버튼을 선택하고 `연결 제거`를 클릭할 수 있습니다.
:::

## CodeGPT에서 사용 가능한 Google 모델

### Gemini
- gemini-nano
- gemini-pro
- gemini-ultra

### Google PaLM 2
- chat-bison-001
- text-bison-001

## API 오류
API 오류가 발생하는 경우 다음 링크를 확인하세요: [Google AI Studio 문서](https://ai.google.dev/api/rest?hl=ko)
