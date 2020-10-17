function wordCount(myString) {
  // Convert string to an array of words
  var stringArray = myString.split(" ");
  var wordFrequency = {};
  // Iterate through the array
  for (var i = 0; i < stringArray.length; i++) {
    var currentWord = stringArray[i];
    // If the word has been seen before...
    if (currentWord in wordFrequency) {
      // Add one to the counter
      wordFrequency[currentWord] += 1;
    }
    else {
      // Set the counter at 1
      wordFrequency[currentWord] = 1;
    }
  }
  return wordFrequency;
}

function WordCloud(WordList){

// set the dimensions and margins of the graph
var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_wordcloud").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits our requirements
var layout = d3.layout.cloud()
  .size([width, height])
  .words(WordList.map(function(d) { return {text: d}; }))
  .padding(5)
  .fontSize(40)
  .rotate(function(){ return ~~(Math.random()*2)*90; })
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
function draw(words) {
  svg.append("g")
     .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
     .selectAll("text")
     .data(words)
     .enter().append("text")
     .style("font-family","Impact")
     .style("fill","#D446B1")
     .style("font-size", function(d) { return d.size + "px"; })
     .attr("text-anchor", "middle")
     .attr("transform", function(d) {
     return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
       })
      .text(function(d) { return d.text; });
  }
}

// Load data from billboardHot100_1999-2019.csv
(async function(){
  var link = "https://billboard-top-100.herokuapp.com/api/v1.0/hot100/lyrics/Drake";
  var data = await d3.json(link).catch(function(error) {
    console.log(error);
  });
  // console.log(data); 
  console.log("Sample Size:" + data.length);

  stopwords = ['i','me','I','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves',
  'he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves',
  'what','which','who','whom','this','that','these','those','am','is','are','was','were','be','been','being','have','has',
  'had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by',
  'for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down',
  'in','out','on','off','over','under','again','further','then','once','here','there','when','where','why','how','all','any',
  'both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t',
  'can','will','just','don','should','now','nigga','Nigga','niggas','Niggas',"I'm","A",'nigga,',"y'all","don't","it's"," ","I—",
  "It's","that's","And",'!','/','the','The',","];
  
  function remove_stopwords(str) {
    reString = []
    words = str.split(' ')
    for(i=0;i<words.length;i++) {
       MyWords = words[i]
       if(!stopwords.includes(MyWords)) {
           reString.push(MyWords)
       }
    }
    return(reString.join(' '))
  }  
  
  var rawString = "";
  for (var i = 0; i < 3; i++){
    rawString = rawString.concat(data[i].lyrics)
  };

  String = remove_stopwords(rawString) ;
  // console.log(String);
  var WordFrequency = wordCount(String);
  // console.log(WordFrequency);
  WordSorted = Object.keys(WordFrequency).sort(function(a,b){return WordFrequency[b]-WordFrequency[a]});
  Topwords = WordSorted.slice(0,100);
  WordCloud(Topwords);
  console.log(Topwords); 
})()