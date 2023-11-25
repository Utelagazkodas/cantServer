import { settings } from "./index.js";


export function removeComments(data: string) : string {
    var ret : string = ""
    var lines = data.split('\n');

    // loops throught the lines
    for (var i = 0; i < lines.length; i++) {
        var comment = lines[i].search("//")

        // if there is a comment removes that part
        if(comment != -1){
            ret += lines[i].substring(0, comment)
        }
        else{
            ret += lines[i]
        }

    }

    return ret
}

export function isWhole(num : number) : boolean{
    // num % 1 === 0 checks for a whole number
    if (num % 1 === 0 && num >= 0) {
        return true;
    }

    return false;
};

export function formatToken(data: string) : string{

    var ret : string = ""

    for (let i = 0; i < data.length; i++) {
        if(settings.tokenCharset.search(data[i]) != -1){
            ret += data[i]
        }
    }

    return ret
}