// let tam=3
// let data=["1,0","1,1","1,2"]
// for (let pos = 0; pos < data.length; pos++) {
//     for (let x = 0; x < tam; x++) {
//       for (let y = 0; y < tam; y++) {
//         //console.log(`${x},${y}`)
//         //console.log(`${x},${y}`, "=>", `${x},${x + 1}`, "=>"`${x},${x + 2}`);
//         if (
//           data[pos] == `${x},${y}` ||
//           data[pos+1] == `${x},${x + 1}` ||
//           data[pos+2] == `${x},${x + 2}`
//         ) {
//           alert("you win");
//         }
//       }
//     }
//   }
const p=document.querySelector('#cont')
document.querySelector('#sumLike').addEventListener('click',()=>{
let val=parseInt(p.textContent)
val+=1
p.textContent=val
})
//
document.querySelector('#restLike').addEventListener('click',()=>{
    let val=parseInt(p.textContent)
    val-=1
    if(val>=0){
        p.textContent=val
    }
})
//

document.querySelector('#btnSub').addEventListener('click',(e)=>{
let val=e.target.textContent
if (val==="Suscribirse") {
    e.target.textContent='Desuscribirse'
}else{
    e.target.textContent='Suscribirse'
}
})