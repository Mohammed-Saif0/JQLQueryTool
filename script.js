

function isOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

function copyToClipboard() {
    const input = document.getElementById("display");
    input.select();
    input.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(input.value)
    document.getElementById("successMessage").style.visibility = "visible"
}

function getText(){
    let text = document.getElementById("text").value

    let i = 0, j = 0
    let set = new Set();
    while(i < text.length && j < text.length){
        while(i < text.length && text.substring(i,i+4) != "MET-") i += 1;
        j = i + 4;
        if(i > text.length || j > text.length) break;
        while(j <text.length && (text[j] != " " && isOnlyNumbers(text[j]))) ++j;

        set.add(text.substring(i,j));
        i = j
    }
    let displayElement = document.getElementById("display")
    let finalString = null
    console.log(set)
    for(let value of set) {
        if(finalString == null) finalString = ""
        else finalString += ","
        finalString += (value)
    }

    if(finalString != null)
    displayElement.value = "issue in (" + finalString + ")"
}


function clearBothTextAreas(){
    document.getElementById("text").value = "";
    document.getElementById("display").value = "";
    document.getElementById("successMessage").style.visibility = "hidden"
}
