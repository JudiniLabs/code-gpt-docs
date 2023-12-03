---
sidebar_position: 2
---

# OpenAI

공식 웹사이트 https://openai.com

OpenAI는 모든 인류에 이익을 주는 방식으로 친화적인 인공 지능을 개발하고 촉진하기 위한 인공 지능 연구 기관입니다. 그들은 GPT-3 및 GPT-4를 포함한 여러 인공 지능 모델을 개발했으며 아마도 세계에서 가장 고급 자연어 처리 모델 중 하나입니다.

## OpenAI 계정 연결
- [OpenAI의 API 키 페이지](https://platform.openai.com/account/api-keys)로 이동합니다.
- OpenAI 계정으로 로그인합니다 (또는 [새 계정을 만듭니다](https://platform.openai.com/signup)).
- **`Create a new secret key`**이라고 표시된 버튼을 클릭합니다.
- 새 대화 창이 나타나며 여기에 API 키가 포함된 텍스트 상자가 있습니다.
- 이 API 키를 클립 보드에 복사합니다.
- API 키를 붙여넣습니다.

:::caution 키 제거
API 키를 CodeGPT에서 제거하려면 명령 팔레트를 열고 `CodeGPT: Remove API KEY`를 검색하세요.
:::

:::note OpenAI 연결
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vl6-5BigHzk?si=SgdXt0HAMah9-aal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Code GPT에서 사용 가능한 GPT 모델
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## OpenAI API

이 확장 프로그램을 사용하려면 OpenAI 계정에 크레딧을 로드해야 합니다.
이 확장 프로그램은 [유료 API](https://openai.com/api/pricing/)를 사용합니다.

크레딧이 없는 경우 확장 프로그램에서 다음과 같은 OpenAI API 오류가 표시됩니다.
**현재 할당량을 초과했습니다. 플랜 및 빌링 세부 정보를 확인하세요**

계정 및 사용 가능한 크레딧을 검토하려면 계정으로 https://openai.com/api/ 로그인해야 합니다.

메뉴에서 Manage Account를 선택한 다음 Usage 섹션에서 사용 가능한 크레딧 및 사용된 크레딧을 확인할 수 있습니다.

:::note OpenAI 계정
![Manage Account](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

이 이미지에서는 $18 중 $13이 사용되었음을 확인할 수 있습니다.

:::note Usage
![Credits](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API Errors
API 오류가 발생하는 경우 다음 링크를 확인하세요: [OpenAI API Errors](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### 일반적인 OpenAI 오류
- [Error Code 404: 모델 gpt-4가 존재하지 않습니다](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Error Code 429 - 요청에 대한 요청 비율 제한 도달](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Error Code 429 - 현재 할당량을 초과했습니다. 플랜 및 빌링 세부 정보를 확인하세요.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Error Code 429 - 엔진이 현재 과부하 상태입니다. 나중에 다시 시도하세요.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Error Code 401 - 잘못된 인증](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
