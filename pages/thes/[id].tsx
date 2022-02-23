import type { NextPage } from 'next'
import { useRouter } from 'next/router'
export async function getServerSideProps(context : any){  //getServerSideProps vs GetstaticProp+getstaticpaths  // in queste due non posso usare router(codice eseguibile)
  
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

const Person: NextPage<{items : any}> = (props) => {
  // const router=useRouter();
  return (
    
    <div>
         {props.items[0].taste}
     <p>HO CATTURATO L'ID</p>
    </div>
  )
}

export default Person
