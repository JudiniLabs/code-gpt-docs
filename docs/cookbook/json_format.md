---
sidebar_position: 2
---
# Validating JSON Format

CodeGPT can help you identify and correct formatting errors in JSON data, ensuring it is valid and parsable.

---

### **Example Scenario**

Imagine you're working with an API that consumes JSON data. Your application throws the following error:  

```
Error: Parse error
-------------------^
Expecting 'STRING', 'NUMBER', 'NULL', 'TRUE', 'FALSE', '{', '[', got 'undefined'
```

The JSON object causing the error looks like this:

```json
{
  "user": {
    "id": 123,
    "name": "Jane Doe"
    "email": "jane.doe@example.com",
    "active": true,
  },
  "roles": [
    "admin",
    "editor",
    "viewer",
  ]
}
```

---

### **Example Prompt**

**`Why is my JSON object invalid and how can I fix it?`**

---

### **Example Response**

CodeGPT might respond with the following explanation and corrected JSON:

**Explanation**:  
- The first issue is a missing comma after `"name": "Jane Doe"`.  
- The second issue is an extra trailing comma after the last element in the `roles` array.  
- Finally, there is a trailing comma after the `"active": true` key-value pair, which is not allowed in JSON.

Here is the corrected JSON:

```json
{
  "user": {
    "id": 123,
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "active": true
  },
  "roles": [
    "admin",
    "editor",
    "viewer"
  ]
}
```

---

### **Benefits of Using CodeGPT**

- **Error Identification**: CodeGPT pinpoints the exact lines where errors occur, saving time during debugging.  
- **Automatic Suggestions**: It not only identifies issues but also suggests precise corrections, making JSON editing seamless.  
- **Prevention**: Ensures JSON data is error-free before integrating with APIs or other services.