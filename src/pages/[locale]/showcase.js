import LayoutComponent from "@src/components/LayoutComponent";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Container, Grid, Dropdown, Image, Button } from "semantic-ui-react";
import { useTranslation } from "next-i18next";
import showcaseData from "@src/data/showcasedata.json";
import { showcaseDataParse } from "@src/lib/showcaseHelper";
import getLangname from "@src/config/nameCodes";

const ShowCasePage = () => {
    const filters = showcaseDataParse(showcaseData);
    const defaultIndices = [...Array(showcaseData.length).keys()];
    const [filteredRows, setFilteredRows] = useState(defaultIndices);
    const [filteredOptions, setFilteredOptions] = useState({});
    const { t } = useTranslation("countrylevel");
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState(
        router.query.locale ? router.query.locale : "en"
    );
    const getOptions = (filterCat) => {
        return Object.keys(filters[filterCat]).map((element) => {
            return {
                key: element,
                value: element,
                text: element,
            };
        });
    };
    const filterSelectHandler = (cat) => (e, data) => {
        const selectedOptions = data.value;
        let indicesToSet = [...defaultIndices];
        const newFilteredOptions = { ...filteredOptions, [cat]: selectedOptions };
        const newFilteredOptionsKeys = Object.keys(newFilteredOptions);

        // Loop through each filter category
        for (let k = 0; k < newFilteredOptionsKeys.length; k++) {
            const currentCat = newFilteredOptionsKeys[k];
            const currentFilterSelectedOptions =
                newFilteredOptions[newFilteredOptionsKeys[k]];
            let currentCatFilteredIndices = [];

            // Loop through each option selected for this filter's categories

            if (currentFilterSelectedOptions.length > 0) {
                for (let i = 0; i < currentFilterSelectedOptions.length; i++) {
                    let currentFilterElementIndices =
                        filters[currentCat][currentFilterSelectedOptions[i]];

                    for (let j = 0; j < currentFilterElementIndices.length; j++) {
                        if (
                            !currentCatFilteredIndices.includes(
                                currentFilterElementIndices[j]
                            )
                        )
                            currentCatFilteredIndices.push(currentFilterElementIndices[j]);
                    }
                }
            } else {
                currentCatFilteredIndices = [...defaultIndices];
            }

            indicesToSet = indicesToSet.filter(function (n) {
                return currentCatFilteredIndices.indexOf(n) !== -1;
            });
        }

        setFilteredOptions(newFilteredOptions);
        setFilteredRows(indicesToSet);
    };

    return (
        <LayoutComponent>
            <Grid>
                <Grid.Row style={{ height: "100%", paddingTop: "2rem" }}>
                    <Grid.Column width={4} style={{ backgroundColor: "#65ABEA" }}>
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
                                                style={{ margin: "0.2rem" }}
                                            />
                                            <br />
                                        </Container>
                                    </Grid.Column>
                                </Grid.Row>
                            );
                        })}
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/* {showcaseData
              .filter((row, i) => filteredRows.includes(i))
              .map((row) => {
                return (
                  <Grid.Row>
                    <Grid.Column
                      style={{
                        background: "#E8EFF2",
                        color: "black",
                        // padding: "2.5rem",
                      }}
                    >
                      <h4>{row.title}</h4>
                      <p>{row.country}</p>
                      <p>{row.language}</p>
                      <p>{row.tools}</p>
                      <p>{row.themes_keywords}</p>
                      <p>{row.algorithms}</p>
                    </Grid.Column>
                  </Grid.Row>
                );
              })} */}

                        {showcaseData
                            .filter((row, i) => filteredRows.includes(i))
                            .map((row) => {
                                console.log("row", row);
                                return (
                                    <Grid style={{
                                        margin: "0.25rem 1rem 0.25rem 1rem", padding: "0.25rem",
                                        border: "solid #65ABEA 1px",
                                        borderRadius: "0.25rem",
                                        width: "95%",
                                    }}>
                                        <Grid.Row

                                        >
                                            <Grid.Column width={4}>
                                                <Image src={row.image} alt={row.title}/>
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
                                                <div style={{ display: 'flex', direction: 'row' }}>
                                                    {row.tools.split(",").map((tool) => (
                                                        <span style={{ backgroundColor: "#EEEEEE", padding: "0.25rem", marginLeft: "0.25rem", borderRadius: '0.15rem', cursor: 'pointer' }}>{tool}</span>
                                                    ))}
                                                </div>
                                                <h4>Themes and Keywords</h4>
                                                {row.themes_keywords.split(",").map((tool) => (
                                                    <span style={{ backgroundColor: "#EEEEEE", padding: "0.25rem", marginLeft: "0.25rem", borderRadius: '0.15rem', cursor: 'pointer' }}>{tool}</span>
                                                ))}
                                                <h4>Algorithms</h4>
                                                {row.algorithms.split(",").map((tool) => (
                                                    <span style={{ backgroundColor: "#EEEEEE", padding: "0.25rem", marginLeft: "0.25rem", borderRadius: '0.15rem', cursor: 'pointer' }}>{tool}</span>
                                                ))}
                                                <h4>Datasets</h4>
                                                <p>{row.datasets}</p>


                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={12}></Grid.Column>
                                            <Grid.Column width={4}>
                                                <a href={row.readmore} target="_blank"><Button primary>Read full report</Button></a>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                );
                            })}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </LayoutComponent>
    );
};
export default ShowCasePage;
