// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import { Version } from '@microsoft/sp-core-library';
// import { ICDSHubWPProperties,IgetMessageDetails } from '../cdshubAdministration/components/Index.types';
// import {
//   BaseClientSideWebPart,
//   IPropertyPaneConfiguration,
//   PropertyPaneTextField
// } from '@microsoft/sp-webpart-base';

// import * as strings from 'ViewHomePageWebPartStrings';
// import ViewHomePage from './components/Controls/ViewHomePage';
// import {SPComponentLoader} from '@microsoft/sp-loader';
// import { IViewHomePageProps } from './components/Controls/IViewHomePageProps';
// import {CONSTANTS} from "../../Constants/constants";
// import  "bootstrap/dist/css/bootstrap.min.css";

// export interface IViewHomePageWebPartProps {
//   description: string;
//   DocumentListingFileTypes:string;
//   DocumentListingControlColumn:string;
//   TilesControlRows:string;
//   TilesControlColumn:string;
//   RecentUserTrackViewData:string;

// }

// export default class ViewHomePageWebPart extends BaseClientSideWebPart<IViewHomePageWebPartProps> {

  

//   public render(): void {
//     const element: React.ReactElement<IViewHomePageProps > = React.createElement(
//       ViewHomePage,
//       {
//         IsContentorSiteAdmin: this.properties.description,
//         _pageContext:this.context.pageContext,
//         DocumentListingFileTypeValue:this.properties.DocumentListingFileTypes,
//         DocumentListingColumnNameValue:this.properties.DocumentListingControlColumn,
//         TilesControlNumberOfColumnValue:this.properties.TilesControlColumn,
//         TilesControlNumberOfRowsValue:this.properties.TilesControlRows,
//         RecentUserTrackViewDataValue:this.properties.RecentUserTrackViewData,
//       }
//     );

//     ReactDom.render(element, this.domElement);
//   }

//   protected get dataVersion(): Version {
//     return Version.parse('1.0');
//   }

//   protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
//     return {
//       pages: [
//         {
//           header: {
//             description: strings.PropertyPaneDescription
//           },
//           groups: [
//             {
//               groupName: strings.BasicGroupName,
//               groupFields: [
//                 PropertyPaneTextField("description", {
//                   label: strings.DescriptionFieldLabel
//                 }),
//                 PropertyPaneTextField("DocumentListingFileTypes",{
//                   label:CONSTANTS.PROPERTY_PANE_LABEL.DOCUMENT_LISTING_FILES_TYPE
//                 }),
//                 PropertyPaneTextField("DocumentListingControlColumn",{
//                   label:CONSTANTS.PROPERTY_PANE_LABEL.DOCUMENT_LISTING_COLUMN_NAME,
//                 }),
//                 PropertyPaneTextField("TilesControlRows",{
//                   label:CONSTANTS.PROPERTY_PANE_LABEL.TILES_CONTROL_ROW,
//                 }),
//                 PropertyPaneTextField("TilesControlColumn",{
//                   label:CONSTANTS.PROPERTY_PANE_LABEL.TILES_CONTROL_COLUMN,
//                 }),
//                 PropertyPaneTextField("RecentUserTrackViewData",{
//                   label:CONSTANTS.PROPERTY_PANE_LABEL.RECENT_USER_TRACK_DATA,
//                 }),
//               ]
//             }
//           ]
//         }
//       ]
//     };
//   }
// }
