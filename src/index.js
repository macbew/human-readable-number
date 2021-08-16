module.exports = function toReadable (number) {

  arrE=[`zero`,`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`,`ten`,`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`];
  arrD=[``,`ten`,`twenty`,`thirty`,`forty`,`fifty`,`sixty`,`seventy`,`eighty`,`ninety`];
  let len = number.toString().length;
  let b = number.toString();
  let e, d, h;
       if (len===2 && b>20 && b%10!==0) { return `${arrD[b[0]]} ${arrE[b[1]]}`}
  else if(len===2 && b%10===0){return `${arrD[b[0]]}`;}
  else if (b<20) { e=arrE[number];  return e;}
  if( len === 3 && b%10!==0 && b[1]<2){h=arrE[b[0]]+` hundred`; e=arrE[number%100]; return `${h} ${e}`} 
if( len === 3 && b%10!==0 && b[1]>=2){h=arrE[b[0]]+` hundred`; d=arrD[b[1]-0]; e=arrE[b[2]]; return `${h} ${d} ${e}`} 
  else if (len ===3 && b%100===0){  return `${arrE[b[0]]} hundred`}
  else if ( len === 3 && b%10===0) {
    return `${arrE[b[0]]} hundred ${arrD[b[1]-0]}` }
  }



