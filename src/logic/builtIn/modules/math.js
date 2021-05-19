
const math={
    abs: (x)=> Math.abs(x),
    acos: (x)=> Math.acos(x),
    acosh: (x)=> Math.acosh(x),	
    asin: (x)=> Math.asinh(x),	
    asinh: (x)=> Math.asinh(x),	
    atan: (x)=> Math.atan(x),	
    atan2: (x, y)=>Math.atan2(x, y),
    atanh: (x)=> Math.atanh(x),
    cbrt: (x)=> Math.cbrt(x),
    ceil: (x)=> Math.ceil(x),
    clz32: (x)=> Math.clz32(x),
    cos: (x)=> Math.cos(x),
    cosh: (x)=> Math.cosh(x),
    exp: (x)=> Math.exp(x),	
    expm1: (x)=> Math.expm1(x),	
    floor: (x)=> Math.floor(x),	
    fround: (x)=> Math.fround(x),	
    log: (x)=> Math.log(x),	
    log10: (x)=> Math.log10(x),	
    log1p: (x)=> Math.log1p(x),	
    log2: (x)=> Math.log2(x),	
    max: (...args)=> Math.max(...args),
    min: (...args)=> Math.max(...args),
    pow: (x, y)=> Math.pow(x, y),
    random: ()=>Math.random(),
    round: (x)=> Math.round(x),
    sign: (x)=> Math.sign(x),
    sin: (x)=> Math.sin(x),
    sinh: (x)=> Math.sinh(x),
    sqrt: (x)=> Math.sqrt(x),
    tan: (x)=> Math.tan(x),	
    tanh: (x)=> Math.tanh(x),	
    trunc: (x)=> Math.trunc(x)

    // isFinite()	**Checks whether a value is a finite number***
    // isInteger()	**Checks whether a value is an integer***
    // isNaN()	**Checks whether a value is Number.NaN***
    // isSafeInteger()	**Checks whether a value is a safe integer***
    // toExponential(x)	**Converts a number into an exponential notation***
    // toFixed(x)	**Formats a number with x numbers of digits after the decimal point***
    // toLocaleString()	**Converts a number into a string, based on the locale settings***
    // toPrecision(x)	**Formats a number to x length***
    // toString()	**Converts a number to a string***
    // valueOf()	**Returns the primitive value of a number    
};

export default math;