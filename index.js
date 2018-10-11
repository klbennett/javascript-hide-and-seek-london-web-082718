function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    let lis = document.getElementById('grand-node').querySelectorAll('div');
    let test;
    for(let i=0; i < lis.length-1; i++) {
      test = lis[i].querySelector('div');
    }
  return test;
  }

  function increaseRankBy(n) {
    let rankedLists = document.querySelectorAll('.ranked-list')
  
    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children
  
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }