function getUpperCase(str){
 return str.toUpperCase();
}


function getLowerCase(str){
return str.toLowerCase();
}

function getSentenceCase(str){
    return str.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (char)=>{
        return char.toUpperCase();
    })

}

function getProperCase(str){
    return str.toLowerCase().replace(/\b\w/g, (char)=>{
        return char.toUpperCase();
    })

}

// getProperCase(str);


module.exports={
    getUpperCase,getLowerCase,getSentenceCase,getProperCase
}