import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BreadCrumb } from '../components/BreadCrumb/BreadCrumb';
import { NavBar } from '../components/NavBar/NavBar';
import { Category } from '../pages/Category/Category';
import { Home } from '../pages/Home/Home';


const Navigation: React.FC = React.memo(() => {
    return (
        
        <Switch>
            <div>
                <NavBar />
                <BreadCrumb />
                <Route exact path="/">
                    <Home />
                </Route>
                    <Route exact path="/blogs">
                        <Category />
                    </Route>
                        <Route exact path="/blogs/startups">
                            <Category />
                        </Route>
                            <Route path="/blogs/startups/:elementId">
                                <Category />
                            </Route>
                    <Route exact path="/forums">
                        <Category />
                    </Route>
                        <Route exact path="/forums/ideas">
                            <Category />
                        </Route>
                            <Route path="/forums/ideas/:elementId">
                                <Category />
                            </Route>
                    <Route exact path="/news">
                        <Category />
                    </Route>
                        <Route exact path="/news/business">
                            <Category />                   
                        </Route>
                            <Route path="/news/business/:elementId">
                                <Category />                   
                            </Route>
                        <Route exact path="/news/design">
                            <Category />                   
                        </Route>   
                            <Route path="/news/design/:elementId">
                                <Category />                   
                            </Route>             
            </div>
        </Switch>
        
    )
});

export { Navigation }