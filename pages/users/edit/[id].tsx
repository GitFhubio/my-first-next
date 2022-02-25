
import type { NextPage } from 'next'
import router from 'next/router';
import React from 'react';
export async function getServerSideProps(context:any){ 
  const res=await fetch('http://localhost:3000/api/users');
  const users =await res.json();
  const user=users.filter((el:any) => el.id == context.params.id)[0];
  const roles=['user','admin']
  // const roles = Array.from(new Set(users.map((el:any) =>el.role)));
  // funziona ma i ruoli o li prendo da api oppure cosi 
  // prendo solo tutti quelli che hanno gli user,quindi se sono diventati tutti admin non ci sarà piu user
  return {
    props:{
      user:user,
      roles:roles
    }
  }
}

const UserId: NextPage<{user:any,roles:any}>= (props) => {
  const roleRef =  React.useRef() as React.MutableRefObject<HTMLSelectElement>;
  function submitHandler(event:any) {
    event.preventDefault();
    const role=roleRef.current.value;
    console.log(role);
    let data = {id:props.user.id,role:role}

    fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    router.push(`/prova`)
  }
  return (
    
    <div>

<form className='form-group d-flex align-items-center' onSubmit={submitHandler}>
        <div>
          <select  required id='role'  ref={roleRef}>

    {props.roles.map((res:any,ind:any)=>
    <option key={ind} value={res}>{res}</option>
    )}
</select>
        </div>
        <button className='btn btn-primary ml-2'>Edit</button>
        </form>

    </div>
  )
}

export default UserId
