import LayoutComponent from "@src/components/LayoutComponent";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
    Container,
    Grid,
    Dropdown,
} from "semantic-ui-react";
import { useTranslation } from "next-i18next";

import showcaseData from '@src/data/showcasedata.json';
import { showcaseDataParse } from "@src/lib/showcaseHelper";

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
        return Object.keys(filters[filterCat]).map(element => {
            return {
                key: element,
                value: element,
                text: element,
            }
        })
    };
    const filterSelectHandler = (cat) => (e,data) => {
        const selectedOptions = data.value
        let indicesToSet = [...defaultIndices];
        const newFilteredOptions = ({...filteredOptions, [cat]: selectedOptions});
        const newFilteredOptionsKeys = Object.keys(newFilteredOptions);

        // Loop through each filter category
        for (let k = 0; k < newFilteredOptionsKeys.length; k++) {
        const currentCat = newFilteredOptionsKeys[k];
        const currentFilterSelectedOptions = newFilteredOptions[newFilteredOptionsKeys[k]];
        let currentCatFilteredIndices = [];

            // Loop through each option selected for this filter's categories

            if (currentFilterSelectedOptions.length > 0) {
                for (let i = 0; i < currentFilterSelectedOptions.length; i++) {
                    let currentFilterElementIndices = filters[currentCat][currentFilterSelectedOptions[i]];
    
                    for (let j = 0; j < currentFilterElementIndices.length; j++) {
                        if (!currentCatFilteredIndices.includes(currentFilterElementIndices[j]))
                        currentCatFilteredIndices.push(currentFilterElementIndices[j])
                    }
                }
            } else {
                currentCatFilteredIndices = [...defaultIndices];
            }

            indicesToSet = indicesToSet.filter(function(n) {
                return currentCatFilteredIndices.indexOf(n) !== -1;
            })
            
        }
        

        setFilteredOptions(newFilteredOptions);
        setFilteredRows(indicesToSet)
    }

    
    return (
        <LayoutComponent>
            <div style={{ margin: "1.5rem 0rem" }}>&nbsp;</div>
            <Grid>
                <Grid.Row style={{ margin: "0px", padding: "0px" }}>
                    <Grid.Column
                        style={{
                        background: "#E8EFF2",
                        color: "black",
                        paddingLeft: "2.5rem",
                        paddingTop: "2.5rem",
                        }}
                    >
                        <h4>Filters</h4>
                    </Grid.Column>
                </Grid.Row>
                {
                    Object.keys(filters).map(filterCat => {
                        return <Grid.Row style={{ margin: "0px", padding: "0px" }}>
                            <Grid.Column
                                style={{
                                background: "#E8EFF2",
                                color: "black",
                                // padding: "2.5rem",
                                }}
                            >
                                <Container>
                                <h4 style={{ padding: "0.25rem" }}>{t(filterCat)}</h4>
                                <Dropdown
                                    placeholder={"Change " + filterCat}
                                    fluid
                                    multiple selection
                                    clearable
                                    options={getOptions(filterCat)}
                                    onChange={filterSelectHandler(filterCat)}
                                    style={{ margin: "0.2rem" }}
                                />
                                <br />
                                
                                </Container>
                            </Grid.Column>
                        </Grid.Row>
                    })
                }
                
                {
                    showcaseData
                        .filter((row,i) => filteredRows.includes(i))
                        .map(row => {
                            return <Grid.Row>
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
                        })
                }

            </Grid>
           
        </LayoutComponent>
    );
};
export default ShowCasePage;
