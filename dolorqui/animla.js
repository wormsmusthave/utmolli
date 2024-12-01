// Sample JSON document
const jsonDocument = {
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
};

// JSON pointer
const jsonPointer = "/address/city";

// Function to retrieve value by JSON pointer
function getValueByPointer(obj, pointer) {
  const tokens = pointer.split('/').slice(1);
  return tokens.reduce((result, token) => result[token], obj);
}

// Retrieve value using JSON pointer
const value = getValueByPointer(jsonDocument, jsonPointer);
console.log(value); // Output: Anytown
