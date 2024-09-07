# Posts feed
## Technology
  - React 
  - TypeScript
  - React Router
  - Axios
  - Node.JS
  - Express.JS
  - REST API
  - Docker
  - Docker-compose
 ## How to run
 ### Step1 
  Clone that repository 
 ### Step 2
 Run command in root dir
 ```
 docker-compose up
 ```
 ### Step 3 
 Put in browser adress 
 ```
 localhost:3000
 ```
 ## Debug
 - If you want debagging REST API  you can add **REST_API_TEST.postman.collection.json** in your Postman app.
 - Link to Mongo DB Compas ```'mongodb://localhost:27018/categories'```
 
 ## REST API
### 1. Get categories
 ```
 http://localhost:3010/category/:categoryName/?page=1
 ```
 | Name | Type | Description|
| --- | --- | ---|
| Method | **GET** |  |
| categoryName | string | Name of category: **news**, **forums**, **blogs** |
| Response status | 200 | Collection of categories|
| Response status | 404 | Data not found |
| Response status | 500 | Server error |

### 2. Get section
 ```
 http://localhost:3010/category/:categoryName/:section/?page=1
 ```
 | Name | Type | Description|
| --- | --- | ---|
| Method | **GET** |  |
| categoryName | string | Name of category: **news**, **forums**, **blogs** |
| section | string | Name of section: **business**, **ideas**, **srartups**, **design** |
| Response status | 200 | Section of category|
| Response status | 404 | Data not found |
| Response status | 500 | Server error |

### 3. Get post
 ```
 http://localhost:3010/category/:categoryName/:section/:elementId
 ```
 | Name | Type | Description|
| --- | --- | ---|
| Method | **GET** |  |
| categoryName | string | Name of category: **news**, **forums**, **blogs** |
| section | string | Name of section: **business**, **ideas**, **srartups**, **design** |
| elementId | string | _id of post |
| Response status | 200 | Element of category|
| Response status | 404 | Data not found |
| Response status | 500 | Server error |

**Response 200 example**
```
{
    "data": [
        {
            "_id": "5fba3d8db45d4d001d4c1f4c",
            "category": "news",
            "title": "So 2016 Was Not the Year Messaging Changed Your Life",
            "body": "THIS WAS SUPPOSED to be the year that texting wasn’t just texting anymore. After big announcements from Facebook, Google, and others, Americans were going to use messaging apps for so much more than chatting with friends. You were going to seamlessly interact with a world of online businesses. You were going to send questions to search engines and book tables at restaurants. You were going to get stuff done without ever opening another app.",
            "section": "business",
            "createdAt": "2020-11-22T10:29:33.461Z",
            "updatedAt": "2020-11-22T10:29:33.461Z",
            "__v": 0
        }
    ],
    "totalItem": 4
}
```
 
