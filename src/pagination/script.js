
let tableData=[
{
        'first_name': 'Russell',
        'last_name': 'Wilson',
        'rank': '1',
    },
    {
        'first_name': 'Matt',
        'last_name': 'Hasselbeck',
        'rank': '2',
    },
    {
        'first_name': 'Jim',
        'last_name': 'Zorn',
        'rank': '3',
    },
    {
        'first_name': 'Brady',
        'last_name': 'Quinn',
        'rank': '4',
    },
    {
        'first_name': 'Charly',
        'last_name': 'Whitehurst',
        'rank': '5',
    },
    {
        'first_name': 'Duane',
        'last_name': 'Devine',
        'rank': '6',
    },
    {
        'first_name': 'Tom',
        'last_name': 'Brady',
        'rank': '7',
    },
    {
        'first_name': 'Arron',
        'last_name': 'Rogers',
        'rank': '8',
    },
    {
        'first_name': 'Patrick',
        'last_name': 'Mahoms',
        'rank': '9',
    },
    {
        'first_name': 'Gardner',
        'last_name': 'Minshew',
        'rank': '10',
    },
    {
        'first_name': 'Andrew',
        'last_name': 'Luck',
        'rank': '11',
    },
    {
        'first_name': 'Josh',
        'last_name': 'Gordon',
        'rank': '12',
    },
    {
        'first_name': 'Drew',
        'last_name': 'Brees',
        'rank': '13',
    },
    {
        'first_name': 'Cam',
        'last_name': 'Newton',
        'rank': '14',
    },
    {
        'first_name': 'Joe',
        'last_name': 'Montana',
        'rank': '15',
    },
    {
        'first_name': 'Steve',
        'last_name': 'Young',
        'rank': '16',
    },
    {
        'first_name': 'Dan',
        'last_name': 'Jones',
        'rank': '17',
    },
    {
        'first_name': 'Eli',
        'last_name': 'Manning',
        'rank': '18',
    },
    {
        'first_name': 'Marus',
        'last_name': 'Marriota',
        'rank': '19',
    },
    {
        'first_name': 'Ryan',
        'last_name': 'Fitzpatrick',
        'rank': '20',
    },

]






const state={
	'querySet':tableData,
	'page':1,
	'rows':5,
	'window':5
}









const pagination=(querySet,page,rows)=>{
	let trimStart=(page-1)*rows
	let trimEnd=trimStart + rows
	let trimmedData=querySet.slice(trimStart,trimEnd)
	let pages=Math.round(querySet.length/rows);

	return{
		'querySet':trimmedData,
		'pages':pages
	}

}


const pageButtons=(pages)=>{
	let wrapper=document.getElementById('pagination-wrapper')
	wrapper.innerHTML=``;
	console.log("Total Peages: ",pages )
	let maxLeft=(state.page - Math.floor(state.window/2))
	let maxRight=(state.page + Math.floor(state.window/2))
	console.log("maxLeft: ",maxLeft )
	console.log("maxRight: ",maxRight )

	if(maxLeft<1){
		maxLeft=1
		maxRight=state.window
	}




	for(let page=maxLeft; page<=maxRight; page++){
		console.log("page", page)
		wrapper.innerHTML +=`<button class='page'>${page}</button>`
	}





// adding first



	//adding last 
	if(state.page !=pages){
		wrapper.innerHTML +=`<button class='page'>LAST &#187</button>`
	}




	document.getElementsByClassName('page').addEventListener("click",()=>{console.log("clicked")})



}






const buildTable=()=>{
	let table=document.getElementById("table-body")

	let data=pagination(state.querySet,state.page,state.rows)
	let dataList=data.querySet
	// let Table=[]
	for(var i = 1 in dataList) {
		let row=`<tr>
                  <td>${dataList[i].rank}</td>
                  <td>${dataList[i].first_name}</td>
                  <td>${dataList[i].last_name}</td> </tr>`
	table.innerHTML +=row

	}

	//console.log(dataList)
	pageButtons(data.pages)




}
 buildTable()