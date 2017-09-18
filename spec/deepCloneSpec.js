(function() {
  // Test 1
  console.log("Checks that a copy is the same object");
  var json = { name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
  var copy = json;
  assert.isEqual(json, copy);
  console.log("Test 1 Passed");

  // Test 2
  console.log("Checks that the clone is different object");
  var json = { name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
  var clone = deepClone(json);
  assert.isNotEqual(json, clone);
  console.log("Test 2 Passed");

  // Test 3
  console.log("Checks that the content of the clone is identical to original object");
  var json = { name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
  var clone = deepClone(json);
  assert.isEqual(JSON.stringify(json), JSON.stringify(clone));
  console.log("Test 3 Passed");

})();
