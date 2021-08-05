const body = document.querySelector("body");
"0 1 1 2 3 5 8 13"

let current=0, next=1, prev;
const recursive = (current = 0, next = 1) =>{
    if(current ===0 ){
        //print 0
        body.append(current + " ")
        console.log(current)
        //current is = to 0 + 1
        current+= next
        // print 1
        body.append(current + " ") 
        console.log(current)

        recursive(current, next)
        return
    }

    // prev = 1 // prev = 1
    prev = current
    //current = 1 // current = 1
    current = next
    //next is = to 1+1
    next = prev + current
    //print 1
    body.append(current + " ")
    console.log(current)
    //current = 1 // next = 2
    recursive(current, next)
}


recursive()