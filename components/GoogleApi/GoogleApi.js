

const apiLink ='https://movie-quote-api.herokuapp.com/v1/quote/?censored';


export async function getServerSideProps(){
  const res = await fetch(apiLink);
  const data = await res.json();
  return {
    props: {data}
  }
} 


const quotes = ({data}) => {
    return (
        <div className={styles.container}>
           <h1>Guess the movie...</h1> 

           <h3>{data.quote}</h3>
<h3>{data.show}</h3>


        
        </div>
    )}
export default quotes