import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardbusnis = (props)=> {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.judutext}</Card.Title>
        <Card.Text>
       {props.subtext}
        </Card.Text>
        <Button variant="primary">Langganan</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardbusnis;