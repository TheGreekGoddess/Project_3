// Search Bar Functions and Manipulation

// UMAR Artists name list
var artistList = ["10 Years", "112", "2 Chainz", "2Pac", "2 Pistols", "Aaron Carter", "Aaron Lewis", "Aaron Lines", "Aaron Tippin", "Ace Hood", "Action Bronson", "Adam Lambert", "Adele"];
//artistData = [0.11436822223581175, 0.612931206231935, 0.49777308838314815, 0.7665792361048979, 0.04247983534295952, 0.4129530349025795, 0.24083730718785043, 0.6666666666666666, 0.3352509399748568, 0.09646937374553434, 0.8342141186052763, 0.9053497942386831, 0.4378547481136458]

//refresh(artistData)

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

