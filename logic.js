
function wordFreq(string) {
	var l=-1,h=-1;
	var words = string.replace(/[?–,;()0-9]/g, '').split(/\s/);
	//Regex to remove unwanted characters and numbers
    //console.log(words);
    for (var i=0;i<words.length;i++)
    {	var k = words[i].length;
    	if (words[i][k-1]=='.')words[i]=words[i].slice(0,k-1);
    	words[i]=words[i].toLowerCase();
    }
    //Change all the words to lowercase;
    var freqMap = {};
    //Map to store key value pair (here key = word , Value= frequency)
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
    //return the map to server.js
}
module.exports.wordFreq=wordFreq;
