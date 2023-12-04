#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `POST` la adresa `/food-items`:

- Dacă s-a trimis un request cu un corp gol sau nedefinit, se va returna un json cu următorul format: `{"message": "body is missing"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă din corpul request-ului lipsesc proprietăți se va returna un json cu următorul format: `{"message": "malformed request"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Numărul de calorii trebuie să fie un număr pozitiv; în caz contrar se va returna un json cu următorul format: `{"message": "calories should be a positive number"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă elementul trimis prin corpul request-ului este valid, va fi adăugat și se va returna un răspuns cu  codul `201`. Corpul răspunsului va fi `{"message": "created"}`;(0.5 pts)
- Dacă elementul adăugat are o categorie invalid, se va returna un json cu următorul format: `{"message": "not a valid category"}`. Codul de răspuns va fi: `400`. (0.5 pts)