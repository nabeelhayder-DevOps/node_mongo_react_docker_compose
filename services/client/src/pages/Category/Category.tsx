import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { SpinnerPage } from '../../components/Spinner/Spinner';
import { Alert } from '../../components/Alert/Alert';
import { CustomCard } from '../../components/CustomCard/CustomCard';
import { Paginator } from '../../components/Paginator/Paginator';

type RouteParam = {
    elementId?: string
}

const Category: React.FC = React.memo(() => {

    const local = useLocation();  
    const history = useHistory();
    const param: RouteParam = useParams();
    
    const hasRouteParam = param.elementId;
    const categoryName = local.pathname;
    
    const pageStorage = localStorage.getItem('currentPage');
    
    const [categoryItems, setCategoryItems] = useState<any>([]);
    const [visible, setVisible] = useState(false);  
    const [errorMessage, setErrorMessage] = useState('');
    const [fetching, setFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(pageStorage? +pageStorage : 1);
    const [totalPage, setTotalPage] = useState(0);

    const handleVisible = () => setVisible(!visible);
        
    const pushRoute = (item:any) => {
        
        if (categoryName.split('/')[2] === item.section) {
            history.push(`${categoryName}/${item._id}`)
        } else {
            history.push(`${categoryName}/${item.section}/${item._id}`)
        } 
               
    }
    
    useEffect(() => {
        
        return () => {            
            localStorage.removeItem('currentPage');            
        }
    },[])   

    useEffect(() => {        
                
        const url = `http://localhost:3010/category${categoryName}/?page=${currentPage}`;    
        setFetching(true)
        axios.get(url)            
            .then(res => {                
                //console.log(res.config.url?.split('?')[1])
                if(res.status === 200) {                    
                    setFetching(false);                   
                    const result = res.data.data;                    
                    setCategoryItems(result); 
                    setTotalPage(res.data.totalItem);                    
                }  
                                          
            })
            .catch(err => {
                setVisible(true);
                setFetching(false);  
                setErrorMessage(`${err.response.status}, ${err.response.statusText}`)
            })
                    
    }, [currentPage])



    const setPage = (page: number) => {
        setCurrentPage(page);
        localStorage.setItem('currentPage', `${page}`);
    }    

    return (
        <>
            <Alert 
                visible={visible} 
                errorMessage={errorMessage}
                handleVisible={handleVisible} 
            />
            
            <Container>
                <Row style={{flexDirection: 'column', alignItems: 'center'}}>
                <Paginator 
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setPage={setPage}
                />
                {
                    (categoryItems !== undefined && categoryItems.length > 0) 
                    ?
                        categoryItems.map((item: any) => {
                            //console.log(item)
                        return (                    
                            <Col lg={10} md={10} sm={10} style={{marginBottom: 20}} key={item._id}>
                                <CustomCard 
                                    title={item.title}
                                    section={item.section}
                                    body={item.body}
                                    showButton={hasRouteParam}
                                    pushRoute={() => pushRoute(item)}
                                />                            
                            </Col>                     
                        )

                        })
                    :  
                        <>
                            {fetching && <SpinnerPage /> }
                        </>
                }
                    
                </Row>
                
            </Container>
            
        </>
    )
});

export { Category}