
setTimeout(function (){
  console.log(1);
},1000);
console.log(2);



var promise = new Promise(
  function(resolve, reject){
    resolve();
  }
);
promise  
  .then(function(){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve('long time no see');
      },3000);

    });
  })  
  .then(function(data){
    console.log(data);
    // return 2;
 
  })
  .then(function(data){
    console.log(data)
  })

  .catch(function(fullcourses){
    console.log(fullcourses);
  })
  .finally(function(){
    console.log('done dell');
  })


function sleep (ms ){
  return new Promise(function (resolve) {
      setTimeout(resolve, ms);
  });
}

sleep(1000)
  .then(function(){
    console.log(1);
    return sleep (1000);
  })

  .then(function(){
    console.log(2);
    return  new Promise((resolve,reject)=>{
      reject('lỗi rồi');
    });
  })
  sleep(1000)
  .then(function(){
    console.log(3); 
    return sleep (1000);
  })
  .then(function(){
    console.log(4); 
    return sleep (1000);  
  })
  .catch(function(err ){
    console.log(err);
  })



var promise =  Promise.reject('errro');

promise 
  .then (function(result){
    console.log('result: ', result);
  })
  .catch(function (err){
    console.log('err: ' ,err);
  })


var promise1 = new Promise(
  function(resolve){
    setTimeout (function(){
      resolve([1]);
    },1000);
  }
) 
var promise2 = new Promise(
  function(resolve){
    setTimeout (function(){
      resolve([2,3]);
    },5000);
  }
) 

Promise.all([promise1,promise2])
  .then(function([result1,result2]){
      console.log(result1.concat(result2));
  });



  thực hành promise trong thực tế 




var User = [
  { 
    id: 0,
    name : 'giang',
  },
  {
    id: 1, 
    name : 'tùng',
  },
  {
    id: 2, 
    name : 'tiến'
  },
];


var Comments = [
  {
    id: 1 ,
    user_id : 1 ,
    content: "hello xin chaò bạn ",
  },
  {
    id: 2 , 
    user_id: 2 , 
    content: "heehehehehehe"
  }
];

function getComments (){
  return  new Promise(function(resolve){
    setTimeout(function(){
      resolve(Comments)
    }, 1000);
  });
}

function getUserByIds(userIds){
  return new Promise(function (resolve){
        var result  = User.filter(function(user) {
          return userIds.includes(user.id)
        }); 
        resolve(result);
  },1000)
} 

getComments()
      .then(function(comments){
          var userIds = comments.map(function(comments){
            return comments.user_id;
          });
         return getUserByIds(userIds)
            .then(function (User){
               return  {
                User : User,
                comments :comments
               };
            });
          })
         .then(function(User){
            console.log(User);
      });

