const minimumAbsDifference = (arr) => { //[4,2,1,3]
    arr = arr.sort((a,b)=>a-b);
    let dif = Infinity;
    let result = [];
    for(let i=0; i<arr.length-1; i++){
        if(dif>(arr[i+1]-arr[i])){
            dif = arr[i+1]-arr[i];
        }
    }
    for(let i=0; i<arr.length-1; i++){
        if (dif===(arr[i+1]-arr[i])){
            result.push([arr[i],arr[i+1]]);
        }
    }
    return result; //[[1,2],[2,3],[3,4]]
};