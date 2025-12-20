export function getUrl(whichUrl?:string) {
  if (typeof window === "undefined") {
    //for ssr url
    if (whichUrl == "SSR_BACKEND_URL" && process.env.DOCKER == "true") {
      console.log("under ssr")
      return process.env.SSR_BACKEND_URL;
    }else if (whichUrl == "authenv"){ 
      console.log("under which")
      return process.env.AUTH;
    }else {
      console.log("un else")
      return process.env.NEXT_PUBLIC_Backend_URL;
    }
  } else {
    // client url
    console.log("client url")
    return process.env.NEXT_PUBLIC_Backend_URL;
  }
}
