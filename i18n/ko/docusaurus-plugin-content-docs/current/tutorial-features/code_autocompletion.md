---
sidebar_position: 2
---

# 코드 자동 완성

## 설명
모델 선택과 함께 제공되는 코드 자동 완성 기능은 OpenAI, Anthropic, Ollama 및 Google Makersuite에서 가져온 모델 중에서 선택할 수 있도록 지원합니다. 이 고급 도구는 정확하고 맥락에 맞는 코드 제안을 제공하여 코딩 경험을 향상시킵니다.

## 사용 방법:
- 자동 완성 설정:
    - 옵션 ✅ **CodeGPT Copilot 활성화** 확인
    - **Max Tokens:** 생성할 토큰의 최대 수입니다. 이 수의 토큰이 생성되면 모델이 중지되므로 이 값은 대기 시간과 일관성 사이의 균형을 맞춥니다.
    - **Provider:**
        - OpenAI - gpt-3.5-turbo-instruct
        - Anthropic - claude-2
        - Anthropic - claude-instant-1
        - Ollama - codellama
        - Ollama - mistral:instruct
        - Google - text-bison-001 (영어 전용)
    - **Suggestion Delay:** 마지막으로 입력된 문자와 제안 요청 간의 지연 시간(밀리초)입니다.

:::note 코드 자동 완성 설정
<p align="center">
      <img width="600" height="150" src="https://github.com/davila7/code-gpt-docs/assets/6216945/b4b09276-bc7e-4a8d-847b-371a8bd34488" />
</p>
:::

- 간편한 통합:
    - 제안된 코드 스니펫을 프로젝트에 원활하게 통합하여 코드 품질과 효율성을 향상시킵니다.

:::note 코드 자동 완성
<p align="center">
      <img width="600" height="150" src="https://github.com/davila7/code-gpt-docs/assets/6216945/cc3bb10a-5528-4671-8cc7-522e957e2bdd" />
</p>
:::

