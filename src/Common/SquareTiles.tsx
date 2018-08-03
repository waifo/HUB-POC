import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
//import styles from '../Styles/ViewHomePage.module.scss';



let styles =require('../Styles/ViewHomePage.module.scss')
export const SquareTiles = (props) => {

    let { tileClickHandler, tileData,key } = props
    return (
        <div key={key} >
            <div className={"col-sm-4 " + styles.padd_rgt_0 + " " + styles.padd_btm_20}>
                <div className={styles.home_sm_tile} onClick={()=>tileClickHandler(tileData)}
                    style={{ backgroundImage: "url('" + tileData.FocusTileImg + "')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}  >
                    <div className={styles.sm_tile_txt}>
                        <div className={styles.sm_tile_title}><a href="#" title={tileData.FocusTileTitle}>{tileData.FocusTileTitle} </a><Icon title="favourite" className={"ms-Icon ms-Icon--Heart pull-right " + " " + styles.sm_tile_heart_icon} /></div>
                        <div className={styles.sm_tile_desc}>{tileData.FocusTileDesc}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export const ExpandedSquareTiles: React.SFC<any> = (props) => {
    let { tileClickHandler,selectedItem } = props
    return (

        <div >
            <div className={styles.home_tile} >
                <div className={"col-sm-8 " + styles.padd_rgt_0}
                    style={{ backgroundImage: "url('" + selectedItem.imgSrc + "')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100%" }}>
                    {/* <img src={selectedItem.imgSrc} alt="" /> */}
                </div>
                <div className={"col-sm-4 " + styles.padd_lftRgt_0}>
                    <div className={styles.tile_txt}>
                        <Icon title="close" className={"ms-Icon ms-Icon--ChromeClose pull-right " + " " + styles.blue_txt + " " + styles.page_url + " " + styles.padd_top_5} onClick={()=>tileClickHandler()} />
                        <div className={styles.tile_data}>
                            {/* <p className={styles.tile_news_title}>Technology News</p> */}
                            <p className={styles.tile_title + " " + styles.padd_topbtm_20}>{selectedItem.title}</p>
                            <p className={styles.tile_desc}>{selectedItem.desc}</p>
                        </div>
                        <div className={styles.filled_heart_icon} ><Icon title="favourite" className="ms-Icon ms-Icon--Heart" /></div>
                        <div className={styles.blue_txt + " " + styles.more_link} ><a href={selectedItem.pageURL}>More</a><Icon iconName="ChevronRightMed" className={styles.glyphicon_select} /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
