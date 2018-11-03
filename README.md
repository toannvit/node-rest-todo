# Simple Todo List API


## Endpoint

---LIST---

GET : /api/v1/list : Get multiple list

GET : /api/v1/list/:listId : Get list by ID

POST : /api/v1/list : Create list

PATCH : /api/v1/list/:listId : Update list

DELETE : /api/v1/list/:listId : Delete list


---Todos---

GET : /api/v1/list/:listId/todos : Get todos of list

GET : /api/v1/list/:listId/todos/:todoId : Get todo by ID

POST : /api/v1/list/:listId/todos : Create todo

PATCH : /api/v1/list/:listId/todos/:todoId : Update todo

DELETE : /api/v1/list/:listId/todos/:todoId : Delete todo



--Events--

GET : /api/v1/events : Get events of all list

GET : /api/v1/events/:listId : Get events of particular list

GET : /api/v1/events/:listId/:todoId  : Get events of particular todo in a list