import * as React from "react";
import * as ReactDOM from 'react-dom'
import  "./styles/ms_custom.scss";
import { adalConfig } from "./Adal/adalConfig";
// import { IViewHomePageProps } from "./IViewHomePageProps";
import { CONSTANTS } from "./Constants/constants"
import { performGetRequest, performPostRequest } from "./Services/CDSHUBService";
import HomeCarousel from "./components/Carousel/HomeCarousel";
 
let styles = require('./styles/ViewHomePage.module.scss')
export interface IIndexProps {

}

export default class Index extends React.Component<any, any>
{
  constructor(props) {
    super();
    this.state =
      {
        Title: "",
        PageDescription: "",
        HeroImage: "",
        HubPageName: "Home",
        ListName: "",
        ShowBiggerDiv: "none",
        ShowSmallerDiv: "block",
        FocusTitle: "",
        FocusDesc: "",
        FocusImg: "",
        CDSHubWPProperties: {
          _PageContext: props._pageContext,
          IsContentorSiteAdmin: props.IsContentorSiteAdmin,
          SelectedPageId: props.SelectedPageId,
          DocumentListingFileTypeValue: props.DocumentListingFileTypeValue,
          DocumentListingColumnNameValue: props.DocumentListingColumnNameValue,
          TilesControlNumberOfColumnValue: props.TilesControlNumberOfColumnValue,
          TilesControlNumberOfRowsValue: props.TilesControlNumberOfRowsValue,
          RecentUserTrackViewDataValue: props.RecentUserTrackViewDataValue
        },
        FocusRedirectUrl: "",
        AllFocusTile: [],
        AllLinkGroup: []
      }

    this.onSuccessLandingInfo = this.onSuccessLandingInfo.bind(this);
    this.onSuccessManagedLinks = this.onSuccessManagedLinks.bind(this);
    this.onSuccessFocusTiles = this.onSuccessFocusTiles.bind(this);
    this.onError = this.onError.bind(this);
  }

  //Success function of fetching General Info of Whats New Page
  public onSuccessLandingInfo(res) {
    if (res.data.length > 0) {
      this.setState({
        Title: res.data[0].Title,
        PageDescription: res.data[0].HubPageDescription,
        HeroImage: res.data[0].HeroImageUrl,
      })
    }
  }


  // success function of fetching Quick Links for Left Navigation
  public onSuccessManagedLinks(res) {
    let tempLinkGroup = [];
    res.data.forEach(linkElement => {
      let LinkGroup = { "LinkGroupName": "", "Links": [] }
      LinkGroup.LinkGroupName = linkElement.Title
      let links = linkElement.HubLinks;
      links.forEach(element => {
        
        var chkprotocol = element.HubLinkUrl.substring(0,3);
        var updatedLink = "";
        if(chkprotocol == "www")
        {
          updatedLink = element.HubLinkUrl.substring(4);
          updatedLink = "https://" + updatedLink;
        }
        else
        {
          updatedLink = element.HubLinkUrl;
        }

        let linkDetails = {
          "Name": element.Name,
          "Link": updatedLink
        }
        LinkGroup.Links.push(linkDetails);
      })
      tempLinkGroup.push(LinkGroup);
    })
    this.setState({
      AllLinkGroup: tempLinkGroup
    })
  }


  public onSuccessFocusTiles(res) {

    let tempAllFocus = [];
    res.data.forEach(tile => {
      let focusTiles = { "FocusTileTitle": "", "FocusTileRedirectUrl": "", "FocusTileDesc": "", "FocusTileImg": "","PageId":"" }
      focusTiles.FocusTileTitle = tile.FocusTileTitle,
        focusTiles.FocusTileRedirectUrl = tile.FocusTileRedirectUrl,
        focusTiles.FocusTileDesc = tile.FocusTileDesc,
        focusTiles.FocusTileImg = "https://microsoft.sharepoint.com"+tile.FocusTileImg,
        focusTiles.PageId = tile.PageId,
        tempAllFocus.push(focusTiles)
    })
    this.setState({
      AllFocusTile: tempAllFocus
    })
  }

  // error handler
  public onError(error) {
    // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.ERROR, CONSTANTS.LOG_MESSAGE.ERROR_MESSAGE);
  }

  componentDidMount() {

    /*This is View Landing Page, hence get the related data from Landing Page lists*/
    if (this.state.HubPageName != "") {
      /*Consume the General Tab Web API to get the general info of landing page*/
      const params = { contentPageName: this.state.HubPageName, listName: CONSTANTS.LIST_LIBRARY_NAME.HUB_LANDING_PAGES, };
      performGetRequest(adalConfig.endpoints.getGeneralTab, this.onSuccessLandingInfo, this.onError, params);

    }
    else {
      this.setState({
        Title: "",
        PageDescription: "",
        HeroImage: "",
      })
    }


    /*Consume the Get Page Links Web API to get the Link Groups of landing page*/
    const manageLinksParams = { pageName: this.state.HubPageName, listName: CONSTANTS.LIST_LIBRARY_NAME.HUB_LANDING_PAGE_LINKS };
    performGetRequest(adalConfig.endpoints.getHomePageLinks, this.onSuccessManagedLinks, this.onError, manageLinksParams);


    /*Consume the LandingPage FocusTiles Web API to get the focus tiles of landing page*/
    const focusTilesParams = { landingPageName: this.state.HubPageName };
    performGetRequest(adalConfig.endpoints.getHomePageTiles, this.onSuccessFocusTiles, this.onError, focusTilesParams);

  }

  onClick(title, desc, img, tileUrl) {
    this.setState({
      ShowBiggerDiv: "block",
      ShowSmallerDiv: "none",
      FocusTitle: title,
      FocusDesc: desc,
      FocusImg: img,
      FocusRedirectUrl: tileUrl,
    });
  }

  onToggleClick() {
    this.setState({
      ShowBiggerDiv: "none",
      ShowSmallerDiv: "block"
    });
  }

  public render() {

    return (
      <div className={styles.CDSHubAdministration + " " + styles.ViewHomePage}>
        <div className={styles.hero_bg}>
          <div className={styles.hero_container}>
            <h1 className={styles.hero_title}>Welcome to CDS Hub</h1>
            <div className={styles.tile_links}>
              <ul>
                <li><a className={styles.active} href="#">What's New</a></li>
              </ul>
            </div>
            <div className={"row " + styles.hero_content + " " + styles.mrg_lftRgt_0}>
              <div className={"col-sm-3 " + styles.padd_lft_0}>
                <div><span className={styles.h3}>Mission Statement</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in.</div>
                <ul className={[styles.viewhome_nav, styles.mrg_top_30].join(" ")}>
                  {this.state.AllLinkGroup.map((linkgroup, i) => {
                    return (
                      <div>
                        <li className={styles.home_nav_title}><div key={i}>{linkgroup.LinkGroupName}</div></li>
                        {linkgroup.Links.map((links, i) => {
                          return <li><a key={i} href={links.Link} text-decoration="none" target="_blank">{links.Name} </a></li>;
                        })
                        }
                      </div>);
                  })
                  }
                </ul>
              </div>
              <div className="col-sm-9">
                {this.state.AllFocusTile.length !== 0 ? <HomeCarousel focusItems={this.state.AllFocusTile} CDSHubWPProperties={this.state.CDSHubWPProperties}/> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 ">
            {/* <h1 className={styles.padd_top_30}>Recent Views</h1> */}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index/>,window.document.getElementById('root'))
