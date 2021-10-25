// perhaps on page load (which is called when the user submits their mood ranking, the last prompt on the evening page), this journal page can show the user their daily rankings?)
// & then within the page, there are links that will take them to their weekly rankings & monthly rankings if they so choose to check these out / compare?
import React, { useEffect } from 'react';

import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm.js";



import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";


const styles = {

    notecard: {
        marginLeft: '5%',
    },

    body: {
        color: "#ac3b12",
        height: "100vh"
    },
    center: {
        alignItems: "center",
        textAlign: "center"
    },
}


const Dashboard = () => {
    useEffect(() => {
        console.log(data)
    })
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];

    // im not sure if the conditional logic is correct with the 'checking for data' statement .. perhaps this can be accomplished in the aforementioned suggestion on Home page where we just check auth.logged in & this will bypass the user going to this page at all
    // the <Link/> below to the greeting page has the user_.id as a parameter at the moment .. this was created before I fully understood context .. perhaps we can just use context instead to input user data into each page .. the idea below was that we pass in the user_.id as a parameter & then we useParams in the Greeting page to pull that out & QUERY_USER with it .. context might be the way to go however, need to play around with that
    // if user does not have an account, there is a <Link/> below that will direct them to the Signup page
    // lets go to the Signup page from here ...
    return (
        <main className="container-fluid" style={styles.body}>
            <div className="row" style={styles.center}>

                    <div className="col-11" style={styles.notecard}>
                        <ThoughtForm />
                    </div>
                    <div className="col-11" style={styles.card}>
                        <ThoughtList
                            thoughts={thoughts}
                            title="Gratitude Thought(s)..." />
                    </div>
            </div>

        </main>
    );
};

export default Dashboard;