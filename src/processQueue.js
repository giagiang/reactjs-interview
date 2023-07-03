export function getFinalState(baseState,queue){

    let finalState = baseState;
    // console.log("queue", queue);
    for (let element of queue){
        // console.log(element);
        if(typeof element  === 'function'){
            finalState = element(finalState);
        }else 
            finalState = element;
    }


    console.log("final State", finalState);
    return finalState;
} 