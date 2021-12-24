import { Container, Menu, Image } from "semantic-ui-react";
import useSizeQuery from "@src/hooks/useSizeQuery";
import { useRouter } from "next/router";

const Navbar = () => {
  const { isDesktop } = useSizeQuery()
  const router = useRouter();
  return (
    <>
      <Menu
        fixed="top"
        size="large"
        style={{ background: "#22B7F8", margin: "0px" }}
      >
        <Container fluid>
          <Menu.Item
            style={{
              margin: `${isDesktop ? "0rem 2rem" : "0rem"}`,
              border: "0px",
              cursor: "pointer",
            }}
          >
            <Image
              src="https://i.imgur.com/4CAWd5p.png"
              size="small"
              wrapped
              onClick={() => router.push(`/${router.query.locale}`)}
            />
          </Menu.Item>
          <Menu.Item
            position="right"
            style={{
              padding: "0.25rem",
              marginRight: `${isDesktop ? "4rem" : "1.25rem"}`,
            }}
          >
            <span
              style={{
                margin: `${isDesktop ? "0rem 1.25rem" : "0rem 0.15rem"}`,
                fontSize: `${isDesktop ? "1.15em" : "0.85em"}`,
                cursor: "pointer"
              }}
            >
              All training events
            </span>
            <span
              style={{
                margin: `${isDesktop ? "0rem 1.25rem" : "0rem 0.15rem"}`,
                fontSize: `${isDesktop ? "1.15em" : "0.85em"}`,
                cursor: "pointer"
              }}
            >
              Series
            </span>
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
