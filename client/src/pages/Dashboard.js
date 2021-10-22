// perhaps on page load (which is called when the user submits their mood ranking, the last prompt on the evening page), this journal page can show the user their daily rankings?)
// & then within the page, there are links that will take them to their weekly rankings & monthly rankings if they so choose to check these out / compare?
import React, { useEffect } from 'react';
import SleepChart from '../components/SleepChart';
import WaterChart from '../components/WaterChart';
import SocialChart from '../components/SocialChart';
import OutsideChart from '../components/OutsideChart';
import CalendarPage from '../components/Calendar';
import { Link } from "react-router-dom";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";


const styles = {
    card: {
        display: 'block',
        margin: '2%',
        background: '#e6d192ff',
        borderRadius: '4px',
        padding: '2%',
        border: '#ac3b12 2px solid',
    },
    calendar: {
        display: 'flex',
        background: '#e6d192ff',
        border: '#ac3b12 2px solid',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '2%',
        margin: '2%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    body: {
        color: "#ac3b12",
        height: "100vh"
    },
    center: {
        alignItems: "center",
        textAlign: "center"
    },
    text: {
        textDecoration: 'none',
        fontWeight: '2%',
        color: "#ac3b12",
        textAlign: "center",
        fontWeight: '700'
    }
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
                <div className="col-lg-6 col-sm-12" style={styles.card}>
                    <Tabs defaultActiveKey="water" id="uncontrolled-tab-example" className="mb-3" >
                        <Tab eventKey="water" title="water">
                            <div>
                                <WaterChart />
                            </div>
                        </Tab>
                        <Tab eventKey="social" title="social">
                            <SocialChart />
                        </Tab>
                        <Tab eventKey="sleep" title="sleep">
                            <SleepChart />
                        </Tab>
                        <Tab eventKey="outside" title="outside">
                            <OutsideChart />
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-lg-5 col-sm-12" style={styles.calendar}>
                    <CalendarPage />
                </div>
                <Link to={"/journal"} className='center' style={styles.text}>
                  journal
                </Link>
            </div>

        </main>
    );
};

export default Dashboard;