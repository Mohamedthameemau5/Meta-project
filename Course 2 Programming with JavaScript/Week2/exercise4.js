function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >=2;
    var condition2 = typeof(match) == "string" && match.length ==1;
    if(condition1==true && condition2==true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }else{
        console.log("Please pass correct argument to the function")
    }
    
}

letterFinder([],[])
letterFinder("cat","c")