// Write your JS in here
let pics = [
	"imgs/141FD20F-5652-47BC-9FC9-32834DAE7721_1_105_c.jpeg",
	"imgs/1972C7DB-F726-491C-98E5-F8DB63D3B88A_1_105_c.jpeg", 
	"imgs/53DB1857-77C6-40A6-96AF-FC97B8FFD5D3_1_105_c.jpeg",
	"imgs/A5DC7DD6-C1DF-4D96-8BD9-D3120A787E11_1_105_c.jpeg",
	"imgs/13654B15-923D-47AB-8124-E9EC17EB241D_1_105_c.jpeg",
	"imgs/EF95B1CE-5683-45B3-A994-0B6214289ABD_1_105_c.jpeg",
	"imgs/55333BCC-BBFE-4ECC-814E-A650633E40AC_1_105_c.jpeg",
	"imgs/7CDE57D3-448C-4BFF-A43A-B92055CB9F84_1_105_c.jpeg",
	"imgs/6B6DD891-9627-4B84-8643-58B38D61F770_1_105_c.jpeg",
	"imgs/CEC15662-219C-420E-BA6F-EAF2FD189250_1_105_c.jpeg"
]

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter = 1;

btn.addEventListener("click", function () {
	if (counter === pics.length) {
		counter = 0;
	}
	img.src = pics[counter];
	counter++;
});
