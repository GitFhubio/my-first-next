import type { NextPage } from 'next'
import Link from 'next/link';
export async function getStaticProps(){ 
  const res=await fetch('http://localhost:3000/api/estathe');
  const data =await res.json();

  let  mydata = Object.keys(data["estathe"]["type"]).map(function(key, index) {
   return  data["estathe"]["type"][key];})

   let final=[];
   for (let index = 0; index < 2; index++) {
     final.push({
      taste:mydata[index]["taste"],
      quantity:mydata[index]["quantity"]
     })
     
   }
  return {
    props:{
      items:final
    }
  }
}
const The: NextPage<{items : any}> = (props) => {

  return (
    <div>
     {props.items.map((el:any,id:any)=>  (
     <p className="font-bold underline" key={id+1} ><Link href={`/thes/${id+1}`} ><a>{el.taste} {el.quantity}</a></Link></p>
     ))}
    </div>
     )
}

export default The