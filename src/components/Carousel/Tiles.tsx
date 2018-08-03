import * as React from 'react';


let styles;
export default class Tiles extends React.Component<any, any>
{
    public render() {
        return (
            <div className={styles.CDSHubAdministration}>


                <img src={this.props.imgSrc} alt="" />
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <div>{this.props.desc}</div>
            </div>



        );
    }
}