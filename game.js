var p = ["", ""],
  color = ["blue", "red"],
  cl = ["turnBlue", "turnRed"];
p[0] = prompt("Player one enter your name, you will be Blue");
p[1] = prompt("Player two enter your name, you will be Red");
let mp = {
  ar1: [0,0],
  ar2: [0,1],
  ar3: [0,2],
  ar4: [0,3],
  ar5: [0,4],
  ar6: [0,5],
  ar7: [0,6]
};
function checkForConnect (x,id,i){
    let r1=0,r2=0,c1=0,c2=0;
    for(let k=x;k<(x+4)&&k<5;k++)
    if(m[k][id]==i)
    r1++;
    for(let k=x;k>(x-4)&&k>=0;k--)
    if(m[k][id]==i)
    r2++;
    for(let k=id;k<(id+4)&&k<7;k++)
    if(m[x][k]==i)
    c1++;
    for(let k=id;k>(id-4)&&k>=0;k--)
    if(m[x][k]==i)
    c2++;
    if(r2==4||c2==4||r1==4||c1==4)
    return true;
    
    return false;
}
let count=35;
let m = new Array(5).fill(-1).map(() => new Array(7).fill(-1));
let i = 0;
var fg=1;
let hd = $(".heading");
hd[0].children[2].innerText = `${p[i]}: it  is your turn , please pick a column to drop your ${color[i]} chip.`;
let chipArray = $(".chipArray");

chipArray.on("click", function (event) {
 
    if (fg == 0) return;
     let x = mp[this.id][1];
     let id = 5 - (++mp[this.id][0]);
    if(id<0||m[id][x]!=-1)
    return;
    count--;
    console.log(id,x);
  m[id][x]=i;
  $(this.children).eq(id).addClass(cl[i]);

   if (count == 0) {
     hd.html(`It's Tie ! Refresh your browser to play again!`);
     hd.css("font-size", "2.5rem");
     return;
   }
 else if (checkForConnect(id, x,i)) {
    hd.html(`${p[i]} has won! Refresh your browser to play again!`);
    hd.css("font-size", "2.5rem");
    fg = 0;
    return;
  }
  else
  {
      i = i ^ 1;
      hd[0].children[2].innerText = `${p[i]}: it  is your turn , please pick a column to drop your ${color[i]} chip.`;
  }
});
