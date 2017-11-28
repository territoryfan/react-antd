import React from 'react';
import { TabBar } from "antd-mobile";
import "./TabBarPiao.less";
import eno from "./../../static/svg/eno.svg";
import eok from "./../../static/svg/eok.svg";
import hno from "./../../static/svg/hno.svg";
import hok from "./../../static/svg/hok.svg";
import mno from "./../../static/svg/mno.svg";
import mok from "./../../static/svg/mok.svg";
import CarouselPiao from "./../../components/Carousel/Carousel";
class TabBarPiao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }

  // renderContent(pageText) {
  //   return (
  //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
  //       <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="tabbarpiao">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<img style={{
              width: '22px',
              height: '22px'}}
              src={eno}
              alt="eno"
            />
            }
            selectedIcon={<img style={{
              width: '22px',
              height: '22px'}}
              src={eok}
              alt="eok"
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <CarouselPiao />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img style={{
                width: '22px',
                height: '22px'}}
                src={hno}
                alt="hno"
              />
            }
            selectedIcon={
              <img style={{
                width: '22px',
                height: '22px'}}
                src={hok}
                alt="hok"
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            22
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img style={{
                width: '22px',
                height: '22px'}}
                src={mno}
                alt="mno"
              />
            }
            selectedIcon={
              <img style={{
                width: '22px',
                height: '22px'}}
                src={mok}
                alt="mok"
              />
            }
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            33
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarPiao;