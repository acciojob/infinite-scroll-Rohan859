//your code here!
const list=document.getElementById("infi-list");

function addListItem(count)
{
	for (let i = 0; i <count; i++) 
	{
		const listItem=document.getElementById("li");
		listItem.textContent=`item${list.children.length+1}`;
		list.appendChild(listItem);
	}
}

addListItem(10);

list.addEventListener("scroll",()=>{
	if(this.scrollTop+this.clientHeight>=this.scrollHeight)
	{
		addListItem(2);
	}
})
