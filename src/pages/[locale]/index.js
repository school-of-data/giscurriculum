import { getStaticPaths, makeStaticProps } from "@lib/getStatic";
import getSlug from "@lib/getSlug";
import { useTranslation } from "next-i18next";
import { Button, Container, Grid, Placeholder } from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import LayoutComponent from "@src/components/LayoutComponent";
import Link from "next/link";

export default function Homepage({ source }) {
  const { t, i18n } = useTranslation("common");

  return (
    <LayoutComponent>
      <div style={{ margin: '1.5rem 0rem' }}>&nbsp;</div>
      <Grid columns="three">
        <Grid.Row>
          <Grid.Column style={{ padding: "0rem 4rem" }}>
            <Container
              style={{
                border: "0.5px solid #D3D3D3",
                padding: "1.5rem",
                borderRadius: "0.15rem",
              }}
            >
              <h3 style={{ textAlign: "justified" }}>
                Welcome to School of Data Open GIS Curriculum Website
              </h3>
              <h5 style={{ textAlign: "justified" }}>
                {" "}
                Here is how you can use the learning materials available on this
                site:
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Hendrerit gravida rutrum quisque non tellus orci. Curabitur
                gravida arcu ac tortor dignissim. Euismod elementum nisi quis
                eleifend quam adipiscing vitae. Vulputate mi sit amet mauris.
                Non odio euismod lacinia at quis risus. Porta nibh venenatis
                cras sed felis. Consequat interdum varius sit amet mattis
                vulputate enim nulla aliquet. Libero volutpat sed cras ornare
                arcu dui vivamus arcu felis. Pretium quam vulputate dignissim
                suspendisse in est ante in nibh.
                <br /> A diam maecenas sed enim. Ut placerat orci nulla
                pellentesque dignissim enim. Morbi tristique senectus et netus
                et malesuada fames ac. Posuere sollicitudin aliquam ultrices
                sagittis orci a scelerisque purus. Odio tempor orci dapibus
                ultrices. Neque sodales ut etiam sit amet nisl. Sit amet
                porttitor eget dolor. Consequat ac felis donec et. In cursus
                turpis massa tincidunt dui ut. Sodales ut eu sem integer vitae
                justo eget. Fermentum et sollicitudin ac orci phasellus. Id
                cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
                <br />
                Nullam eget felis eget nunc. Cursus euismod quis viverra nibh
                cras pulvinar. Integer quis auctor elit sed. Congue quisque
                egestas diam in arcu. Urna duis convallis convallis tellus id.
                Amet porttitor eget dolor morbi non arcu risus quis. Rhoncus est
                pellentesque elit ullamcorper dignissim. Posuere sollicitudin
                aliquam ultrices sagittis orci. Morbi leo urna molestie at
                elementum eu facilisis sed. Neque sodales ut etiam sit.
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column style={{ padding: "0rem 4rem" }}>
            <Container
              style={{
                border: "0.5px solid #D3D3D3",
                padding: "0.5rem",
                textAlign: "center",
                borderRadius: "0.15rem",
              }}
            >
              <h3>Localisations available:</h3>
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
              >
                <Link href={"/en/bangladesh"} passHref>
                  <h5 style={{ cursor: "pointer" }}>Bangladesh(in English)</h5>
                </Link>
              </div>
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
              >
                <Link href={"/en/ghana"} passHref>
                  <h5 style={{ cursor: "pointer" }}>Ghana(in English)</h5>
                </Link>
              </div>
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
              >
                <Link href={"/en/nigeria"} passHref>
                  <h5 style={{ cursor: "pointer" }}>Nigeria(in English)</h5>
                </Link>
              </div>
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
              >
                <Link href={"/de/germany"} passHref>
                  <h5 style={{ cursor: "pointer" }}>Germany(in German)</h5>
                </Link>
              </div>
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
              >
                <Link href={"/es/argentina"} passHref>
                  <h5 style={{ cursor: "pointer" }}>Argentina(in Spanish)</h5>
                </Link>
              </div>
              <div
                style={{
                  border: "0.25px solid #D3D3D3",
                  padding: "0.5rem",
                  margin: "1rem 3rem",
                }}
              >
                <Link href={"/es/mexico"} passHref>
                  <h5 style={{ cursor: "pointer" }}>Mexico(in Spanish)</h5>
                </Link>
              </div>
            </Container>
          </Grid.Column>
          <Grid.Column style={{ padding: "0rem 4rem" }}>
            <Container
              style={{
                border: "0.5px solid #D3D3D3",
                padding: "0.5rem",
                textAlign: "center",
                borderRadius: "0.15rem",
              }}
            >
              <h3>Projects showcase:</h3>
              <div
                style={{ height: "40vh", overflowY: "scroll", padding: "5rem" }}
              >
                <Placeholder style={{ height: "20rem", width: "100%" }}>
                  <Placeholder.Image />
                </Placeholder>
                <Placeholder style={{ height: "20rem", width: "100%" }}>
                  <Placeholder.Image />
                </Placeholder>
                <Placeholder style={{ height: "20rem", width: "100%" }}>
                  <Placeholder.Image />
                </Placeholder>
              </div>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </LayoutComponent>
  );
}

const getStaticProps = makeStaticProps(getSlug(import.meta.url));
export { getStaticPaths, getStaticProps };
