import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../helper/capitalizeFirstLetter';

type PropsType = {
    title?: string;
    body?: string;
    img?: string;
    section?: string;
    showButton?: string
    pushRoute(): void
}

const CustomCard: React.FC<PropsType> = React.memo(({
    title,
    body,
    img,
    section,
    showButton,
    pushRoute
}) => {
    const local = useLocation();
    const homePage = local.pathname === '/';

    return (
        <Card className={homePage ? 'home-cart' : ''}>
            {!homePage && <Card.Header>{capitalizeFirstLetter(section? section: '')}</Card.Header>}
            {homePage && <Card.Img variant="top" src={img} className="img-home" />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {!homePage &&
                    <Card.Text>
                        {body}
                    </Card.Text>
                }
                {!showButton &&
                    <Button 
                        variant="primary"
                        onClick={pushRoute}
                    >
                        Open
                    </Button>
                }
            </Card.Body>
        </Card>
    )
})

export { CustomCard }