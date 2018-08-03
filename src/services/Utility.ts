export const performEncoding = value => {
  //On addition of a backslash in the Title, it will get replaced to "'".  As it causes issues in JSON conversion.
  var encodedValue = encodeURIComponent(value.replace(/"/g, "'").replace(/\\/g, "'"));
  return encodedValue;
};


export const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (array.length > 0) {
    chunked.push(array.splice(index, size));
  }
  return chunked;
};

export const formatDropdownData=(data,dropDownOptions,dropDownSelectedItems,selectedItemsIDS?)=>{
  let options = { ...dropDownOptions };
  let selectedItems = { ...dropDownSelectedItems };
  let cascadingParent = [];
  data = data.sort((a, b) => {
    if (a.HubMasterTagOrder < b.HubMasterTagOrder) {
      return -1;
    }
    else if (a.HubMasterTagOrder === b.HubMasterTagOrder) {
      return 0;
    }
    if (a.HubMasterTagOrder > b.HubMasterTagOrder) {
      return 1;
    }
  });
  data.map((tag) => {
    if (!options[tag.HubMasterTag]) {
      options[tag.HubMasterTag] = [];
    }
    if (!selectedItems[tag.HubMasterTag]) {
      selectedItems[tag.HubMasterTag] = [];
    }
    if (tag.HubMasterTag !== "SubRegions") {
      options[tag.HubMasterTag].push({ key: tag.ID, text: tag.HubTagName });
    }

    if (selectedItemsIDS && selectedItemsIDS.indexOf(tag.ID) > -1) {
      selectedItems[tag.HubMasterTag].push(tag.ID);
      if (tag.HubParent) {
        cascadingParent.push(tag.HubParent);
      }
    }
  });

  if (cascadingParent.length !== 0) {
    data.map((tag) => {
      if (cascadingParent.indexOf(tag.HubParent) > -1) {
        options['SubRegions'].push({ key: tag.ID, text: tag.HubTagName });
      }
    });
  }

  return {
    otpions:options,
    selectedItems:selectedItems
  }
}
