import Table from "./tables/Table";

export function toJsx(query){
    const [open, close]=[ query.indexOf("[["), query.indexOf("]]") ];
    if(open===-1 || close===-1) return <>{query}</>;
    const [part1, part2, part3]=[ query.slice(0, open), query.slice(open+2, close), query.slice(close+2) ];
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

    if(part3.indexOf("[[")===-1){
        return(
            <div className="">
                <div className="part1">{part1}</div>
                <div className="part2"><Table data={data} colums={colums}/></div>
                <div className="part3">{part3}</div>
            </div>
        );
    }else{
        return(
            <div className="">
                <div className="part1">{part1}</div>
                <div className="part2"><Table data={data} colums={colums}/></div>
                <div className="part3">{toJsx(part3)}</div>
            </div>
        );
    }
};