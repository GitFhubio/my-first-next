import type { NextPage } from 'next'
import { useRouter } from 'next/router'
export async function getStaticProps(context : any){  //getServerSideProps vs GetstaticProp+getstaticpaths  // in queste due non posso usare router(codice eseguibile)
    const res=await fetch('http://localhost:3000/api/hello');
    const people =await res.json();
    const person=people.filter((el:any) => el.id == context.params.id)
    return {
      props:{
        person
      }
    }
  }

  export async function getStaticPaths(context : any){  //getServerSideProps  // in queste due non posso usare router(codice eseguibile)
    const res=await fetch('http://localhost:3000/api/hello');
    const data =await res.json();
    const paths=data.map((el:any) => ({params:{id: el.id } }))
    return {
      paths,
      fallback:false
    }
  }

const Person: NextPage<{person : any}> = (props) => {
  // const router=useRouter();
  return (
    <div>
      <p>{props.person[0].id} {props.person[0].name}</p>
     <p>HO CATTURATO L'ID</p>
    </div>
  )
}

export default Person
