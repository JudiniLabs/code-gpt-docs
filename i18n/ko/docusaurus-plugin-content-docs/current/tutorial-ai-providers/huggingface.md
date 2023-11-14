---
sidebar_position: 8
---

# Huggingface

공식 웹사이트 https://huggingface.co/

Hugging Face는 사전 훈련된 AI 모델을 공유하고 AI 및 자연어 처리 (NLP) 관련 리소스의 개발과 공유에 대한 협업을 위해 설계된 플랫폼입니다. 이는 텍스트 생성, 텍스트 분류, 번역, 질문 응답 등과 같은 다양한 작업에 대한 모델을 중앙 저장소로 제공합니다.

## Huggingface
- [Huggingface](https://huggingface.co/) 에서 계정을 만듭니다.
- [Profile - Settings - Access Tokens](https://huggingface.co/settings/tokens) 으로 이동합니다.
- API 키를 생성하고 복사합니다.
- VSCode에서 ```cmd + shift + p```를 누르고 **`Set API Key`**를 검색합니다.
- API 키를 붙여넣습니다.

:::caution 키 제거
CodeGPT에서 API 키를 제거하려면 명령 팔레트를 열고 `CodeGPT: Remove API KEY`를 검색합니다.
:::

### Code GPT에서 사용 가능한 Huggingface 모델
- HuggingFaceH4/starchat-beta
- tiiuae/falcon-7b-instruct
- codellama/CodeLlama-34b-Instruct-hf

## API 오류
API 오류가 발생하는 경우 다음 링크를 확인하십시오: [Huggingface Documentation](https://huggingface.co/docs/inference-endpoints/index)
