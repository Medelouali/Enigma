
// const acceptable="zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]";
const matrix=[
    //       zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]=$
    /*#*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000101001",
    /*z*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*x*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*c*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*v*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*b*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*n*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*m*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*a*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",
    /*s*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*d*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*f*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*g*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*h*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*j*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*k*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*l*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*q*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*w*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*e*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*r*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*t*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*y*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*u*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*i*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*o*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*p*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*Z*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*X*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*C*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*V*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*B*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*N*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*M*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*A*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*S*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*D*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*F*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*G*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*H*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*J*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*K*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*L*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*Q*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*W*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*E*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*R*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*T*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*Y*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*U*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*I*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*O*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    /*P*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",    
    //       zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]=$    
    /*0*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*1*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*2*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*3*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*4*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*5*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*6*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*7*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*8*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    /*9*/   "111111111111111111111111111111111111111111111111111111111111111111111111111111011111",    
    //       zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]=$
    /*!*/   "000000000000000000000000000000000000000000000000000000000000000111111010111011010111",
    /*%*/   "111111111111111111111111111111111111111111111111111111111111110000000000000000000000",
    /*^*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000000000",
    /*&*/   "111111111111111111111111111111111111111111111111111111111111110001000101010000000000",
    /*|*/   "111111111111111111111111111111111111111111111111111111111111110000100101010000000000",
    /*/*/   "111111111111111111111111111111111111111111111111111111111111110000010101010000000000",
    /***/   "111111111111111111111111111111111111111111111111111111111111110000000101010000001000",
    /*(*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000001000",
    //       zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]=$
    /*)*/   "000000000000000000000000000000000000000000000000000000000000001111111010111011010111",
    /*_*/   "111111111111111111111111111111111111111111111111111111111111111111111111111011011111",
    /*+*/   "111111111111111111111111111111111111111111111111111111111111110000000101000000000000",
    /*-*/   "111111111111111111111111111111111111111111111111111111111111110000000101000000000000",
    /*,*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000101000",
    /*.*/   "000000000000000000000000000000000000000000000000000011111111110000000000000000000000",
    /*<*/   "111111111111111111111111111111111111111111111111111111111111110000000101010011000010",
    /*>*/   "111111111111111111111111111111111111111111111111111111111111110000000101010001000010",
    /*{*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000101000",
    //       zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789!%^&|/*()_+-,.<>{}[]=$
    /*}*/   "000000000000000000000000000000000000000000000000000000000000000001100010001000010111",
    /*[*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000101000",
    /*]*/   "000000000000000000000000000000000000000000000000000000000000000011111010111000000111",
    /*=*/   "111111111111111111111111111111111111111111111111111111111111110000000101010000101010",

    //# stands for the start of the command and $ for it's end, they are not acceptables as input.
];

export default matrix;