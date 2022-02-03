import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Dropdown,
  Icon,
  Segment,
  Sidebar,
  Menu,
  Image,
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const MobileShowCase = ({
  filters,
  showcaseData,
  filteredRows,
  getOptions,
  filterSelectHandler,
  getLangname,
}) => {
  const { t } = useTranslation("countrylevel");
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="wide"
          style={{ border: "0px", maxWidth: "80vw", height: "100vh" }}
        >
          <Menu.Item>&nbsp;</Menu.Item>
          {Object.keys(filters).map((filterCat, i) => {
            return (
              <Menu.Item style={{ textAlign: "left" }} key={i}>
                <h4 style={{ padding: "0.25rem" }}>{t(filterCat)}</h4>
                <Dropdown
                  placeholder={"Change " + filterCat}
                  fluid
                  multiple
                  selection
                  clearable
                  options={getOptions(filterCat)}
                  onChange={filterSelectHandler(filterCat)}
                  style={{ margin: "0.2rem" }}
                />
                <br />
              </Menu.Item>
            );
          })}
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <div style={{ margin: "0rem", padding: "0.2rem" }}>
              <Button onClick={() => setVisible(!visible)}>
                {t("content_menu")}
              </Button>
              {showcaseData
                .filter((row, i) => filteredRows.includes(i))
                .map((row) => {
                  return (
                    <Grid
                      style={{
                        margin: "2rem 0.2rem",
                        padding: "0.25rem",
                        border: "solid #65ABEA 1px",
                        borderRadius: "0.25rem",
                      }}
                      id={row.title
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\wÄäÖöÜü-]+/g, "")}
                    >
                      <Grid.Row>
                        <Grid.Column width={16}>
                          <Image src={row.image} alt={row.title} />
                          <h4>
                            Country: <span>{row.country}</span>
                          </h4>
                          <h4>
                            Language: <span>{getLangname[row.language]}</span>
                          </h4>
                          <h4>
                            Authors: <span>{row.authors}</span>
                          </h4>

                          <h3>{row.title}</h3>
                          <h4>Project Summary</h4>
                          <p>{row.project_summary}</p>
                          <h4>Tools</h4>
                          <div style={{ display: "flex", direction: "row" }}>
                            {row.tools.split(",").map((tool) => (
                              <span
                                style={{
                                  backgroundColor: "#EEEEEE",
                                  padding: "0.25rem",
                                  marginLeft: "0.25rem",
                                  borderRadius: "0.15rem",
                                  cursor: "pointer",
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                          <h4>Themes and Keywords</h4>
                          {row.themes_keywords.split(",").map((tool) => (
                            <span
                              style={{
                                backgroundColor: "#EEEEEE",
                                padding: "0.25rem",
                                marginLeft: "0.25rem",
                                borderRadius: "0.15rem",
                                cursor: "pointer",
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                          <h4>Algorithms</h4>
                          {row.algorithms.split(",").map((tool) => (
                            <span
                              style={{
                                backgroundColor: "#EEEEEE",
                                padding: "0.25rem",
                                marginLeft: "0.25rem",
                                borderRadius: "0.15rem",
                                cursor: "pointer",
                              }}
                            >
                              {tool}
                            </span>
                          ))}
                          <h4>Datasets</h4>
                          <p>{row.datasets}</p>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={12}>
                          <a href={row.readmore} target="_blank">
                            <Button primary>Read full report</Button>
                          </a>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  );
                })}
            </div>
            <Container
              textAlign="justified"
              style={{ padding: "1rem" }}
            ></Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default MobileShowCase;
