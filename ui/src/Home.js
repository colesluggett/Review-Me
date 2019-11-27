import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const Home = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Unfinished Home Page</h1>
                <p className="lead">Please create user above.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};
