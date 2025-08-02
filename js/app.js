let nameArray = [
  "",
  "",
  ""
];

const outputElement = document.getElementById("output");

function performOperations(index, value){
  updateName(index, value);
  createOutput();
}

function updateName(index, value) {
  if (index >= 0 && index < nameArray.length) {
    nameArray[index] = value;
    console.log(`Name at index ${index} updated to: ${value}`);
  } else {
    console.error("Index out of bounds");
  }
}

function createOutput(){
  writeNamesToOutput();
  window.alert(`Names in alphabetical order: ${sortNamesByAlphabet()}`);
  window.alert(`Names in reverse alphabetical order: ${sorNamesByReverseAlphabet()}`);
}

function writeNamesToOutput() {
  outputElement.innerHTML = nameArray.map((name, index) => {
    if(name){
      return `<p>Hello ${name || "Not set"}, there are ${name.length} letters in your name.</p>`;
    }
    return "<p>Name not set</p>";
  }).join("");
}

function sortNamesByAlphabet() {
  return nameArray.filter(value => value !== "").sort((a, b) => a.localeCompare(b));
}

function sorNamesByReverseAlphabet() {
  return nameArray.filter(value => value !== "").sort((a, b) => b.localeCompare(a));
}
