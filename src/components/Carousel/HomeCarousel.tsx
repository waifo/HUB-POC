import * as React from "react";
import * as Carousel from "react-bootstrap/lib/Carousel";
import { chunk } from "../../services/Utility";
import {
  SquareTiles,
  ExpandedSquareTiles
} from "../../Common/SquareTiles";
// import styles from '../../styles/ViewHomePage.module.scss';
// import { IAllFocusTile } from "../IViewHomePageState";
import {CONSTANTS} from "../../Constants/constants";
// export interface IHomeCarousel {
//  CDSHubWPProperties:ICDSHubWPProperties;
//  focusItems:Array<IAllFocusTile>;
// }

let styles = require('../../styles/ViewHomePage.module.scss')
export default class HomeCarousel extends React.Component<any, any> {
  // private siteURL = "";
  // private noOfRows:number;
  // private noOfColumn:number;
  // private noOfTiles: number;
  constructor(props) {
    super(props);
    // this.siteURL =props.CDSHubWPProperties._PageContext.web.absoluteUrl;
    // this.noOfRows = Number(props.CDSHubWPProperties.TilesControlNumberOfRowsValue);
    // this.noOfColumn =Number(props.CDSHubWPProperties.TilesControlNumberOfColumnValue);
    // this.noOfTiles=(this.noOfRows && this.noOfColumn && this.noOfRows !== 0 && this.noOfColumn !== 0) ? this.noOfRows * this.noOfColumn : CONSTANTS.CONFIGURABLE_PROPERTIES.HOME_PAGE_NUMBER_TILES;
    this.state = {
      allFocusItems: chunk(props.focusItems,6),
      showSelectedItem: false,
      selectedItem: { imgSrc: "", title: "", desc: "", pageURL: "" }
    };
  }

  public componentWillReceiveProps(nextprops) {
    this.setState({
      allFocusItems: chunk(nextprops.focusItems, 6)
    });
  }

  public tileClickHandler = (tileData?) => {
    if (tileData) {
      this.setState({
        selectedItem: {
          imgSrc: tileData.FocusTileImg,
          title: tileData.FocusTileTitle,
          desc: tileData.FocusTileDesc,
          // pageURL:
          //   this.siteURL +
          //   "/SitePages/viewcontentpage.aspx?pageNumber=" +
          //   tileData.PageId
          pageURL:""
        },
        showSelectedItem: !this.state.showSelectedItem
      });
    } else {
      this.setState({
        showSelectedItem: !this.state.showSelectedItem
      });
    }
  }

  render() {
    return (
      <div className={styles.CDSHubAdministration + " " + styles.ViewHomePage}>
        <div className={"row " + styles.padd_top_5}>
          {!this.state.showSelectedItem ? (
            <Carousel controls={false} indicators={false} interval={3000}>
              {this.state.allFocusItems.map(tileGroup => {
                return (
                  <Carousel.Item>
                    {tileGroup.map((tileData,index) => {
                      return (
                        <SquareTiles
                          key={index}
                          tileClickHandler={this.tileClickHandler}
                          tileData={tileData}
                        />
                      );
                    })}
                  </Carousel.Item>
                );
              })}
            </Carousel>
          ) : (
            <ExpandedSquareTiles
              tileClickHandler={this.tileClickHandler}
              selectedItem={this.state.selectedItem}
            />
          )}
        </div>
      </div>
    );
  }
}
