import React from "react";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle,
} from 'reactstrap';


const CharacterCard = ({ character }) => {
    return (
        <div>
            <Card className="container">
                <CardTitle className="title">{character.name}</CardTitle>
                {/* <CardImg width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                <CardBody className="cardBody">
                    <div className="bodytext">
                        <CardText>Birth Year: {character.birth_year}</CardText>
                        <CardText>Homeworld: {character.homeworld}</CardText>
                        <CardText> Gender: {character.gender}</CardText>
                        <CardText>Height: {character.height}</CardText>
                        <CardText>Mass: {character.mass}</CardText>
                    </div>

                    {/* <CardText>{character.location}</CardText> */}
                    {/* <CardLink href="#">{character.url}}</CardLink>
                    <CardLink href="#">Another Link</CardLink> */}
                </CardBody>
            </Card>
        </div>
    );
}

export default CharacterCard; 