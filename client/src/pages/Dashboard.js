// perhaps on page load (which is called when the user submits their mood ranking, the last prompt on the evening page), this journal page can show the user their daily rankings?)
// & then within the page, there are links that will take them to their weekly rankings & monthly rankings if they so choose to check these out / compare?
import React from 'react';
import SleepChart from '../components/SleepChart';
import WaterChart from '../components/WaterChart';
import CalendarPage from '../components/Calendar';
import Journal from '../components/Journal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const styles = {
    card: {
        background: '#97B8C2',
        border: '#011E3D solid 2px',
        display: 'block',
        margin: '20px auto',
    },
    calendar: {
        background: '#97B8C2',
        border: '#011E3D solid 2px',
        padding: '2%',
        margin: '2%'
    },
}


const Dashboard = () => {


    // im not sure if the conditional logic is correct with the 'checking for data' statement .. perhaps this can be accomplished in the aforementioned suggestion on Home page where we just check auth.logged in & this will bypass the user going to this page at all
    // the <Link/> below to the greeting page has the user_.id as a parameter at the moment .. this was created before I fully understood context .. perhaps we can just use context instead to input user data into each page .. the idea below was that we pass in the user_.id as a parameter & then we useParams in the Greeting page to pull that out & QUERY_USER with it .. context might be the way to go however, need to play around with that
    // if user does not have an account, there is a <Link/> below that will direct them to the Signup page
    // lets go to the Signup page from here ...
    return (
        <main className="container">
            <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-12" style={styles.card}>
                    <Tabs defaultActiveKey="water" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="water" title="Water">
                            <WaterChart />
                        </Tab>
                        <Tab eventKey="journal" title="Journal">
                            <Journal />
                        </Tab>
                        <Tab eventKey="sleep" title="Sleep">
                            <SleepChart />
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12" style={styles.calendar}>
                    <CalendarPage />
                </div>
            </div>
        </main>
    );
};

export default Dashboard;