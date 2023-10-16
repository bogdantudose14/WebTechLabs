# TOPIC: Javascript

# Dat fiind că :

- funcția `rle` comprimă/decomprimă o primitivă string sau un obiect String și implementează compresie RLE
- compresia RLE presupune transformarea unui (în acest caz) string într-un alt string
- caracterele consecutive sunt înlocuite cu un singur caracter urmat de numărul de apariții e.g. `aaaavvvssss` va deveni `a4v3s4`
- parametrii funcției sunt string-ul și un parametru cu valoare default; dacă acesta este true, se face compresie, altfel decompresie (valoarea maxima a aparitiilor unui caracter este 9)
- dacă parametrii nu sunt primitive string sau obiecte String, respectiv boolean se va arunca o excepție (`InvalidType`)

# Completați următoarele cerințe

- `rle` returnează rezultatul corect pentru un string vid (20%)
- `rle` returnează rezultatul corect pentru compresia unui string (20%)
- `rle` aruncă `InvalidType` parametrul nu este de tip string sau String (20%)
- `rle` returnează rezultatul corect pentru decompresia unui string (20%)
- `rle` utilizează corect parametrul default (20%)
