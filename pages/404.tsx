import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
const NotFound: NextPage = () => {
  const router=useRouter();
  useEffect(()=>{
setTimeout(()=>{ 
  router.push('/')
},10000)

  },[])
  return (
    
    <div className={styles.container}>
       HAI SBAGLIATO TUTTO LA PAGINA NON ESISTE
    </div>
  )
}

export default NotFound
