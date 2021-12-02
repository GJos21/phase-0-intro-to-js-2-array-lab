const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name]
}

function prependCat(name) {
  return [name, ...cats]
}

function removeLastCat() {
  const newArr = [...cats];
  newArr.pop();
  return newArr;
}

function removeFirstCat() {
  return cats.slice(1, cats.length)
}
