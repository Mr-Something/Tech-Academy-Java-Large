function getReceipt() {
				var text1 = "<h3>You Ordered:</h3>";
				var runningTotal = 0;
				var sizeTotal = 0;
				var sizeArray = document.getElementsByClassName("size");
				for (var i = 0; i < sizeArray.length; i++) {
					if (sizeArray[i].checked) {
						var selectedSize = sizeArray[i].value;
						text1 = text1+selectedSize+"<br>";
					}
				}
				if (selectedSize === "Personal") {
				sizeTotal = 6;
				} else if (selectedSize === "Medium") {
				sizeTotal = 10;
				} else if (selectedSize === "Large") {
				sizeTotal = 14;
				} else if (selectedSize === "Extra Large") {
				sizeTotal = 16;
				}
				runningTotal = sizeTotal;
				console.log(selectedSize+" = $"+sizeTotal+".00");
				console.log("size text1: "+text1);
				console.log("subtotal: $"+runningTotal+".00");
				getCheese(runningTotal,text1);
			};
			
			function getCheese(runningTotal,text1) {
				var cheeseTotal = 0;
				var cheeseRadio = document.getElementsByClassName("cheese");
				for (var i = 0; i < cheeseRadio.length; i++) {
					if (cheeseRadio[i].checked) {
						var selectedCheese = cheeseRadio[i].value;
						text1 = text1+selectedCheese+"<br>";
					}
				}
				if (selectedCheese === "Regular") {
				cheeseTotal = 0;
				} else if (selectedCheese === "No Cheese") {
				cheeseTotal = 0;
				} else if (selectedCheese === "Extra Cheese") {
				cheeseTotal = 3;
				}
				runningTotal = (runningTotal + cheeseTotal);
				getCrust(runningTotal,text1);
			};
			
			function getCrust(runningTotal,text1) {
				var crustTotal = 0;
				var crustRadio = document.getElementsByClassName("crust");
				for (var i = 0; i < crustRadio.length; i++) {
					if (crustRadio[i].checked) {
						var selectedCrust = crustRadio[i].value;
						text1 = text1+selectedCrust+"<br>";
					}
				}
				if (selectedCrust === "Plain Crust") {
				crustTotal = 0;
				} else if (selectedCrust === "Garlic Butter Crust") {
				crustTotal = 0;
				} else if (selectedCrust === "Spicy Crust") {
				crustTotal = 0;
				} else if (selectedCrust === "House Special Crust") {
				crustTotal = 0;
				} else if (selectedCrust === "Cheese Stuffed Crust") {
				crustTotal = 3;
				}
				runningTotal = (runningTotal + crustTotal);
				getSauce(runningTotal,text1);
			};
			
			function getSauce(runningTotal,text1) {
				var sauceRadio = document.getElementsByClassName("sauce");
				for (var i = 0; i < sauceRadio.length; i++) {
					if (sauceRadio[i].checked) {
						var selectedSauce = sauceRadio[i].value;
						text1 = text1+selectedSauce+"<br>";
					}
				}
				getVeggie(runningTotal,text1);
			};
			
			function getVeggie(runningTotal,text1) {
				var veggieTotal = 0;
				var selectedVeggie = [];
				var veggieArray = document.getElementsByClassName("veggies");
				for (var j = 0; j < veggieArray.length; j++) {
				if (veggieArray[j].checked) {
				selectedVeggie.push(veggieArray[j].value);
				console.log("selected veggie item: ("+veggieArray[j].value+")");
				text1 = text1+veggieArray[j].value+"<br>";
				}
				}
				var veggieCount = selectedVeggie.length;
				if (veggieCount > 1) {
				veggieTotal = (veggieCount - 1);
				} else {
				veggieTotal = 0;
				}
				runningTotal = (runningTotal + veggieTotal);
				console.log("total selected veggie items: "+veggieCount);
				console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
				console.log("veggie text1: "+text1);
				console.log("Purchase Total: "+"$"+runningTotal+".00");
				getMeat(runningTotal,text1);
			};	
			
			
			
			function getMeat(runningTotal,text1) {
				var meatTotal = 0;
				var selectedMeat = [];
				var meatArray = document.getElementsByClassName("meats");
				for (var j = 0; j < meatArray.length; j++) {
				if (meatArray[j].checked) {
				selectedMeat.push(meatArray[j].value);
				console.log("selected meat item: ("+meatArray[j].value+")");
				text1 = text1+meatArray[j].value+"<br>";
				}
				}
				var meatCount = selectedMeat.length;
				if (meatCount > 1) {
				meatTotal = (meatCount - 1);
				} else {
				meatTotal = 0;
				}
				runningTotal = (runningTotal + meatTotal);
				console.log("total selected meat items: "+meatCount);
				console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
				console.log("meat text1: "+text1);
				console.log("Purchase Total: "+"$"+runningTotal+".00");
				document.getElementById("showText").innerHTML=text1;
				document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
			};	