const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});


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

const properties = [
	{
		tag: "Rent",
		title: "4 Beddroom Detached Duplex",
		location : "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description : "",
		price:  150000,
		image :{
			main: "",
			sub: "",
			others: ""
		},

	},
	{
		tag: "Sale",
		title: "4 Beddroom Detached Duplex",
		location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description: "",
		price: 150000,
		image :{
			main: "",
			sub: "",
			others: ""
		},

	}, {
		tag: "Lease",
		title: "4 Beddroom Detached Duplex",
		location:  "Ire Akari Estate, Akala Express, Oluyole Extension, Ibadan, Oyo",
		description: "",
		price: 150000,
		image :{
			main: "/assets/",
			sub: "",
			others: ""
		},

	}
];

console.log((properties[0].title));