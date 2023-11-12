import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap'; // Import
function List() {
    const [data, setData] = useState([]); //useState hook to initialize the state with an empty array
    useEffect(() => {
        axios.get('http://localhost:8080/testApi')
            .then((res)=>{
                console.log(res.data);
                setData(res.data);
            });
    }, []); // Empty dependency array to ensure the effect runs once on mount

    return (
        <div>
            <h1 className="mt-4 mb-4">Test Api</h1>
            <div className="container text-center">
                {data.map(item => (
                    <Card key={item.name} className="mb-3">
                        <CardHeader>{item.name}</CardHeader>
                        <CardBody>
                            <img src={`data:image/png;base64,${item.base64}`} alt={item.name} className="img-fluid" />
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default List;