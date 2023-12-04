#Subject 3 (2.5 pts)
#TOPIC: REST

# Having the following application developed using NodeJS, complete the `POST` method on path `/food-items` :

- If no request body is present you should return a json with the following format: `{"message": "body is missing"}`. Response status code should be: `400`; (0.5 pts)
- If the request body properties are missing you should return a json with the following format: `{"message": "malformed request"}`. Response status code should be: `400`; (0.5 pts)
- Calories should be positive, otherwise return a json with the following format: `{"message": "calories should be a positive number"}`. Response status code should be: `400`; (0.5 pts)
- If the element is valid, it should be added and a response with the code `201` should be returned. The response body should be `{"message": "created"}`;(0.5 pts)
- If the added element has an invalid category, you should return a json with the following format `{"message": "not a valid category"}`. Response status code should be: `400`; (0.5 pts).