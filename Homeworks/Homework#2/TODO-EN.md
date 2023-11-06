# Sunject 2 (2.5 pts)
# Topic: Javascript

# Given the following function `function render(input, values)` where:
- `input` is an object
- `values` is an object
- The function must generate a tagged string, similar to HTML
- For the final values, if they contain a marker such as `${key}`, the marker must be replaced with the value of the corresponsing key in `values`

# Implement the following requirements:
- function returns an empty string if the first parameter is an empty object; (0.5 pts)
- function throws an exception with the message `InvalidType` if one of the parameters is not an object; (0.5 pts)
- function returns the correct result for a simple case; (0.5 pts)
- function performs token substitution; (0.5 pts)
- function returns the correct result for a complex case; (0.5 pts)