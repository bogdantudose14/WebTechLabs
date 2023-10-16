# TOPIC: Javascript

# Given that :

- the `rle` function comresses/decompresses a string primitive or a String object and implements RLE comression
- RLE compression transforms a string into another string
- consecutive identical characters are replaced with one character followed by a number signifying the number of repeated appearences e.g. `aaaavvvssss` becomes `a4v3s4`
- the parameters of the function are the string and a parameter with a default value; if this second parameter is true, compression is performed, otherwise, decompression (the maximum value of occurrences is 9)
- if the parameters are not string or String objects and for the second parameter boolean an exception will be thrown (`InvalidType`)

# Satisfy the following requirements

- `rle` returns the correct result for an empty string (20%)
- `rle` returns the correct result for string compression (20%)
- `rle` throws `InvalidType` if the first parameter is not string or String (20%)
- `rle` returns the correct result for string decompression (20%)
- `rle` uses the default parameter correctly (20%)
