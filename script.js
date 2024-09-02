//your code here!

let list=document.querySelector("#infi-list");
function addListItem(i) {
  const listItem = document.createElement('li');
  listItem.textContent = `item ${i}`;
  list.appendChild(listItem);
}
let i = 1
for(; i <= 10; i++) {
  addListItem(i);
}

list.addEventListener('scroll', function() {
  
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
   {
    addListItem(i);
	   i++;
  }
}
});
	
