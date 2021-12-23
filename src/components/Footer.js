import React from "react";
import {
  Container,
  Grid,
  Icon,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment
      inverted
      style={{
        margin: "2.5em 0em 0em 0em",
        padding: "1.5em 0em",
        backgroundColor: "#333333",
      }}
    >
      <Container textAlign="center">
        <Grid inverted>
          <Grid.Column width={4} style={{ textAlign: "left" }}>
            <h4> Follow us</h4>
            <Grid.Column>
              <a href="" target="_blank" className="socialicon">
                <Icon name="facebook" />
              </a>
              <a href="" target="_blank" className="socialicon">
                <Icon name="twitter" />
              </a>
              <a href="" target="_blank" className="socialicon">
                <Icon name="linkedin" />
              </a>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={8} style={{ textAlign: "left" }}>
            <List link inverted>
              <List.Item>
                <Image
                  centered
                  size="small"
                  src="https://i.imgur.com/lXrEJZj.png"
                />
              </List.Item>
              <List.Item>
                <a href="https://schoolofdata.org/" target="_blank">
                  School of data
                </a>
              </List.Item>
              {/* <List.Item><h4 style={{ color: '#f5f7f8' }}>Donors</h4></List.Item>
                        <List.Item><p style={{ color: '#f5f7f8' }}>Mention of Donors.</p></List.Item> */}
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
