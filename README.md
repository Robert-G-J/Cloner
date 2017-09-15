# Cloner

Javascript/Node.js is a language which, despite appearances, is heavily influenced by Lisps.

As such, when an object is created, it is treated almost as a constant by the language. 

Therefore, to clone an object require more than just:
```javascript
var obj = { name: "Paddy", address: { town: "Lerum", country: "Sweden" } };
var copy = var obj;
obj.surname = "Jones";
console.log(obj);
  >>{ name: "Paddy", address: { town: "Lerum", country: "Sweden" }, surname: "Jones" }
console.log(copy);
  >>{ name: "Paddy", address: { town: "Lerum", country: "Sweden" }, surname: "Jones" }
```
as the variable `copy` points to the same object as `obj` does.


