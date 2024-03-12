import jwt, { JsonWebTokenError, JwtPayload, TokenExpiredError } from 'jsonwebtoken'
import config from '../app/config'
function sign(data:any){
  return jwt.sign({admin:data},config.jwt.secret as string,{expiresIn:config.jwt.expire})
}

function verify(token:string):{admin:JwtPayload|String|null,error:TokenExpiredError|JsonWebTokenError|null}{
  try{
    const decoded = jwt.verify(token,config.jwt.secret as string)
    return {
      admin:decoded,
      error:null
    }
  }catch(e){
    return {
      admin:null,
      error:e as TokenExpiredError|JsonWebTokenError
    }
  }
}
export{
  sign,
  verify
}