export const CONSTANTS = {

    URL: {
      WEB_API_URL: "https://main-cdshub.azurewebsites.net"
        
    },

    REGEX:{
        TEXT_FIELD_VALIDATION:"^[a-zA-Z0-9]+( [a-zA-Z0-9_]+)*$"
        
    },
    INPUT_LENGHT:{
        MIN:3,
        MAX:256
    },
    WINDOW_TITLE:{
        CONFIRM_TO_DELETE:"Confirm to delete",
        CONFIRM_TO_UPLOAD: "Confirm to upload"
    },
    CONFIRM_MESSAGE:{
        DEFAULT_MESSAGE:"Are you sure to do this?",
        ALL_HIGHLIGHTS_WILL_BE_DELETED:"All Highlights from current Info Section will be deleted. Are you sure to do this?",
        FILE_OVERWRITE: "File already exists! Would you like to overwrite?"
    },
    VALIDATION_ERROR_MESSAGE:{
        SPL_CHARACTER : "Special Characters are not allowed.",
        LENGTH_MESSAGE : "Length should be atleast 3 character and less than 256 character.",
        PAGE_ALREADY_EXISTS : "A page with the same title aready exists.", // cds Hub - Bug 37508
        MANDATORY_FIELD:"Field cannot be empty.",
        KEYWORD_VALIDATION_ERROR_MESSAGE : "Only listed keywords are allowed.", // cds Hub - Bug 38183
        LINK_URL_LINK_NAME_ARE_MANDATORY : "Fields Link URL, Link Name are mandatory....",      
        DATE_VALIDATION_ERROR_MESSAGE: "Please enter Available From Date",//cds Hub - Bug 41150
        FILE_UPLOAD_VALIDATION : "Please select a file to upload!"
    },
    WEBAPP_DETAILS: {
        CLIENT_ID: "41911f22-f41c-4eca-b0fc-3c599cc81b36",
        TENANT_ID: "72f988bf-86f1-41af-91ab-2d7cd011db47",
        CLIENT_SECRET: "",
    },
    CONTENT_TYPE_NAME: {
        CONTENT_PAGE: "HubContentPage",
        LANDING_PAGE: "HubLandingPage",
        SUB_LANDING_PAGE: "HubSubLandingPage",
    },
    PAGES_NAME: {

    },
    PAGE_HEADER: {
        CONTENT_PAGE_HEADER: "Content Admin Page",
        HOME_PAGE_HEADER: "Site Admin Page",
    },
    LIST_LIBRARY_NAME: {
        HUB_CONTENT_PAGES: "HubContentPages",
        HUB_LANDING_PAGES: "HubLandingPages",
        HUB_HERO_IMAGES: "HubTilesPictureLibrary",
        HUB_ICON_IMAGES: "HubThumbnailPictureLibrary",
        HUB_GLOBAL_LINKS: "HubGlobalLinks",
        HUB_CONTENT_PAGE_LINKS: "HubContentPageLinks",
        HUB_LANDING_PAGE_LINKS: "HubLandingPageLinks",
        HUB_KEYWORDS: "HubKeywords",
        HUB_DOCUMENTS: "HubGlobalDocumentsLibrary",
        HUB_DOCUMENT_DATA: "HubGlobalDocumentData",
        HUB_CONTENT_PAGE_SECTIONS: "HubContentPageSections",
        HUB_LANDING_PAGE_SECTIONS:"HubLandingPageSections"
    },

    COLUMN_NAME:{
        HUB_TITLE:"Title",
        HUB_PAGE_NAME:"HubPageName",
        HUB_PAGE_DESCRIPTION:"HubPageDescription",
        HUB_KEYWORDS:"HubKeywords",
        HUB_TAGS:"HubTags",
        HUB_IMAGE_ID:"HubImageID",
        HUB_ICON_IMAGE_ID:"HubIconImageID",
        HUB_AVAILABLE_FROM:"HubAvailableFrom",
        HUB_AVAILABLE_UNTIL:"HubAvailableUntil",
        HUB_CREATED_BY_USER:"HubCreatedByUser",
        HUB_MODIFIED_BY_USER:"HubModifiedByUser",
        HUB_PARENT_PAGE_NAME:"HubParentPageName",
        HUB_CONTENT_PAGE_TITLE:"HubContentPageTitle",
        HUB_CONTENT_PARENT_PAGE_TITLE:"HubContentParentPageTitle",
        HUB_LANDING_PAGE_TITLE:"HubLandingPageTitle",
        HUB_LANDING_PARENT_PAGE_TITLE:"HubLandingParentPageTitle",
        HUB_INHERIT_PARENT_LINKS:"HubInheritParentLinks",
        HUB_LINKS:"HubLinks",
        HUB_SECTION_NAME:"HubSectionName",
        HUB_SECTION_TILES:"HubSectionTiles",
        HUB_DESCRIPTION:"HubDescription",
        HUB_IS_ACTIVE:"HubIsActive",
        HUB_START_DATE:"HubStartDate",
        HUB_END_DATE:"HubEndDate",
        HUB_URL:"HubUrl",
        HUB_DOCUMENT_LINK: "HubDocumentLink",
        HUB_SECTION_DOCUMENTS:"HubSectionDocuments"
    },

    COLUMN_DATATYPE:{
        SINGLE_LINE_TEXT:"Single line of text",
        MULTI_LINE_TEXT:"Multiple lines of text",
        PEOPLE:"Person or Group",
        LOOKUP:"Lookup",
        DATETIME:"Date and Time",
        BOOLEAN:"Boolean"
    },


    LEFT_NAV_ADMIN_LINKS:{
        LEFT_NAV_CONTENT_ADMIN: "ContentAdmin",
        LEFT_NAV_LANDINGPAGE_ADMIN: "LandingPageAdmin",
        LEFT_NAV_HOME_PAGE: "Home Page",
        LEFT_NAV_TOP_NAVIGATION: "Top Navigation",
        LEFT_NAV_MANAGE_LINKS: "Manage Links",
        LEFT_NAV_MANAGE_DOCUMENTS: "Manage Documents",
    },

    MESSAGETYPE: {
        SUCCESS: "success",
        ERROR: "error",
        WARNING:"warning"
    },

    LOG_MESSAGE: {
        SUCCESS_MESSAGE: "Data Saved Successfully.",
        ERROR_MESSAGE: "Error Occured. Please try again.",
        FOCUS_AREA_WARNING_MESSAGE : "Not more than 6 links are allowed.",
        HIGHLIGHTS_WARNING_MESSAGE : "Not more than 4 Highlights are allowed.",
        DELETE_MESSAGE : "Successfully deleted",
        LINKS_WARNING_MESSAGE : "Only 1 Link is allowed per Info Section.",  // cds-Hub - Bug 39770
        RESTRICT_DELETE: "Cannot delete Landing Page as it has Sub Landing Pages !",
        WHATS_NEW_WARNING_MESSAGE : "Not more than 18 pages are allowed.",
        ACCESS_DENIED : "You do not have access to view this page",
        ASSOCIATED_PAGE_NOT_FOUND:"The associated page does not exist.",
        SELECT_PAGE_WARNING:"Please select a page.",
        FILE_REFERENCE_FOUND: "File reference found in Content and Landing pages. Please remove the reference and try again!",
        USER_ALIAS_NOT_NULL  : "User alias cannot be null.",
        PAGE_ID_NOT_ZERO:"Page id cannot be 0."

    },

    HIDE_MESSAGEBOX:"HIDE_MESSAGEBOX",
    
    MANAGE_HOME_PAGE_LEFT_NAV_TITLE: {
        SELECT_PAGE_TO_EDIT: "Select page to edit",
        MANAGE_HOME_PAGE: "Manage Home Page",
        MANAGE_LINKS: "Manage Links"
    },

    MANAGE_CONTENT_PAGE_LEFT_NAV_TITLE: {
        SELECT_PAGE_TO_EDIT: "Select a content page to edit",
        NEW_CONTENT_PAGE: "+ New Content Page",
        MANAGE_LANDING_PAGES: "Manage Landing Pages",
        MANAGE_DOCUMENTS: "Manage Documents",
    },

    MANAGE_LANDING_PAGE_LEFT_NAV_TITLE: {
        SELECT_PAGE_TO_EDIT: "Select a landing page to edit",
        NEW_LANDING_PAGE: "+ New Landing Page",
        MANAGE_CONTENT_PAGES: "Manage Content Pages",
        MANAGE_DOCUMENTS: "Manage Documents",
    },

    GENERAL_TAB_SUB_TITLE: {
        HERO_AREA: "Hero Area",
    },

    MANAGE_DOCUMENTS_SUB_TITLE: {
        UPLOAD_DOCUMENTS: "Upload Documents",
        EXISTING_DOCUMENTS: "Existing Documents",
    },

    VIEW_CONTENT_AND_LANDING_PAGE_LEFT_NAV_TITLE: {
        LINKS: "Links",
    },

    PROPERTY_PANE_LABEL:{
        DOCUMENT_LISTING_FILES_TYPE: "Document Listing File Types (use , as seperator)",
        DOCUMENT_LISTING_COLUMN_NAME:"Document Listing Column Name (use , as seperator)",
        TILES_CONTROL_ROW: "Tiles Number of rows",
        TILES_CONTROL_COLUMN:"Tiles Number of column",
        RECENT_USER_TRACK_DATA: "Recent User Track Data i.e. Number of Days",
    },

    CONFIGURABLE_PROPERTIES :{
        HOME_PAGE_NUMBER_TILES:6,
        RECENT_USER_TRACK_DATA_DAYS:30,
        PAGE_ID_ZERO:0
    },

    PAGE_TYPE: {
        HUB_LANDING_PAGE: 1,
        HUB_CONTENT_PAGE: 2
    }


};

