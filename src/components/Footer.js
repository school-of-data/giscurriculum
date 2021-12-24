import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";
import useSizeQuery from "@src/hooks/useSizeQuery";

const Footer = () => {
  const { isDesktop } = useSizeQuery()
  return (
    <Segment
      inverted
      vertical
      style={{
        margin: "5em 0em 0em",
        padding: "5em 0em",
        background: "#DDE3EA",
      }}
    >
      <Container fluid textAlign="center">
        <Grid divided inverted stackable>
          <Grid.Column width={6}>
            <Image
              centered
              size="medium"
              src="https://i.imgur.com/WjH95wR.png"
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header inverted as="h4" content="" />
            <List horizontal link size="large">
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
              <List.Item as="a" href="#">
                IP Policy
              </List.Item>
              <List.Item as="a" href="#">
                Cookie Policy
              </List.Item>
              <List.Item as="a" href="#">
                Term of Use
              </List.Item>
              <List.Item as="a" href="#">
                Jobs
              </List.Item>
              <List.Item as="a" href="#">
                Contact
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <Divider inverted section style={{ margin: "0px 18rem" }} />
        <div fluid style={{ textAlign: "left", margin: `${isDesktop ? "1rem 18rem" : "0.25rem 1rem "}`, fontSize: '1.2em', color: 'black' }}>
          <p><b>Source code</b> available under the MIT license.</p>
          <p>Content on this site, made by <b>Open Knowledge Foundation</b>, is licensed under a <b>Creative Commons Attribution 4.0 International License.</b></p>
          <p>Refer to our <b>attribution page</b> for attributions of other work on the site.</p>
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
