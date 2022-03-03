import { Container, Menu, Image } from "semantic-ui-react";
import useSizeQuery from "@src/hooks/useSizeQuery";
import { useRouter } from "next/router";
import { withBasePath } from '@src/lib/utils'

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
            as="a"
            href="/"
            style={{
              border: "0px",
              cursor: "pointer",
            }}
          >
            <Image
              src={withBasePath("/colored_logo.svg")}
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
