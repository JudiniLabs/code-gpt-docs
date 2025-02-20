---
sidebar_position: 8
---

# Google Vertex AI
Official website [https://cloud.google.com/](https://cloud.google.com/)

## Connect your Vertex credentials
Obtaining your credentials on Google Cloud can be tricky. As of March 28, 2024, here's the process to obtain them:

### On Google Cloud
- Navigate to https://cloud.google.com/ and log in with your Gmail account.
- Initiate the Console by selecting the option in the top right corner.
- In the left panel, click on the "Models Garden" tab.
- In the search box at the top, type `Vertex AI`. Choose `Virtual Studio Vertex`.
- Ensure you have enabled the Vertex AI API, Dataform API, and Compute Engine API.
- Go to the [Dashboard](https://console.cloud.google.com/home/dashboard).
- Select "API & Services" from the right-hand menu and click `Credentials`. Click on the email associated with Service Accounts.
You'll be directed to the Service Account page. From there, navigate to the `Keys` tab and select `Add Key`. The download should start automatically, and the file should be saved as a .json.
- Rename the downloaded file to `credentials`.
- For the Custom Link, customize it as needed, ensuring the LOCATION, PROJECT_ID, and MODEL are changed.
`https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models/MODEL:streamGenerateContent`

## On CodeGPT Extension 
- On the VSCode CodeGPT Extension, change the model on the chat

<p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/0a6791c5-bdf1-4410-a77a-4e9083993b7a"/></p>

- Paste `API Key` here, and click on `Connect`.
- Click outside the options and ask to chat.
- Pick the `LLMs Cloud model` and select `Cohere` as `Provider`.
- Select a model, for example, `llama3-70b-chat-hf`.
- Paste the link model and Upload the credential.json file.
- Use the models available directly. Click outside the options and ask to chat.

  <p align="center"><img width="550" height="400" src="https://github.com/user-attachments/assets/928e0dbd-27a8-4f1b-8904-784da652bf02"/></p>

:::caution Remove or edit Key
To remove your API Key from CodeGPT, click on `Change connection settings` button.
:::

## API Errors
If you are getting API errors, check the following link: [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
