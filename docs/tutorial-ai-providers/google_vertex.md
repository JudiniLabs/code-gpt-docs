---
sidebar_position: 4
---

# Google Vertex AI
Official website [https://aistudio.google.com/](https://aistudio.google.com/)

## Connect your Vertex credentials
Obtaining your credentials on Google Cloud can be tricky. As of March 28, 2024, here's the process to obtain them:

### On Google Cloud
- Navigate to https://cloud.google.com/ and log in with your Gmail account.
- Initiate the Console by selecting the option in the top right corner.
- In the left panel, click on the "Models Garden" tab.
- In the search box at the top, type "Vertex AI". Choose "Virtual Studio Vertex".
- Ensure that you have enabled the Vertex AI API, Dataform API, and Compute Engine API.
- Go to the [Dashboard](https://console.cloud.google.com/home/dashboard).
- From the right-hand menu, select "API & Services" and then click on "Credentials". Click on the email associated with Service Accounts.
- You'll be directed to the Service Account page; from there, navigate to the "Keys" tab and select "Add Key". The download should start automatically, saving the file as a .json.
- Rename the downloaded file to "credentials".
- For the Custom Link, customize it as needed, ensuring to change the LOCATION, PROJECT_ID, and MODEL.
`https://LOCATION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/LOCATION/publishers/google/models/MODEL:streamGenerateContent`
- Choose `Vertex` as `Provider`.
-  `Set connection` and link with your account on `🔑` button.
- Paste the link model and Upload the credential.json file.


<table>
  <tr>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/e3e6cfa8-a49b-4db3-a6e1-7d68adb68134" />
    </td>
    <td align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/36802b85-4817-4132-8c54-09db20bdbe57" />
    </td>
  </tr>
</table>
 
  
:::caution Remove Key
If you want to remove your API Key from CodeGPT, select `Edit Connection` on `🔑`, and click on `Disconnect`

<p align="center">
      <img width="300" height="150" src="https://github.com/davila7/code-gpt-docs/assets/37567214/de15847c-60d3-4f71-9bfb-d2e2c8cacbaa" />
</p>

:::

## Google Models available in CodeGPT

### Gemini
- gemini-nano
- gemini-pro
- gemini-1.0-pro
- gemini-1.5-pro-latest
- gemini-ultra

## API Errors
If you are getting API errors check the following link: [Google AI Studio Documentation](https://ai.google.dev/api/rest?hl=es-419)
