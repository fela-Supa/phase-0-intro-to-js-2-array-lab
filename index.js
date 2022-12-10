// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name = Ralph) {
    cats.push(name);
    return cats;
 }
 function destructivelyPrependCat(name = Bob){
    cats.unshift(name);
    return cats;
  }


  function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
  }
  function appendCat(name = Broom){
    var name1= [...cats,name];
    return name1;
  }
  function prependCat(name = Arnold){
    var name2=[name, ...cats];
    return name2
  }
  function removeLastCat(){
    var Cats= cats.slice(0,cats.length-1);
    return Cats;
  }
  function removeFirstCat(){
    var Cat= cats.slice(1)
    return Cat
  }