import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CustomCard } from '../../components/CustomCard/CustomCard';
import blogs from '../../img/blogs.jpeg';
import forum from '../../img/forum.jpg';
import news from '../../img/news.jpg';

const postsItem = [
    {title: "Blogs", description: 'Description', img: blogs},
    {title: "Forums", description: 'Description', img: forum},
    {title: "News", description: 'Description', img: news}
]

const Home: React.FC = React.memo(() => {

    const history = useHistory();

    const pushRoute = (item: any) => {
        history.push(`/${item.title.toLowerCase()}`)
    }
       
    return (
        <Container>
            <Row style={{justifyContent: 'center'}}>
                {postsItem.map(item => {
                    //console.log(item)
                    return (                    
                        <Col lg={4} md={7} sm={7} style={{marginBottom: 20, display: 'flex', justifyContent: 'center'}} key={item.title}>
                            <CustomCard
                                title={item.title}
                                img={item.img}                                
                                pushRoute={() => pushRoute(item)}
                            />                        
                        </Col>                     
                    )

                })
                }
            </Row>
        </Container>
    )
})

export { Home }