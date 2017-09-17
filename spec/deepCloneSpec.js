(function() {
  // Test to show copies are the same object
  console.log("Checks that a copy is the same object");
  var json = { name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
  var copy = json;
  assert.isEqual(json, copy);
  console.log("Test-Passed");

})();
