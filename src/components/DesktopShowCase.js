import { useTranslation } from "next-i18next";
import { Container, Grid, Dropdown, Image, Button } from "semantic-ui-react";

const DesktopShowCase = ({
  filters,
  showcaseData,
  filterSelectHandler,
  filteredRows,
  getOptions,
  getLangname,
  filteredOptions,
  setFilteredOptions,
  tagSelectHandler,
  resetFilters,
}) => {
  const { t } = useTranslation("countrylevel");

  const handleTag = (cat, val) => {
    let prevVals = filteredOptions?.[cat] ? filteredOptions?.[cat] : []
    tagSelectHandler(cat, [...prevVals, val.trim()])
  }
  return (
    <Grid>
      <Grid.Row style={{ height: "100%" }}>
        <Grid.Column className="sidebar" width={3}>
          {Object.keys(filters).map((filterCat) => {
            return (
              <Grid.Row style={{ margin: "0px", padding: "0px" }}>
                <Grid.Column
                  style={{
                    color: "black",
                    padding: "1rem 0rem 1rem 1.5rem",
                  }}
                >
                  <Container>
                    <h4 style={{ padding: "0.25rem", textTransform: "capitalize" }}>
                    {/*t(`${filterCat}`)*/}
                    {filterCat
                        .replace("_", " ")
                    }
                    </h4>
                    <Dropdown
                      placeholder={"Change " + filterCat}
                      fluid
                      multiple
                      selection
                      clearable
                      options={getOptions(filterCat)}
                      onChange={filterSelectHandler(filterCat)}
                      value={filteredOptions?.[filterCat] ? filteredOptions?.[filterCat] : []}
                      style={{ margin: "0.2rem" }}
                    />
                    <br />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            );
          })}
          <Grid.Row style={{ padding: "2rem" }}>
            <Grid.Column align="center">
              <a href="#" onClick={() => resetFilters()}>Clear All filters</a>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={13}>
          {showcaseData
            .filter((row, i) => filteredRows.includes(i))
            .map((row) => {
              return (
                <Grid
                  className="showcase-box"
                  id={row.title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\wÄäÖöÜü-]+/g, "")}
                >
                  <Grid.Row>
                    <Grid.Column width={4}>
                      {/*<Image src={row.image} alt={row.title} />*/}
                      <Image src="https://dummyimage.com/300x200" alt={row.title} width="100%" />
                      <h4>
                        Country 
                      </h4>
                      <p>{row.country}</p>
                      <h4>
                        Language 
                      </h4>
                      <p>{getLangname[row.language]}</p>
                      <h4>
                        Authors
                      </h4>
                      <p>{row.authors}</p>
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <h3 className="blue-title">{row.title}</h3>
                      <h4>Project Summary</h4>
                      <p>{row.project_summary}</p>
                      <h4>Tools</h4>
                      <div style={{ display: "flex", direction: "row" }}>
                        {row.tools.split(",").map((tool, i) => (
                          <span
                            style={{
                              backgroundColor: "#EEEEEE",
                              padding: "0.25rem",
                              marginLeft: "0.25rem",
                              borderRadius: "0.15rem",
                              cursor: "pointer",
                            }}
                            onClick={() => handleTag("tools", tool)}
                            key={i}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <h4>Themes and Keywords</h4>
                      {row.themes_keywords.split(",").map((tk, i) => (
                        <span
                          style={{
                            backgroundColor: "#EEEEEE",
                            padding: "0.25rem",
                            marginLeft: "0.25rem",
                            borderRadius: "0.15rem",
                            cursor: "pointer",
                          }}
                          onClick={() => handleTag("themes_keywords", tk)}
                          key={i}
                        >
                          {tk}
                        </span>
                      ))}
                      <h4>Algorithms</h4>
                      {row.algorithms.split(",").map((alg, i) => (
                        <span
                          style={{
                            backgroundColor: "#EEEEEE",
                            padding: "0.25rem",
                            marginLeft: "0.25rem",
                            borderRadius: "0.15rem",
                            cursor: "pointer",
                          }}
                          onClick={() => handleTag("algorithms", alg)}
                          key={i}
                        >
                          {alg}
                        </span>
                      ))}
                      <h4>Datasets</h4>
                      <p>{row.datasets}</p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={12}></Grid.Column>
                    <Grid.Column width={4} align="right">
                      <a href={row.readmore} target="_blank">
                        <Button primary>Read full report</Button>
                      </a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              );
            })}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default DesktopShowCase;
