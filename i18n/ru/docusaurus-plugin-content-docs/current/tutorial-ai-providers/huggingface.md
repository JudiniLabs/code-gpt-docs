---
sidebar_position: 8
---

# Huggingface

Официальный веб-сайт https://huggingface.co/

Hugging Face - это платформа, созданная для обмена предварительно обученными моделями и сотрудничества в разработке и обмене ресурсами, связанными с искусственным интеллектом и обработкой естественного языка (NLP). Эта платформа служит центральным репозиторием для широкого спектра моделей, включая те, которые предназначены для выполнения задач, таких как генерация текста, классификация текста, перевод, ответы на вопросы и многое другое.

## Huggingface
- Создайте учетную запись в [Huggingface](https://huggingface.co/)
- Перейдите в раздел [Profile - Settings - Access Tokens](https://huggingface.co/settings/tokens)
- Сгенерируйте и скопируйте API-ключ
- В VSCode нажмите ```cmd + shift + p``` и выполните поиск **`Set API Key`**
- Вставьте свой API-ключ

:::caution Удаление ключа
Если вы хотите удалить свой API-ключ из CodeGPT, откройте палитру команд и выполните поиск **`CodeGPT: Remove API KEY`**.
:::

### Модели Huggingface, доступные в Code GPT
- HuggingFaceH4/starchat-beta
- tiiuae/falcon-7b-instruct
- codellama/CodeLlama-34b-Instruct-hf

## API errors
Если у вас возникают ошибки API, проверьте следующую ссылку: [Документация Huggingface](https://huggingface.co/docs/inference-endpoints/index)
