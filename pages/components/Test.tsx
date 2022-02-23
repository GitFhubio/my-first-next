import classes from '../../styles/Test.module.css'

export default function Test() {
  return  (
    <>
    <div className={classes.testWrapper}>
      <h1>elleh </h1>
    </div>
    <style jsx>
      { `
        h1 {
        color:green;
      }
    `}
    </style>
    </>
  )
}

