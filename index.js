const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat (john) {
    return [...cats, john];
  }
  function prependCat (name) {
    return [name, ...cats];
  }
  function removeFirstCat () {
    return cats.slice(1);
  }
  function removeLastCat() {
      return cats.slice(0, cats.length - 1)
  }
  