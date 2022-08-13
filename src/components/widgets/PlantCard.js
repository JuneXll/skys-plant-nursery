import Card from 'react-bootstrap/Card';


const coverLogo = 'https://ik.imagekit.io/junexll/Skys_nursery/MainTLogo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643577372161'

const PlantCard = ({plantType, plantName, plantImg}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coverLogo} />
      <Card.Body>
        <Card.Title>{plantName}</Card.Title>
        <Card.Text>
          Plant Type: {plantType}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;