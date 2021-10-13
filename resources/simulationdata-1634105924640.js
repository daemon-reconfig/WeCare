function initData() {
  jimData.variables["Email"] = "";
  jimData.variables["Address"] = "";
  jimData.variables["reminder"] = "";
  jimData.variables["State"] = "";
  jimData.variables["City"] = "";
  jimData.variables["Phone Number"] = "";
  jimData.variables["Password"] = "";
  jimData.variables["Name"] = "";
  jimData.datamasters["Name"] = [
    {
      "id": 1,
      "datamaster": "Name",
      "userdata": {
        "c98c9a40-1ecc-40a1-88f6-1fbe683d63ce": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Name",
      "userdata": {
        "c98c9a40-1ecc-40a1-88f6-1fbe683d63ce": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Name",
      "userdata": {
        "c98c9a40-1ecc-40a1-88f6-1fbe683d63ce": "sample text"
      }
    }
  ];

  jimData.datamasters["Email"] = [
    {
      "id": 1,
      "datamaster": "Email",
      "userdata": {
        "eb9609c8-9d16-4b5b-b767-e7e281457c2e": "sample text"
      }
    },
    {
      "id": 2,
      "datamaster": "Email",
      "userdata": {
        "eb9609c8-9d16-4b5b-b767-e7e281457c2e": "sample text"
      }
    },
    {
      "id": 3,
      "datamaster": "Email",
      "userdata": {
        "eb9609c8-9d16-4b5b-b767-e7e281457c2e": "sample text"
      }
    }
  ];

  jimData.isInitialized = true;
}