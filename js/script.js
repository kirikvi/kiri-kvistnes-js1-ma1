// Question 1

const cat = {
    complain: function(){
        console.log("Meow!");
    }
}

cat.complain();


// Question 2

const h3 = document.querySelector("h3");

h3.innerHTML = "Updated heading";


// Question 3

h3.style.fontSize = "2em";


// Question 4

h3.classList.add("subheading");


// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i ++){
    paragraphs[i].style.color = "red";
}


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`; //or = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow"; 


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function nameList(list) {

    for (let i = 0; i < list.length; i++){
        const names = list[i].name;
        console.log(names);
    }
}

nameList(cats);

//Question 8:

function createCats(cats) {

    let newHtml = "";
    for (let i = 0; i < cats.length; i++){

        let catAge = "Unknown";
        if(cats[i].age){
            catAge = cats[i].age;
        }

        newHtml +=`
        <div>
        <h5>${cats[i].name}</h5>
        <p>${catAge}</p>
        </div>`;   
    }
    
    return newHtml;
}
const finalHtml = createCats(cats);
console.log(finalHtml);

const container = document.querySelector(".cat-container");
container.innerHTML = finalHtml;
