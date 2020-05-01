import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Dashboard from '../components/Dashboard';
import SideNav from '../components/common/SideNav';
import RightSideBar from '../components/common/RightSideBar';


const App = () => (
    <Router>
        <Grid className="cus-grid">
            <Grid.Row>
                <Grid.Column className="col-2">
                    <SideNav />
                </Grid.Column>

                <Grid.Column className="col-11">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                    </Switch>
                </Grid.Column>

                <Grid.Column className="col-3">
                    <RightSideBar />
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Router>
)

export default App;