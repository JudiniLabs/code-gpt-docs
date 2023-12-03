---
sidebar_position: 8
---

# 코드 인터프리터 실행 (베타)

## 설명

***Code Interpreter with Python*** (베타) 기능을 사용하면 주석 내에서 코드 제안을 쉽게 요청하고 받을 수 있습니다. 이 강력한 도구는 빠르고 관련성 있는 코드 스니펫을 제공하여 코딩 경험을 향상시킵니다.

Jupyter Notebook의 통합을 통해 이제 코드 스니펫을 직접 환경에서 실행할 수 있습니다.

## 요구 사항
- [Jupyter Notebook](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)

## 사용 방법:
- 주석에서 코드 요청:
    - 특정 코드 요청을 하는 주석을 작성합니다 (커서가 주석 라인의 끝에 있는지 확인).

- 코드 제안 시작:
    - 코드 제안 모드를 활성화하려면 ```cmd + shift + i```를 누릅니다.

- 코드 활용:
    - 제안된 코드를 사용하여 프로젝트를 개선합니다.

## 예제
이 예제에서는 CSV 파일을 열고 열을 검색한 다음 데이터를 플로팅하는 코드를 요청합니다.

### 프롬프트:

```python noInline
# '../datasets/data_test.csv'에 위치한 파일을 열고 데이터를 읽고 열을 식별한 다음 의미 있는 차트를 생성하는 작업을 수행하세요



