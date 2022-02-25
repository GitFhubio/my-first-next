import type { NextPage } from 'next'
export async function getServerSideProps(context:any){ 
  const res=await fetch('http://localhost:3000/api/users');
  const users =await res.json();
  const user=users.filter((el:any) => el.id == context.params.id)[0];

  return {
    props:{
      item:user
    }
  }
}
const UserId: NextPage<{item:any}> = ({item}) => {
  return (
    
    <div>
  <p>Name: {item.name}</p>
  <p>Email: {item.email}</p> 
  <p>Role: {item.role}</p> 
    </div>
  )
}

export default UserId
