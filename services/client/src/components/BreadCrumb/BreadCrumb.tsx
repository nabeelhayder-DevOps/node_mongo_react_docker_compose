import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useHistory, useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../helper/capitalizeFirstLetter';

const BreadCrumb: React.FC = React.memo(() => {

    const local = useLocation();
    const history = useHistory();
    
    let navMenu: any[] = [];

    if(local.pathname !== '/') {
        navMenu = local.pathname.split('/')
        navMenu.splice(0,1, 'home')
    }else {
        navMenu = ['home'];        
    }

    const routePush = (routeName: string) => {
        localStorage.removeItem('currentPage')
        history.push(routeName)
    }
    
    const routeLength = navMenu.length;
    
    const pushNav = (route: string) => {
        if(route !== 'home' && navMenu.length <= 3) {            
            routePush(`/${route}`)
        } else if(route === 'home') {
            
            routePush('/')
        } else if(navMenu.length > 3) {
            const customRoute = `/${[navMenu[1], navMenu[2]].join('/')}`;
            routePush(customRoute)
        }
    }

    return (
        <Breadcrumb style={{position: 'sticky', top: 0, zIndex: 1}}>
            {navMenu.map((route, i) => {                
                const lastRoute = i === routeLength - 1;
                const title = route.length > 10 ? 'Post' : route;
                return (
                    <Breadcrumb.Item 
                        key={route}
                        active={lastRoute ? true : false} 
                        onClick={() => !lastRoute ? pushNav(route) : undefined}
                    >
                        {capitalizeFirstLetter(title)}
                    </Breadcrumb.Item>                    
                )
            })}
        </Breadcrumb>
    )
});

export { BreadCrumb}