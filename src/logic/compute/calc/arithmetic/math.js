
export function facto(num){
    if(num<0) return null;
    if(num===0) return 1
    else return num * facto(num-1);
}

export function pow(x, y){
    return Math.pow(x, y);
}