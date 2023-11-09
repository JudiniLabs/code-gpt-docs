---
sidebar_position: 2
---

# OpenAI

Официальный веб-сайт https://openai.com

OpenAI - это организация исследования искусственного интеллекта, которая стремится разрабатывать и продвигать дружественный ИИ таким образом, чтобы это приносило пользу всему человечеству. Они разработали несколько моделей ИИ, включая GPT-3 и GPT-4, пожалуй, самые передовые модели обработки естественного языка в мире.

## Подключение вашей учетной записи OpenAI
- Перейдите на страницу [API Keys на OpenAI](https://platform.openai.com/account/api-keys).
- Войдите в свою учетную запись OpenAI (или [создайте новую учетную запись](https://platform.openai.com/signup))
- Нажмите кнопку с надписью **`Create a new secret key`**
- Появится новое диалоговое окно с текстовым полем, содержащим ваш ключ API. 
- Скопируйте этот ключ API в буфер обмена.
- Вставьте свой ключ API

:::caution Удаление ключа
Если вы хотите удалить свой ключ API из CodeGPT, откройте палитру команд и выполните поиск `CodeGPT: Remove API KEY`.
:::

:::note Подключение OpenAI
<iframe width="100%" height="315" src="https://www.youtube.com/embed/vl6-5BigHzk?si=SgdXt0HAMah9-aal" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Модели GPT, доступные в Code GPT
- gpt-4
- gpt-4-32k
- gpt-3.5-turbo
- gpt-3.5-turbo-16k
- gpt-3.5-turbo-instruct

## OpenAI API

Для использования этого расширения у вас должны быть кредиты на вашем счету OpenAI.
Это расширение использует официальное OpenAI API, которое является [платным API](https://openai.com/api/pricing/).

Если у вас нет кредитов, расширение покажет следующую ошибку OpenAI API:
**You exceeded your current quota, please check your plan and billing details**

Для проверки вашей учетной записи и доступных кредитов вы должны войти в свою учетную запись по адресу https://openai.com/api/

В меню выберите "Управление учетной записью", а затем в разделе "Использование" вы сможете увидеть доступное и использованное количество кредитов.

:::note Учетная запись OpenAI
![Управление учетной записью](https://user-images.githubusercontent.com/6216945/213941730-b48b8b6a-8f0d-4fea-b4b3-42edc838f42e.png)
:::

На этом изображении вы можете видеть, что из общей суммы в $18 было использовано $13.

:::note Использование
![Кредиты](https://user-images.githubusercontent.com/6216945/213941720-1ae816dd-fedb-4026-ae8c-b8b374d1d0dd.png)
:::

## API errors
Если у вас возникают ошибки API, проверьте следующую ссылку: [Ошибки OpenAI API](https://help.openai.com/en/collections/3675931-openai-api#api-error-codes-explained)

### Типичные ошибки OpenAI
- [Код ошибки 404: Модель gpt-4 не существует](https://community.openai.com/t/when-i-try-the-gpt-4-model-chat-completion-in-api-request-i-get-an-error-that-model-does-not-exist/98850)
- [Код ошибки 429 - Достигнут лимит запросов](https://help.openai.com/en/articles/6891829-error-code-429-rate-limit-reached-for-requests)
- [Код ошибки 429 - Вы превысили текущую квоту, проверьте свой план и данные о выставлении счетов](https://help.openai.com/en/articles/6891831-error-code-429-you-exceeded-your-current-quota-please-check-your-plan-and-billing-details)
- [Код ошибки 429 - Двигатель в данный момент перегружен. Пожалуйста, повторите попытку позже](https://help.openai.com/en/articles/6891834-error-code-429-the-engine-is-currently-overloaded-please-try-again-later)
- [Код ошибки 401 - Неверная аутентификация](https://help.openai.com/en/articles/6891767-error-code-401-invalid-authentication)
