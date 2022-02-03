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
        padding: "5em 0em",
        background: "#f6f6f6",
        color: "#fff"
      }}
    >
      <Container fluid textAlign="center">
        <Grid centered divided inverted stackable>
          <Grid.Column width={6}>
            <Image
              size="small"
              src="/colored_logo.svg"
            />
          </Grid.Column>
          <Grid.Column width={6} style={{ textAlign: 'right' }}>
            <Header inverted as="h4" content="" />
            <List horizontal link size="small" style={{ marginTop: '0px' }}>
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
        <Divider inverted section style={{ margin: "1rem 12rem" }} />
        <div fluid style={{ textAlign: "left", margin: `${isDesktop ? "1rem 12rem" : "0.25rem 1rem "}`, fontSize: '1rem', color: 'black' }}>
          <p><b>Source code</b> available under the MIT license.</p>
          <p>Content on this site, made by <b>Open Knowledge Foundation</b>, is licensed under a <b>Creative Commons Attribution 4.0 International License.</b></p>
          <p>Refer to our <b>attribution page</b> for attributions of other work on the site.</p>
        </div>
      </Container>
    </Segment>
  );
};

export default Footer;
