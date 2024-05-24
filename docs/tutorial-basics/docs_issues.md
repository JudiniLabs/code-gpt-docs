# How to Document Issues on GitHub for CodeGPT

Please follow these guidelines when creating a new issue on the CodeGPT repository to make sure that issues are effectively communicated and resolved.

⚠️ **Warning:** Issues that do not follow these guidelines may not be considered.⚠️


## Steps to Document an Issue

1. **Check Existing Issues**
   - Before creating a new issue, please check the existing issues to ensure that your issue has not already been reported.

2. **Open a New Issue**
   - Navigate to the [Issues tab](https://github.com/davila7/code-gpt-docs/issues/) of the CodeGPT repository.
   - Click on the `New issue` button.

3. **Select Issue Type**
   - Choose the appropriate issue template that best describes your problem:
     - Bug Report
     - Feature Request
     - Documentation Improvement
     - Other

4. **Fill in the Issue Template**
   - **Title**: Provide a clear and concise title for your issue.
   - **Description**: Describe the issue in detail, including:
     - **Steps to Reproduce**: Provide a step-by-step description of how to reproduce the issue.
     - **Expected Behavior**: Describe what you expected to happen.
     - **Actual Behavior**: Describe what actually happened.
     - **Screenshots**: Attach screenshots if applicable.
   - **Environment**: Include relevant information about the environment where the issue occurred:
     - OS (e.g., Windows, macOS, Linux)
     - Browser (if applicable)
     - CodeGPT version
     - Any other relevant details

5. **Additional Information**
   - **Logs**: Provide any relevant log messages or error codes.
   - **Workarounds**: Mention if you have found any workarounds.
   - **References**: Link to any related issues or discussions.

6. **Submit the Issue**
   - Review your issue to ensure all necessary information is included.
   - Click the `Submit new issue` button.

## Example Issue Template

Here is an example of a well-documented issue:

### Bug Report

**Title:** CodeGPT crashes when opening large files

**Description:**
When I try to open a large file (over 20MB) in CodeGPT, the application crashes immediately.

**Steps to Reproduce:**
1. Open CodeGPT.
2. Go to `File` > `Open`.
3. Select a file larger than 20MB.
4. Click `Open`.

**Expected Behavior:**
CodeGPT should open the large file without crashing.

**Actual Behavior:**
CodeGPT crashes with an error message saying, "Application has stopped working."

**Screenshots:**
[Error Screenshot](link_to_screenshot)

**Environment:**
- OS: Windows 10
- CodeGPT Version: 1.2.3
- Memory: 16GB
- Processor: Intel i7

**Logs:**

**Workarounds:**
No known workarounds.

**References:**
Related issue: #123

## Tips for Effective Issue Reporting
- Be Specific: Provide as much detail as possible to help us understand and reproduce the issue.
- Stay on Topic: Focus on a single issue per report. If you have multiple issues, create separate reports for each.
- Follow-up: If more information becomes available, update the issue with new details.

By following these guidelines, you help us improve CodeGPT for everyone. Thank you for your contribution!
