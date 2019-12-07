'use strict';
var rows = [];
var addOrRemove = {};
var count = 0;
var check = false;

// read the csv file
function retrieveData() {
  fetch("datasetfarm.json")
  .then(function (response) {
     return response.json();
  }).then(function (data) {
     console.log(data.data[0].Price);
     rows = data.data;
     updateCards(rows);
  });
}

function initialize(data) {
    rows = data;
}

retrieveData();

//updates the card with all the values retreived from the CSV file
function updateCards(data) {
    for (let i = 0; i < data.length; i += 1) {

        let ref = "container" + (i + 1);
        let addCartTo = document.getElementById(ref);
        let item = data[i];

        let img = document.createElement("img");
        let imgVar = "img" + (i + 1);
        img.setAttribute("id", imgVar);
        img.src = item.Image_Link;

        var farmName = document.createElement("p");
        let var1 = "Farm_Name" + (i + 1);
        farmName.setAttribute("id", var1);
        var t = document.createTextNode(item.Farm_Name);
        farmName.appendChild(t);

        var farmHeading = document.createElement("h4");
        let var2 = "Header" + (i + 1);
        farmHeading.setAttribute("id", var2);
        t = document.createTextNode(item.Farm_Name);
        farmHeading.appendChild(t);

        var catchyLine = document.createElement("p");
        let var3 = "Catchy_Line" + (i + 1);
        catchyLine.setAttribute("id", var3);
        t = document.createTextNode(item.Catchy_Line);
        catchyLine.appendChild(t);

        var price = document.createElement("p");
        let var4 = "Price" + (i + 1);
        price.setAttribute("id", var4);
        t = document.createTextNode(item.Price);
        price.appendChild(t);

        var btn = document.createElement("button");
        let var5 = "Button" + (i + 1);
        if (count == 0) {
            console.log(count);
            addOrRemove[item.Farm_Name] = "Add to Cart";
            btn.setAttribute("id", var5);
            btn.setAttribute("type", "submit");
            t = document.createTextNode("Add to Cart");
            btn.appendChild(t);
        } else {
            if (addOrRemove[item.Farm_Name] == "Remove From Cart") {
                check = true;
            }
            addOrRemove[item.Farm_Name] = "Add to Cart";
            btn.setAttribute("id", var5);
            btn.setAttribute("type", "submit");
            t = document.createTextNode("Add to Cart");
            btn.appendChild(t);
            //}
        }
        addCartTo.appendChild(img);
        document.getElementById(imgVar).style.width = "350px";
        addCartTo.appendChild(farmName);
        document.getElementById(var1).style.visibility = "hidden";
        addCartTo.appendChild(farmHeading);
        addCartTo.appendChild(catchyLine);
        addCartTo.appendChild(price);
        addCartTo.appendChild(btn);
        document.getElementById(var5).addEventListener("click", function() {
            changeAddToCart(item, var1, var2, var3, var4, var5, check)
        }, false);
        if (check == true) {
            changeAddToCart(item, var1, var2, var3, var4, var5, check);
            check = false;
        }
    }
    count = 1;
}

// counts the number of item in the cart
let totalItemInCart = 0;

// Performs the required actions when clicking the add to cart button
function changeAddToCart(item, v1FarmName, v2Header, v3CatchyLine, v4Price, v5Button, check) {
    if (document.getElementById(v5Button).innerText == "Add to Cart") {
        document.getElementById(v5Button).innerHTML = "Remove From Cart";
        document.getElementById(v1FarmName).style.visibility = "visible";
        document.getElementById(v2Header).innerText = "Successfully Added to Cart!";
        if (!check) {
            totalItemInCart = totalItemInCart + 1;
        }
        document.getElementById("no-cart").innerHTML = totalItemInCart;
        addOrRemove[item.Farm_Name] = "Remove From Cart";
        console.log(addOrRemove);
    } else if (document.getElementById(v5Button).innerText == 'Remove From Cart') {
        document.getElementById(v5Button).innerHTML = "Add to Cart";
        document.getElementById(v2Header).innerText = document.getElementById(v1FarmName).innerText;
        document.getElementById(v1FarmName).style.visibility = "hidden";
        document.getElementById(v2Header).style.visibility = "visible";
        totalItemInCart = totalItemInCart - 1;
        document.getElementById("no-cart").innerHTML = totalItemInCart;
        addOrRemove[item.Farm_Name] = "Add to Cart";
        console.log(addOrRemove);
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction1() {
    document.getElementById("myDropdown-1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// sort the cards according to the given property.
function sortBy(method) {
    if (method == 'Price High To Low') {
        let sorted = false;
        let temp;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < rows.length - 1; i++) {
                if (rows[i].Price < rows[i + 1].Price) {
                    temp = rows[i];
                    rows[i] = rows[i + 1];
                    rows[i + 1] = temp;
                    sorted = false;
                }
            }
        }
    } else if (method == 'Price Low To High') {
        let sorted = false;
        let temp;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < rows.length - 1; i++) {
                if (rows[i].Price > rows[i + 1].Price) {
                    temp = rows[i];
                    rows[i] = rows[i + 1];
                    rows[i + 1] = temp;
                    sorted = false;
                }
            }
        }
    } else {
        let sorted = false;
        let temp;
        while (!sorted) {
            sorted = true;
            for (let i = 0; i < rows.length - 1; i++) {
                if (rows[i].Farm_Name > rows[i + 1].Farm_Name) {
                    temp = rows[i];
                    rows[i] = rows[i + 1];
                    rows[i + 1] = temp;
                    sorted = false;
                }
            }
        }
    }

    // remove all the existing cards
    for (let i = 0; i < rows.length; i += 1) {
        let ref = "container" + (i + 1);
        let var1 = "Farm_Name" + (i + 1);
        let var2 = "Header" + (i + 1);
        let var3 = "Catchy_Line" + (i + 1);
        let var4 = "Price" + (i + 1);
        let var5 = "Button" + (i + 1);
        let var6 = "img" + (i + 1);
        let addCartTo = document.getElementById(ref);
        let child1 = document.getElementById(var1);
        let child2 = document.getElementById(var2);
        let child3 = document.getElementById(var3);
        let child4 = document.getElementById(var4);
        let child5 = document.getElementById(var5);
        let child6 = document.getElementById(var6);
        addCartTo.removeChild(child1);
        addCartTo.removeChild(child2);
        addCartTo.removeChild(child3);
        addCartTo.removeChild(child4);
        addCartTo.removeChild(child5);
        addCartTo.removeChild(child6);
    }

    //create new cards based on the sorting property
    updateCards(rows);
}
