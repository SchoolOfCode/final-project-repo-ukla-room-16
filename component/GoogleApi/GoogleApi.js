

const apiLink ='   ';


export async function getServerSideProps(){
  const res = await fetch(apiLink);
  const data = await res.json();
  return {
    props: {data}
  }
} 


const somename = ({data}) => {
    return (
        <div className={styles.container}>
           <h1>Something.</h1> 

           <h3>{data.something}</h3>
<h3>{data.somethingelse}</h3>


        
        </div>
    )}
export default somename