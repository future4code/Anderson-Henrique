const numeroFaltante = (array:Array<number>) : number => {
    let orderedArray:Array<number> = array.sort((a, b) => a - b)
    for(let i=0;i<100;i++){
        if((orderedArray[i+1] - orderedArray[i])>1){
            return (orderedArray[i] +1)
        }
    }
}