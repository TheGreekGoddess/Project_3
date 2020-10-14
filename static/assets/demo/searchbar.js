// Search Bar Functions and Manipulation

// UMAR Artists name list
var artistList = ["10 Years", "112", "2 Chainz", "2Pac", "2 Pistols", "Aaron Carter", "Aaron Lewis", "Aaron Lines", "Aaron Tippin", "Ace Hood", "Action Bronson", "Adam Lambert", "Adele"];

// UMAR Selecting Document
$( document ).ready(function()
{
  // UMAR function running on user keyboard key up
  $ ( "#SearchBar" ).keyup( function()
   {
     // UMAR removing any search list created
     $("#SearchItemsContainer").empty(); 
     
     // UMAR running loop to generate search list
     for (var i= 0; i < artistList.length; i++)
     {
        // UMAR selecting input variable for search
        var searchInput = $( "#SearchBar").val().toLowerCase().trim();

        // UMAR defining condition for search input to be included with minimum lenght of 2 letters
        if (artistList[i].toLowerCase().includes(searchInput) && searchInput.length > 1)
        {
          // UMAR appending the populated searched items on the HTML
          $("#SearchItemsContainer").append( 
            `<div class = "searchHover container" id = "searchedDiv">
              <div class = "row">
                  <div class = "col-md-12">
                    <p class = "searchHover pl-3 pt-3 pb-2 searchedItems" id="${artistList[i]}" >${artistList[i]}</p> 
                  </div>
                </div>
            </div>`
            );
        };
     };
   });
});

// UMAR creating function for URL creation for Attributes
function attrUrl(artistName){
  var attributesUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/averageAttributes/${artistName}`
  console.log (attributesUrl)
  return attributesUrl
};

// UMAR creating function for URL creation for BillBoard Count
function billUrl(artistName){
  var billboardUrl = `https://billboard-top-100.herokuapp.com/api/v1.0/hot100/${artistName}`
  console.log (billboardUrl)
  return billboardUrl
};

//Umar Defining function for click on the dropdown menu
d3.selectAll("#SearchItemsContainer").on("click", selection)

function selection(){
  
  // UMAR Selecting Value of the dropdown which has been selected 
  var selectedArtist = d3.event.target.id
  
  // UMAR Removing the list of searched artists names  
  d3.selectAll(".searchedItems").remove();

  // UMAR replacing SearchBar value by the Selected Artist
  d3.select("#SearchBar").attr("placeholder",null).attr("value", `${selectedArtist}`)
  
  // UMAR clicking on "x" button to close the searchbar
  document.getElementById("close").click()
  
  console.log(selectedArtist)
  // UMAR returning artist name for further use
  attrUrl(selectedArtist);
  billUrl(selectedArtist);
  return selectedArtist
};







// function search_animal() { 

//   let input = document.getElementById('inlineFormInputGroup').value 

//   input=input.toLowerCase(); 

//   let x = document.getElementsByClassName('musician');     

//   for (i = 0; i < x.length; i++) {  

//       if (!x[i].innerHTML.toLowerCase().includes(input)) { 

//           x[i].style.display="none"; 

//       } 

//       else { 

//           x[i].style.display="list-item";                  

//       } 

//   } 
// };
