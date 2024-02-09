---
sidebar_position: 2
---

# 설정

## Code GPT 설정 액세스
1. Visual Studio Code에서 **`File` > `Preferences` > `Settings`**를 클릭합니다. 이렇게 하면 설정 창이 열립니다.
2. 설정 창의 왼쪽에 **`Extensions`**을 클릭한 다음 **`CodeGPT`**를 클릭합니다.

:::note CodeGPT 설정

![Captura-de-Pantalla-2023-01-04-a-la-s-2-29-15-p-m-](https://github-production-user-asset-6210df.s3.amazonaws.com/6216945/274431737-b31ae5a8-8636-4a75-a32b-79062d0087de.png)

:::

## 사용 가능한 설정

### API 키

드롭다운 메뉴에서 AI 제공 업체를 선택한 다음 선택한 제공 업체의 API 키를 입력합니다.

:::info API 키 가져오기

- [CodeGPT Plus](/docs/tutorial-ai-providers/codegpt_plus)
- [OpenAI](/docs/tutorial-ai-providers/openai)
- [Google Makersuite](/docs/tutorial-ai-providers/google)
- [Microsoft Azure](/docs/tutorial-ai-providers/microsoft-azure)
- [Anthropic](/docs/tutorial-ai-providers/anthropic)
- [Cohere](/docs/tutorial-ai-providers/cohere)
- [AI21](/docs/tutorial-ai-providers/ai21)
- [Huggingface](/docs/tutorial-ai-providers/huggingface)
- [GPT4All](/docs/tutorial-ai-providers/gpt4all)
- [Ollama](/docs/tutorial-ai-providers/ollama)
  
:::

### 최대 토큰
토큰은 단어의 일부로 생각할 수 있습니다. API가 프롬프트를 처리하기 전에 입력은 토큰으로 분해됩니다.

각 모델에는 최대 토큰 수가 있습니다. 얻고자 하는 응답의 길이와 선택한 모델에 따라 토큰 수를 선택하십시오.

자세한 내용: [Tokens by OpenAI](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)

### 모델
서비스는 여러 가지 다른 모델에 액세스할 수 있습니다. 이 모델은 일반적으로 의도된 작업에 따라 모델을 그룹화합니다.

자세한 내용: [Models by OpenAI](https://beta.openai.com/docs/models/overview)

### 조직 ID (OpenAI)
조직 ID 정보는 OpenAI에만 해당되며 사용할 API 키와 함께 사용할 조직을 선택할 수 있게 합니다.

### 쿼리 언어
API와의 상호 작용에서 사용할 언어를 선택합니다. Explain이나 Document와 같은 기능의 경우 각 쿼리는 선택한 언어로 작성됩니다.

### 온도
이는 조절할 수 있는 매개변수입니다. 이는 생성된 텍스트의 무작위성 또는 "창조성" 수준을 결정합니다. 높은 온도는 더 다양하고 창의적인 출력을 초래하며 낮은 온도는 훈련 데이터와 더 유사하며 예상하지 못한 또는 놀라운 콘텐츠를 포함할 가능성이 적습니다.

0과 1 사이의 값입니다. 0은 가장 결정적이고 1은 가장 무작위적이고 창의적입니다. 기본 온도는 0.3입니다.

자세한 내용: [Temperature by Cohere](https://docs.cohere.ai/docs/temperature)

### 창 기억
이는 지난 대화 목록을 저장하지만 저장된 목록에서는 마지막 K(특정 숫자) 대화만 사용됩니다. 이렇게 하면 버퍼가 너무 커지고 토큰 제한을 초과하는 것을 방지합니다.

- 기본값: 4
- 최소값: 1
- 최대값: 50
