import run from '../app'
import request from 'supertest'
import {Server} from 'http'
describe('http',()=>{
  //@ts-ignore
  let server:Server = null
  beforeAll(()=>{
    server = run(3003)
  })
  it('Get /auth/login login_test',async ()=>{
    // const res = await request(server)
    // .post('/auth/login')
    // const {token} = res.body
    // console.log(res.body);
    
    // console.log(token);

    return request(server)
    .get('/auth')
    .expect(200)
    .then(response=>{
      {
        console.log(response.body);
      }
    })
  }),
  
  // it('Post /auth/signin',()=>{
  //   return request(server)
  //   .post('/auth/signin')
  //   .send({
  //     name:'Eggnisi',
  //     password:'654321'
  //   })
  //   .expect(200)
  //   .then(res=>{
  //     console.log(res.body);
  //   })
  // })
  // it('Get /auth',()=>{
  //   return request(server)
  //   .get('/auth')
  //   .expect(200)
  //   .then(response=>{
  //     {
  //       console.log(response.body);
  //     }
  //   })
  // })
  // it('Get /auth/login login_test',async ()=>{
  //   const res = await request(server)
  //   .post('/auth/login')
  //   const {token} = res.body
  //   console.log(res.body);
    
  //   console.log(token);

  //   return request(server)
  //   .get('/auth')
  //   .set('authorization',token)
  //   .expect(200)
  //   .then(response=>{
  //     {
  //       console.log(response.body);
  //     }
  //   })
  // }),
  afterAll(()=>{
    server.close()
  })
})