---
sidebar_position: 8
---

# 코드 해석기 (Python)

## 설명

***Python 코드 해석기*** 기능을 사용하면 주석 내에서 코드 제안을 원활하게 요청하고 받을 수 있습니다. 이 강력한 도구는 빠르고 관련성 있는 코드 조각을 제공하여 코딩 경험을 향상시킵니다.

Jupyter Notebook 통합을 통해 환경에서 직접 코드 조각을 실행할 수 있습니다.

## 요구 사항
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## 사용 방법:
- 주석에서 코드 요청:
    - 특정 코드 요청이 포함된 주석을 작성하십시오 (커서가 주석 라인 끝에 있는지 확인).

- 코드 제안 시작:
    - 코드 제안 모드를 트리거하려면 ```cmd + shift + i```를 누르세요.

- 코드 활용:
    - 제안된 코드를 구현하여 프로젝트를 개선하세요.

## 예제
이 예제에서는 CSV 파일을 열고 열을 가져와서 데이터를 플로팅하는 것을 요청합니다.

### 프롬프트:

```python noInline
# '../datasets/data_test.csv' 위치의 파일을 열고 데이터를 읽어서 열을 식별한 다음 의미 있는 차트를 생성하는 것이 여러분의 과제입니다.

:::note CodeGPT: 코드 해석기

<p align="center">
      <img width="550" height="300" src="https://github.com/davila7/code-gpt-docs/assets/6216945/314b2a0b-c89a-4458-ae58-1dc2c58a384d" />
</p>
:::
```
