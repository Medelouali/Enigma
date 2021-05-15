
export function facto(num){
    if(num<0) return null;
    let n=1;
    for(let i=num; i>=1; i--) n*=i;
    return n;
}

export function pow(x, y){
    return Math.pow(x, y);
}

export function abs(x){
    return Math.abs(x);
}

export function floor(x){
    return Math.floor(x);
}