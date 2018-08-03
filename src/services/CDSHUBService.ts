import axios from "axios";

export const performGetRequest = (url,successCallback, errorCallback,params?,optionalData?) => {
  
  let config = {};
  if(params)
  {
     config = {
      method: "get",
      url,
      params,
      headers: {
        Accept: "application/json"
      },
    };
  }
  else{
     config = {
      method: "get",
      url,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " ,
        UserAgent: 'NONISV|Microsoft|CDSHUB-Administration/1.0'
      },
    };
  }
  
  if(config)
  {
    axios(config)
    .then((data) => {
      if (optionalData) {
        successCallback(data, optionalData);
      } else {
        successCallback(data);
      }

    })
    .catch((error) => {
      errorCallback(error);
    });
  }
  
};

export const performPostRequest = (url, inputdata,successCallback, errorCallback,params?) => {
  
  let config ={};
    if(params)
    {
       config = {
        method: "post",
        url,
        params,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " ,
        },
        data: inputdata,
      };
    }
  else{
     config = {
      method: "post",
      url,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " ,
      },
      data: inputdata,
    };
  }
  axios(config)
    .then((data) => {
      successCallback();
      // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.SUCCESS,CONSTANTS.LOG_MESSAGE.SUCCESS_MESSAGE)
    })
    .catch((error) => {
      errorCallback();
      // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.ERROR,CONSTANTS.LOG_MESSAGE.ERROR_MESSAGE)
    });
};


export const performPostImageRequest = (url, formData,successCallback?, errorCallback?,params?) => {
 let config={};

  if(params)
  {
    config = {
      method: "post",
      url,
      params,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " ,
        "Content-Type": "multipart/form-data"
      },
      data: formData,
    };
  }
  else{
    config = {
      method: "post",
      url,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " ,
        "Content-Type": "multipart/form-data"
      },
      data: formData,
    };
  }
   
  axios(config)
    .then((data) => {
      successCallback(data);
      // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.SUCCESS,CONSTANTS.LOG_MESSAGE.SUCCESS_MESSAGE)
    })
    .catch((error) => {
      errorCallback(error);
      // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.ERROR,CONSTANTS.LOG_MESSAGE.ERROR_MESSAGE)
    });
};

export const performPostRequestReturnID = (url, inputdata,successCallback, errorCallback,params?) => {
  
  let config ={};
    if(params)
    {
       config = {
        method: "post",
        url,
        params,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " ,
        },
        data: inputdata,
      };
    }
  else{
     config = {
      method: "post",
      url,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " ,
      },
      data: inputdata,
    };
  }
  axios(config)
    .then((data) => {
      successCallback(data);
      // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.SUCCESS,CONSTANTS.LOG_MESSAGE.SUCCESS_MESSAGE)
    })
    .catch((error) => {
      errorCallback();
      // this.props.getMessageDetails(CONSTANTS.MESSAGETYPE.ERROR,CONSTANTS.LOG_MESSAGE.ERROR_MESSAGE)
    });
};

