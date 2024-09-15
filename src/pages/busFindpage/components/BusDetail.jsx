import { useParams } from 'react-router-dom';

function BusDetail() {
  const { busNumber } = useParams();
  return <div>{busNumber}</div>;
}

export default BusDetail;
