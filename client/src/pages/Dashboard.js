// perhaps on page load (which is called when the user submits their mood ranking, the last prompt on the evening page), this journal page can show the user their daily rankings?)
// & then within the page, there are links that will take them to their weekly rankings & monthly rankings if they so choose to check these out / compare?
import React , {useEffect} from "react";
import SleepChart from '../components/SleepChart';
import WaterChart from '../components/WaterChart';
import SocialChart from '../components/SocialChart';
import OutsideChart from '../components/OutsideChart';
import CalendarPage from '../components/Calendar';
import Journal from '../components/Journal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { useQuery } from "@apollo/client";
import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm.js";

import { QUERY_THOUGHTS } from "../utils/queries";


const styles = {
    card: {
        display: 'block',
        margin: 'auto',
    },
    calendar: {
        padding: '2%',
        margin: '2%'
    },
    body: {
        color: "#ac3b12",
        alignItems: "center"
    },
    coloring: {
        color: "#ac3b12",
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
            <div className="row">
                <div className="col-lg-6 col-md-7 col-sm-12" style={styles.card}>
                    <Tabs defaultActiveKey="water" id="uncontrolled-tab-example" className="mb-3" >
                        <Tab eventKey="water" title="Water">
                            <div> 
                            <WaterChart />
                            </div>
                        </Tab>
                        <Tab eventKey="social" title="Social">
                            <SocialChart />
                        </Tab>
                        <Tab eventKey="sleep" title="Sleep">
                            <SleepChart />
                        </Tab>
                        <Tab eventKey="outside" title="Outside">
                            <OutsideChart />
                        </Tab>
                    </Tabs>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-12" style={styles.calendar}>
                    <CalendarPage />
                </div>
            </div>

            <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Gratitude Thought(s)..."
            />
          )}
        </div>
      </div>
        </main>
    );
};

export default Dashboard;