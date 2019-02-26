// middleware/isAuth.js
  export default function ({app, store, route, redirect, error, next}) {
    const hasToken = !!app.$apolloHelpers.getToken()
    if(route.path == '/account/login'){
      //Confirm not logged out
      if(hasToken){
        return redirect('/organisation')
      }
    }else{
      //Confirm logged in
      if(!hasToken){
        return redirect('/account/login')
      }
      //Confirm user details
      //If no user details, get them
    }
    // if (!hasToken) {
    //     error({errorCode:503, message:'You are not allowed to see this'})
    // }
}
