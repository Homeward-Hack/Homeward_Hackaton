

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});
<<<<<<< HEAD
=======

menu = document.getElementById("menu");
                                menu.onclick = function(){
                                                navBar = document.querySelector(".navlists");
                                                navBar.classList.toggle("active");
                                }
// Property API 

const url = "hi"
const key = "12"
const api = url + key;
//fetch(url)
console.log(api);

// fetch(api)
// .then((response => response.json))
// .then(data  => 
// 	console.log(data)
// 	{}
// 	)

// Properties 
const propertyC = [
	{
		tag: "Rent",
		title: "4 Beddroom Detached Duplex",
		location : "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description : "",
		price:  150000,
		image :{
			main: "assets/prop3.png",
			sub: "",
			others: ""
		},
                                amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	},
	{
		tag: "Sale",
		title: "4 Beddroom Detached Duplex",
		location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description: "",
		price: 150000,
		image :{
			main: "assets/prop2.png",
			sub: "",
			others: ""
		},
                                amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"

	}, 
	{
		tag: "Lease",
		title: "4 Beddroom Detached Duplex",
		location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description: "",
		price: 150000,
		image :{
			main: "assets/prop1.png",
			sub: "",
			others: ""
		},
                                amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	},
		{
			tag: "Rent",
			title: "4 Beddroom Detached Duplex",
			location : "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
			description : "",
			price:  150000,
			image :{
				main: "assets/prop2.png",
				sub: "",
				others: ""
			},
                                                amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
		},
		{
			tag: "Sale",
			title: "4 Beddroom Detached Duplex",
			location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
			description: "",
			price: 150000,
			image :{
				main: "assets/prop1.png",
				sub: "",
				others: ""
			},
                                                amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	
		}, {
			tag: "Lease",
			title: "4 Beddroom Detached Duplex",
			location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
			description: "",
			price: 150000,
			image :{
				main: "assets/prop3.png",
				sub: "",
				others: ""
			},
                                                amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	}
];

function displayProperties(propertyC) {
	const propertiesContainer = document.getElementById("properties");
	propertiesContainer.classList.add("pro-row");

	propertyC.forEach(property => {
		const propertyDiv = document.createElement('div');
		propertyDiv.classList.add("pro-column");
		propertyDiv.innerHTML =  
		`
		<img src="${ property.image.main}"> 
		<p> ${property.title}</p>
		<p> ${property.location}</p>
		<h5 class"price">${property.price}</h5>
		<p>${property.amenities} </p>
		`;
		propertiesContainer.appendChild(propertyDiv);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	displayProperties(propertyC);
} );

// Rent
const rent = [
	{
		tag: "Rent",
		title: "4 Beddroom Detached Duplex",
		location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description: "",
		price: 150000,
		image :{
			main: "assets/prop2.png",
			sub: "",
			others: ""
		},
		amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	},{
			tag: "Rent",
			title: "4 Beddroom Detached Duplex",
			location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
			description: "",
			price: 150000,
			image :{
				main: "assets/prop1.png",
				sub: "",
				others: ""
			},
			amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
		},
		{
		tag: "Rent",
		title: "4 Beddroom Detached Duplex",
		location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description: "",
		price: 150000,
		image :{
			main: "assets/prop2.png",
			sub: "",
			others: ""
		},
		amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	},	{
			tag: "Rent",
			title: "4 Beddroom Detached Duplex",
			location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
			description: "",
			price: 150000,
			image :{
				main: "assets/prop1.png",
				sub: "",
				others: ""
			},
			amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
	},	{
	tag: "Rent",
	title: "4 Beddroom Detached Duplex",
	location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
	description: "",
	price: 150000,
	image :{
		main: "assets/prop3.png",
		sub: "",
		others: ""
	},
	amenities: "4 Bderooms, 4 Toilets, Furnished Kitchen"
}
]


function displayRents(rent) {
	const rentContainer = document.getElementById("rent");
	rentContainer.classList.add("rent-row");
	rent.forEach(rents => {
		const rentDiv = document.createElement('div');
		rentDiv.classList.add("rent-column");
		rentDiv.innerHTML =  
		`
		<img src="${ rents.image.main}"> 
		<p> ${rents.title}</p>
		<p> ${rents.location}</p>
		<h5 class"price">#${rents.price}</h5>
		<p>${rents.amenities} </p>
		`;
		rentContainer.appendChild(rentDiv);
	});
}
document.addEventListener("DOMContentLoaded", () => {
	displayRents(rent);
} );



// sale

const sales = [
	{
		title: "Shopping Complex",
		location: "Ring Road",
		price: 25000,
		amenities: "Spacious Car Park, Security ,  ",
		image: {
			main: "assets/prop1.png",
			sub: "",
			others: ""
		},


	},	{
		title: "5 Bedroom Duplex",
		location: "Kolapo Ishola GRA",
		price: 125000,
		amenities: "Spacious Car Park, Security Furnished Kitchen ,  ",
		image: {
			main: "assets/prop2.png",
			sub: "",
			others: ""
		},
	},
	{
		title: "Hotel",
		location: "Ring Road",
		price: 25000,
		amenities: "Spacious Car Park, Security ,  ",
		image: {
			main: "assets/prop3.png",
			sub: "",
			others: ""
		},


	}
]

function displaySales(sales) {
	const saleContainer = document.getElementById("sale");
	saleContainer.classList.add("sale-row");
	sales.forEach(sale => {
		const saleDiv = document.createElement('div');
		saleDiv.classList.add("sale-column");
		saleDiv.innerHTML =  
		`
		<a>
		<img src="${ sale.image.main}"> 
		<p > ${sale.title}</p>
		<p> ${sale.location}</p>
		<h5 class"price">#${sale.price}</h5>
		<p>${sale.amenities} </p>
		</a>
		`;
		saleContainer.appendChild(saleDiv);
	});
}
document.addEventListener("DOMContentLoaded", () => {
	displaySales(sales);
} );
>>>>>>> d3816953f6070d38e5bd1d668b55a77ad6c0c918
