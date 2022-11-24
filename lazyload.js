 window.onload = function () {
      const arturl = "http://13.127.238.109:8905/api/public_hook/v1/artwork";
      let accessToken = localStorage.getItem("access_token");
      let departmenId = localStorage.getItem("departmenId");
      let urlObject = {
        url:
          arturl +
          "?key=41204aed-89d7-4a45-9455-976ac475a8ab" +
          "&limit=" +
          50 +
          "&offset=0",
        method: "GET",
        data: "",
        header: {},
        accessToken: accessToken,
        limit:80
      };
      // start scroll query  for laziload 
      window.addEventListener('scroll', function() {
        let offset = localStorage.getItem("offset");
        let lastHeight = localStorage.getItem("lastHeight");
        urlObject.url = arturl +"?key=41204aed-89d7-4a45-9455-976ac475a8ab" +"&limit=50&offset="+offset;
        let bodyHeight = document.body.scrollHeight - screen.height;
        let limit = bodyHeight-500;
    let scrollYHeight = window.pageYOffset;
    console.log('okkkolllll');
    console.log('offset = ',offset);
    console.log('limit = ',limit);
    console.log('scrollHeight = ',scrollYHeight);
      if(limit<scrollYHeight && scrollYHeight>lastHeight){
        console.log('call laziload');
        localStorage.setItem("lastHeight",bodyHeight);
          loadArts(urlObject);
      }
});
// end scroll query  for laziload 
localStorage.setItem("offset",0);
localStorage.setItem("lastHeight",0);
      loadArts(urlObject);
  
    };
