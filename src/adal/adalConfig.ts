import { AuthenticationContext } from "react-adal";
import { CONSTANTS } from "../Constants/constants";
export const adalConfig = {
  clientId: CONSTANTS.WEBAPP_DETAILS.CLIENT_ID,
  tenant: CONSTANTS.WEBAPP_DETAILS.TENANT_ID,
  endpoints: {
    addContentPage: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin/CreateSitePage",
    addImage: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdminPostFile",
    addFile: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdminPostDocuments",
    deleteContentPage: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin/DeleteContentPage",
    deletebyId: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin/DeletebyId",
    deleteLandingPage: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin/DeleteLandingPage",
    deleteByPageName: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin/DeletebyPageName",
    getAccountApi: CONSTANTS.URL.WEB_API_URL + "/api/Account",
    getActiveLinks: CONSTANTS.URL.WEB_API_URL + "/api/Links",
    getannouncementApi: CONSTANTS.URL.WEB_API_URL + "/api/announcement",
    getApplicationApi: CONSTANTS.URL.WEB_API_URL + "/api/Application",
    getContentTab: CONSTANTS.URL.WEB_API_URL + "/api/GetContentPageSection/GetPageContent",
    getFocusAreaApi: CONSTANTS.URL.WEB_API_URL + "/api/ManageLandingPage/GetLPFocusArea",
    getFocusTiles: CONSTANTS.URL.WEB_API_URL + "/api/LandingPageFocusTiles/GetLandingPageFocusTiles",
    getHomePageTiles: CONSTANTS.URL.WEB_API_URL + "/api/Home",
    getInfoSectionHighlights: CONSTANTS.URL.WEB_API_URL + "/api/LandingPageFocusTiles/GetLandingPageInfoSection",
    getGeneralTab: CONSTANTS.URL.WEB_API_URL + "/api/GeneralContent/GetGeneralContent",
    getGlobalLinks: CONSTANTS.URL.WEB_API_URL + "/api/ManagedLinks",
    getInfoSection: CONSTANTS.URL.WEB_API_URL + "/api/ManageLandingPage/GetInfoSection",
    getListGuid: CONSTANTS.URL.WEB_API_URL + "/api/ManagedLinks/GetListguid",
    getHomePageLinks: CONSTANTS.URL.WEB_API_URL + "/api/Home/GetQuickLinks",
    getManagePageLinks: CONSTANTS.URL.WEB_API_URL + "/api/GetContentPageLinks",
    getMasterKeyword: CONSTANTS.URL.WEB_API_URL + "/api/Keyword/GetMasterKeyword",
    getTagApi: CONSTANTS.URL.WEB_API_URL + "/api/Tag",
    getAllContentPages: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin/GetAllContentPages",
    getWhatsNew: CONSTANTS.URL.WEB_API_URL + "/api/WhatsNew/GetActiveWhatsNew",
    getUniqueContentPages: CONSTANTS.URL.WEB_API_URL + "/api/GetContentPageLinks/GetUniqueContentPage",
    getPageInfoByListName: CONSTANTS.URL.WEB_API_URL + "/api/ManageLandingPage/GetPageInfoFromList",
    getLandingPageInfo: CONSTANTS.URL.WEB_API_URL + "/api/ManageLandingPage/GetLandingPageInfoFromList",
    getGeneralContentTaggingData: CONSTANTS.URL.WEB_API_URL + "/api/GeneralContent/GetTaggingData",
    getPageName: CONSTANTS.URL.WEB_API_URL + "/api/LandingPageFocusTiles/GetPageNameById",
    getManageDocuments: CONSTANTS.URL.WEB_API_URL + "/api/ManageDocuments/GetManageDocuments",
    getDeleteValidation: CONSTANTS.URL.WEB_API_URL + "/api/ManageDocuments/GetDeleteValidation",
    getManageDocumentsForPage: CONSTANTS.URL.WEB_API_URL +
                              "/api/ManageDocuments/GetManageDocumentsForPage", // cds_Hub1807 - UserStory 39091
    setapi: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdmin",
    setapifetchID: CONSTANTS.URL.WEB_API_URL + "/api/ManageAdminPostFetchID",
    setapimultiple: CONSTANTS.URL.WEB_API_URL + "/api/ChangeMultipleListItems",
    getBusinessProfile : CONSTANTS.URL.WEB_API_URL + "/api/GeneralContent/GetBusinessProfile",
    GetTopNavigation:"https://main-cdshub.azurewebsites.net/api/TopNavigation",
    GetUserRole:"https://main-cdshub.azurewebsites.net/api/TopNavigation/GetUserRole",
    SiteUrl:"https://microsoft.sharepoint.com/teams/dev_cdshub",
    PostUserRecentView: CONSTANTS.URL.WEB_API_URL + "/api/PostUserRecentView"
  },

  cacheLocation: "localStorage",
};

export const authContext = new AuthenticationContext(adalConfig);
