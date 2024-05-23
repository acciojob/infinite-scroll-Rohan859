//your code here!
const list=document.getElementById("infi-list");

function addListItem(count)
{
	for (let i = 0; i <count; i++) 
	{
		const listItem=document.createElement("li");
		listItem.textContent=`Item ${list.children.length+1}`;
		list.appendChild(listItem);
	}
}

addListItem(10);

list.addEventListener("scroll",()=>{
	if(list.scrollTop+list.clientHeight>=list.scrollHeight)
	{
		addListItem(2);
	}
})
