// const exp=`
// 				Unlike other programming languages, you would have to explicitly call a function in order to 
// 			print a variable to the screen, Enigma does that for you, for example to check the value of X, 
// 			just throw X into the interpreter and it'll echo back it's value and it goes the same expression 
// 			like:
// 			[[
// 			x=21; ***
// 			x;//will throw 21 ***
// 			f(x)=cos(sin(1-cos(x))); *** 
// 			f(f(1-f(2021)));// will throw back the exact value no function needed;
// 			]]

import Table from "./tables/Table";


//             `;
export function toJsx(query){
    const [open, close]=[ query.indexOf("[["), query.indexOf("]]") ];
    if(open===-1 || close===-1) return query;
    const [part1, part2, part3]=[ query.slice(0, open), query.slice(open+2, close), query.slice(close+2) ];
    console.log(part1);
    console.log(part2);
    console.log(part3);
    const data=[];
    const lines=part2.split("***");
    let colums=-1;
    lines.forEach(e => {
        let cols=e.split("**");
        let row=[];
        colums=cols.length;
        cols.forEach(ep=>row.push(ep))
        data.push(row);
    });
    return(
        <div className="">
            <div className="part1">{part1}</div>
            <div className="part2"><Table data={data} colums={colums}/></div>
            <div className="part3">{part3}</div>
        </div>
    );
};