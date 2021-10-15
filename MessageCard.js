import Card from 'react-bootstrap/Card'
import dayjs from "dayjs";

const MessageCard = ({ text, date, userId }) => {
    return (
        <Card style={{ width: '32rem' }}>
          <Card.Body>
            <Card.Title>Kookle</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Posted by {userId.name} - {dayjs(date).format('DD/MM/YYYY')}</Card.Subtitle>
            <Card.Text>
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default MessageCard