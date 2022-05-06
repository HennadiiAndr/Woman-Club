export const emailValidation = (email, setMessage) =>{
      const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9·-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
      if(regEx.test(email)){
         setMessage('we sent you all materials')
      }else if(!regEx.test(email)&& email !==''){
         setMessage('enter valid email')
      }else{
         setMessage('enter email')
      }
   }