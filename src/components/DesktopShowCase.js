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
      <Grid.Row style={{ height: "100%", paddingTop: "2rem" }}>
        <Grid.Column width={4} style={{ backgroundColor: "#E8EFF2" }}>
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
                    <h4 style={{ padding: "0.25rem" }}>{t(filterCat)}</h4>
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
          <button onClick={() => resetFilters()}>Clear All filters</button>
        </Grid.Column>
        <Grid.Column width={12}>
          {showcaseData
            .filter((row, i) => filteredRows.includes(i))
            .map((row) => {
              return (
                <Grid
                  style={{
                    margin: "2rem 1rem",
                    padding: "0.25rem",
                    border: "solid #65ABEA 1px",
                    borderRadius: "0.25rem",
                    width: "95%",
                  }}
                  id={row.title
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\wÄäÖöÜü-]+/g, "")}
                >
                  <Grid.Row>
                    <Grid.Column width={4}>
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
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <h3>{row.title}</h3>
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
                    <Grid.Column width={4}>
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
