---
sidebar_position: 2
---

# OpenAI

공식 웹사이트 https://openai.com

OpenAI는 모든 인류에 이로운 친화적 인 인공 지능을 개발하고 촉진하려는 인공 지능 연구 기관입니다. 그들은 세계에서 가장 진보 된 자연어 처리 모델 인 GPT-3 및 GPT-4를 비롯한 여러 AI 모델을 개발했습니다.

## OpenAI 계정 연결
- [OpenAI의 API 키 페이지](https://platform.openai.com/account/api-keys)로 이동합니다.
- OpenAI 계정으로 로그인합니다 (또는 [새 계정을 만듭니다](https://platform.openai.com/signup))
- **`새로운 비밀 키 생성`**이라고 표시된 버튼을 클릭합니다.
- 새 대화 창이 나타나면 API 키가 포함 된 텍스트 상자가 있습니다.
- `OpenAI`를 `공급 업체`로 선택합니다.
- `연결 설정` 및 버튼 `⋮`을 클릭하여 계정에 연결합니다.
- API 키 및 조직 ID를 여기에 복사합니다 :
  
<p align="center">
      <img width="450" height="300" src="https://github.com/davila7/code-gpt-docs/assets/37567214/c79e8c36-2d0c-4cfe-992b-5816748472aa"/>
</p>

 
- 또는, VSCode에서 `cmd + shift + p`를 누르고 **`API 키 설정`**을 검색합니다.
- API 키를 붙여 넣습니다.

:::caution 키 제거
CodeGPT에서 API 키를 제거하려면 명령 팔레트를 열고 `CodeGPT: API 키 제거`를 검색하십시오. 또는 `⋮` 버튼을 선택하고 `연결 제거`를 클릭할 수 있습니다.
:::

## Code GPT에서 사용 가능한 GPT 모델
- gpt-4
- gpt-4-32k
- gpt-4-1106-preview
- gpt-3.5-turbo
- gpt-3.5-turbo-16k

## OpenAI API

이 확장 프로그램을 사용하려면 OpenAI 계정에 크레딧을로드해야합니다.
이 확장 프로그램은 [유료 API](https://openai.com/api/pricing/)를 사용합니다.

크레딧이없으면 확장 프로그램에서 다음과 같은 OpenAI API 오류가 표시됩니다 :
**현재 할당량을 초과했습니다. 요금제 및 청구 세부 정보를 확인하십시오.**

계정 및 사용 가능한 크레딧을 검토하려면 https://openai.com/api/에서 계정으로 로그인해야합니다.

메뉴에서 "계정 관리"를 선택한 다음 "사용량" 섹션에서 사용 가능한 크레딧과 사용 된 크레딧 양을 볼 수 있습니다.

:::note OpenAI 계정
![계정 관리](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

이 이미지에서 $18의 총액 중 $13이 사용되었음을 볼 수 있습니다.

:::note 사용량
![크레딧](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API 오류
API 오류가 발생하는 경우 다음 링크를 확인하십시오 : [OpenAI API 오류](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### 일반적인 OpenAI 오류
- [오류 코드 404 : 모델 gpt-4가 존재하지 않음](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [오류 코드 429 - 요청에 대한 요율 제한 도달](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [오류 코드 429 - 현재 할당량을 초과했습니다. 요금제 및 청구 세부 정보를 확인하십시오.](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [오류 코드 429 - 엔진이 현재 과부하 상태입니다. 나중에 다시 시도하십시오.](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [오류 코드 401 - 잘못된 인증](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)

