import Head from "next/head";

const myResume = () => {
    return (
    <>
        <div>
            <Head>
                <title>My Journey</title>
                <meta name='keywords' content='my-resume-page' />
            </Head>

            <h1>My Resume</h1>  
            </div>

            <div className="profile">
            <h3>Profile</h3>

            <p>I am a mixed method (qualitative and quantitative) researcher who is experienced in research designs and development, data management, analysis, and interpretation for driving solutions and has a good eye for detail. Good knowledge in statistics and analytics. High-level understanding of operations and analytics tools for effective analysis of data. Passion for learning new ideas and can clearly, and effectively communicate.
            </p>
        </div>

        <div className="core-skills">
            <h3>Core Skills</h3>
         
                <table>
                    <tr>
                        <td>Quantitative and Qualitative research</td>
                        <td>Survey design and development</td>
                        <td>Teamwork and collaboration</td>
                    </tr>

                    <tr>
                        <td>Data management</td>
                        <td>Data cleaning and analysis</td>
                        <td>Data visualisation</td>
                    </tr>

                    <tr>
                        <td>Attention to details</td>
                        <td>Critical thinking and problem solving</td>
                        <td>Time management</td>
                    </tr>

                    <tr>
                        <td>Oral and written communication</td>
                        <td>Public speaking and presentation</td>
                        <td>Report writing</td>
                    </tr>
                </table>
        </div>

        <br></br>

        <div className="employment-history">
            <h3>Employment History</h3>
            <div>
                <h4><i>Hourly Paid Academic (Teaching and supervising) at the University of Salford</i></h4>
                     <ul>
                        <li>Work as a demonstrator with level 6 and 7 students; the role typically covers field trips, field and laboratory work set up, alongside computing sessions.</li>
                        <li>Teach and Supervise on three different level 7 modules</li>
                        <li>Delivered seminars on research designs with a particular focus on survey development and design as well as reliability and validating testing.</li>
                    </ul>
            </div>
            
        </div>
    </>
    )
}

export default myResume