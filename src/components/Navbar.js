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
        </Container>
      </Menu>
    </>
  );
};

export default Navbar;
