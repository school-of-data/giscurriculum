import {
	Container,
	Header
} from "semantic-ui-react";
import useSizeQuery from "@src/hooks/useSizeQuery";

export default function HeroSession() {

	const { isDesktop } = useSizeQuery();

	return (
		<div className="hero-session">
		  <Container>
		    <Header
		      as="h1"
		      className="big-title"
		    >
		      Open Geodata Training Curriculum
		    </Header>
		    <p>
		      Data for Good at Meta has partnered with the Open Knowledge Foundation
		      to design, develop, and deliver a training focused on how governments
		      and nonprofits around the world can utilise free and open geospatial
		      data and geospatial software.
		    </p>
		    <p>
		      This website contains a training curriculum built around the powerful
		      free and open source GIS, QGIS, for learning how to utilize free and
		      open geospatial data such as OpenStreetMap (OSM) and Meta's High
		      Resolution Settlement Layer (HRSL).
		    </p>
		    <p>
		      The curriculum is localized for 16 countries and available in 7
		      languages (Amharic, Arabic, English, German, Portuguese, Spanish, and
		      Vietnamese). You can select the langugae and country localization
		      below.
		    </p>
		    <p style={{ paddingBottom: "2rem" }}>
		      You can also find sample projects made by those trained using the
		      curriculum in the Showcase Page.
		    </p>
		  </Container>
		</div>
	);
}