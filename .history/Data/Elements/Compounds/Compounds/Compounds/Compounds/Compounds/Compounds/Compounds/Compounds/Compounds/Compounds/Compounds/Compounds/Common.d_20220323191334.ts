interface Window {
    myGlobalFunction: MyGlobalFunctionType
}
global/* or window */.myGlobalFunction = function (name: string) {
    console.log("Hey !", name);
  };