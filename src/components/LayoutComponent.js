import { Container, Divider } from 'semantic-ui-react'
import Navbar from './Navbar';

export default function LayoutComponent(props) {
  return (
    <>
      <Navbar />
      <div>
        <Container textAlign='justified' fluid>
          {props.children}
        </Container>
      </div>
    </>
  );
}
