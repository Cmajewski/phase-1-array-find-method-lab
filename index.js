// code your solution here
let superbowlWin=function(array){
    let win=array.find(x=>x.result==="W")
    if (win){ return win.year}
}