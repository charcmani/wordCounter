
function wordFreq(string) {
	var l=-1,h=-1;
	var words = string.replace(/[.?–,()/0-9]/g, '').split(/\s/);
	//Regex to remove unwanted characters and numbers
    console.log(words);
    for (var i=0;i<words.length;i++)
    {	
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
/*for (var i=0;i<string.length;i++)
    {	
    	if((string[i]>='a'&& string[i]<='z') || (string[i]>='A'&& string[i]<='Z') || 
    		(string[i]=="'")||( string[i]=="-")||(string[i]=="\\"))
    	{if (h==-1)
    		l=h=i;
    	else h=i;
    	}
    	else{
    		words.push(string.slice(l,h+1).toLowerCase());
    		l=h=-1;
    	}
    }*/
module.exports.wordFreq=wordFreq;
