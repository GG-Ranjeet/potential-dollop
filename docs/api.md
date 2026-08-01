# API Documentation

This document describes the REST API endpoints available in the backend server.

## Base URL
`http://localhost:<PORT>/api`

## Authentication
(Describe the authentication mechanism here, e.g., JWT token in the Authorization header)

---

## Endpoints

### 1. Example Endpoint
- **URL:** `/example`
- **Method:** `GET`
- **Description:** Returns an example response.

#### Request Parameters
| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| `id` | Integer | ID of the resource | Yes |

#### Success Response
- **Code:** 200 OK
- **Content:**
```json
{
  "success": true,
  "data": {
    "message": "Hello World"
  }
}
```

#### Error Response
- **Code:** 404 NOT FOUND
- **Content:**
```json
{
  "success": false,
  "error": "Resource not found"
}
```
