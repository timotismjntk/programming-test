const reverseWord = (angka) => {
    let str = angka.toString()
    let newstr = ''
    for(var i=str.length -1; i>=0; i--){
        newstr += str[i]
    }
    console.log(newstr)
}

reverseWord(3475)