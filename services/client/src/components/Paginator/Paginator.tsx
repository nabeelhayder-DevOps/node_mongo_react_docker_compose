import React from 'react';
import { Pagination } from 'react-bootstrap';

type PropsType = {
    totalPage: number,
    currentPage: number,
    setPage(page: number): void
}

const Paginator: React.FC<PropsType> = React.memo(({
    totalPage,
    currentPage,
    setPage
}) => {
    
    let items: any[] = [];
    
    for (let number = 1; number <= totalPage; number++) {
        items.push(number);
    }

    return (
        <Pagination>
            {items.map((item: number) => {
                return (
                    <Pagination.Item 
                        key={item} 
                        active={item === currentPage} 
                        onClick={() => setPage(item)}
                    >
                        {item}
                    </Pagination.Item>
                )
            })
            }        
        </Pagination>
    )
})

export { Paginator }