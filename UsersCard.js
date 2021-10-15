import Card from 'react-bootstrap/Card'
import dayjs from "dayjs";

const UsersCard = ({ _id, name, email  }) => {
    return (
        <Card style={{ width: '18rem' }} key={_id}>
          <Card.Body>
            <Card.Title>Kookle</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">User name: {name}</Card.Subtitle>
            <Card.Text>
              E-Mail: {email}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default UsersCard