---
sidebar_position: 2
---

# 자동완성 GPT

## 설명
커리에이트드 모델(OpenAI, Anthropic, Ollama, Google Makersuite 등) 중에서 선택하여 사용할 수 있는 자동완성 GPT(Generative Pre-trained Transformer) 기능은 정확하고 맥락에 맞는 코드 제안을 제공하여 코드 작성 경험을 향상시켜줍니다.

## 사용 방법:
- 자동완성 설정:
    - 옵션 ✅ **CodeGPT Copilot 활성화**를 체크합니다.
    - **최대 토큰수(Max Tokens):** 생성할 토큰의 최대 개수입니다. 이 값은 응답 대기 시간과 일관성 사이의 균형을 조정하는 역할을 합니다.
    - **제공자(Provider):**
        - OpenAI - gpt-3.5-turbo-instruct
        - CodeGPT Plus - Plus
        - Anthropic - claude-2
        - Anthropic - claude-instant-1
        - Ollama - deepseek-coder:base
        - Ollama - codegpt/deepseek-coder-1.3b-typescript
    - **제안 지연시간(Suggestion Delay):** 자동완성 제안을 요청하기 전에 마지막으로 입력된 문자와의 지연시간(밀리초)입니다. 기본값은 3000입니다.

:::note 자동완성 GPT 설정
<p align="center">
      <img width="500" height="350" src="https://github.com/davila7/code-gpt-docs/assets/37567214/14693326-ee6c-4696-875b-b360188b969d" />
</p>
:::

- 쉬운 통합:
    - 제안된 코드 조각을 원활하게 프로젝트에 통합하여 코드의 품질과 효율성을 개선합니다. 제안을 수락하려면 `Tab`을 누르세요.

:::note 자동완성 GPT
<p align="center">
      <img width="500" height="450" src="https://github.com/davila7/code-gpt-docs/assets/37567214/a3f1d2b5-fc0b-4338-926d-287fcb02465c" />
</p>
:::
