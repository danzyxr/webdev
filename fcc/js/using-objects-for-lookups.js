function phoneticLookup(val) {
  var result = "";
  var phonetics = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = phonetics[val];
  return result;
}

phoneticLookup("charlie");