function calculateFR({type, value}){
    const FR;
    if(type === 'PP') {
        if(value === 'free') {
            FR = 3;
        }
        else if(value === 'pro') {
            FR = 2;
        }
        else if(value === 'premium') {
            FR = 1;
        }
    }
    else if(type === 'TP') {
        if(value === 'NA') {
            FR = 3;
        }
        else if(value === 'Manual') {
            FR = 2;
        }
        else if(value === 'Recurrente') {
            FR = 1;
        }
    }
    else if(type === 'PC') {
        if(value === 'NA') {
            FR = 3;
        }
        else if(value === 'Mensual') {
            FR = 2;
        }
        else if (value === 'Anual') {
            FR = 1;
        }
    }
    return FR;
} 


function calculateLifecycle(type, value, prevValue) {
    const CLR; 
    if(type === 'An') {
        if(value <= 90) {
            CLR = 4;
        }
        else if(value >= 91 && value <= 180) {
            CLR = 3
        }
        else if(value >= 181 && value <= 359) {
            CLR = 2;
        }
        else if(value >= 360) {
            CLR = 1;
        }
    }
    else if(type === 'TX') {
        // if(value === 15) {
        //     CLR = '.'
        // } 
        // else if()
    }
    else if(type === 'TkProm') {
        if(value >= prevValue) {
            CLR = 0;
        }
        else if(value <= prevValue) {
            CLR = 5;
        }
    }
    return CLR;
}


