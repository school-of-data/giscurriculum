import React, { useState } from "react";
import { Grid, Input, Menu, MenuHeader, Image } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  // const [activeItem, setActiveItem] = useState("home");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const router = useRouter();
  // const [selectedlang, setSelectedlang] = useState(router.query.locale ? router.query.locale : 'en')

  // const handleItemClick = (e, { name }) => {
  //   setActiveItem(name);
  //   router.push(`/`);
  // };

  // const countryOptions = [
  //     { key: 'en', value: 'en', flag: 'gb eng', text: 'English' },
  //     { key: 'de', value: 'de', flag: 'de', text: 'German' },
  // ];

  // const handleChange = (event, data) => {
  //     router.push(`/${data.value}`)
  //     setSelectedlang(data.value)
  // }

  // console.log('LOCALE', router.query.locale)

  // return (
  //   <Menu secondary>
  //     <Menu.Item
  //       name="home"
  //       active={activeItem === "home"}
  //       onClick={handleItemClick}
  //     />
  //     <Menu.Item
  //       name="assets"
  //       active={activeItem === "assets"}
  //       onClick={handleItemClick}
  //     />
  //     <Menu.Menu position="right">
  //       <Menu.Item>
  //         <Input icon="search" placeholder="Search..." />
  //       </Menu.Item>
  //       {/* <Menu.Item>
  //                   <Dropdown
  //                       placeholder='Change Locale'
  //                       fluid
  //                       selection
  //                       defaultValue={selectedlang}
  //                       options={countryOptions}
  //                       onChange={handleChange}
  //                   />
  //               </Menu.Item> */}
  //     </Menu.Menu>
  //   </Menu>
  // );

  return (
    <Menu fixed="top" style={{ background: "#00B1F6", margin: '0px' }}>
      <Menu.Item style={{ border: '0px',  cursor: 'pointer'}}>
        <Image src="https://i.imgur.com/lXrEJZj.png" size='small' wrapped onClick={() => router.push(`/${router.query.locale}`)}/>
      </Menu.Item>
      <Menu.Item style={{ border: '0px', color: 'white', cursor: 'pointer'}}>
      <h2 onClick={() => router.push(`/${router.query.locale}`)} style={{ fontSize: `${isMobile ? '0.9em' : '2em'}`}}> Open GIS Curriculum</h2>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
