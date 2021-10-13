(function(window, undefined) {
  var dictionary = {
    "6017a70a-9d42-4e73-96f4-e1010c70950f": "Home",
    "97d31c1f-36d5-42b8-bce7-e90e6a78df57": "sign up",
    "8f619c36-0486-469a-81d4-778d4678f9cc": "Me",
    "8f67d6c1-e574-4dac-8b3c-50b3f9021641": "History",
    "c10c16e5-1f3b-49d2-9853-c8f34ed6b0e1": "Emergency",
    "87f9da4b-5141-47fb-acf0-d86877466ba2": "new Email",
    "74f95ad7-9635-41cd-8489-5482707f7bb5": "splashscreen",
    "8b974af1-a1e2-48aa-9160-67958af0c9a7": "Reminder",
    "1e03caab-52bd-4cdd-999c-bc564ae9616b": "Welcome",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "5acb05c1-07cb-48a1-b2b8-aec7f4044e18": "new Name",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);