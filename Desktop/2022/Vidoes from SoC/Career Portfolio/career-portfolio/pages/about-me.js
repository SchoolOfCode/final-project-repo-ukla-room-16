import Head from "next/head";

const aboutMe = () => {
    return (
    <>
        <div>
            <Head>
                <title>About Me</title>
                <meta name='keywords' content='about-me-page' />
            </Head>

            <h1>About Me!</h1> 
            <p>
            Although I am currently in my early 30s and doing a PhD in Environmental Studies, I have quite a busy and interesting life so far! 
            <br></br>
            My journey from being a fresh graduate out of university in 2012 to doing a PhD alongside training to be a junior data analyst and web developer has not been easy or straightforward. However, it has been an interesting journey and I am proud of everything that I have achieved so far, and the ones to come in the near future. 
            </p>
        </div>
    </>
    )
}

export default aboutMe