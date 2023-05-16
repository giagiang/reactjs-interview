async function handleFormSubmit(e) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
      await submitForm(textarea.value);
      show(successMessage);
      hide(form);
    } catch (err) {
      show(errorMessage);
      errorMessage.textContent = err.message;
    } finally {
      hide(loadingMessage);
      enable(textarea);
      enable(button);
    }
  }
  
  function handleTextareaChange() {
    if (textarea.value.length === 0) {
      disable(button);
    } else {
      enable(button);
    }
  }
  
  function hide(el) {
    el.style.display = 'none';
  }
  
  function show(el) {
    el.style.display = '';
  }
  
  function enable(el) {
    el.disabled = false;
  }
  
  function disable(el) {
    el.disabled = true;
  }
  
  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() == 'istanbul') {
          resolve();
        } else {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        }
      }, 1500);
    });
  }
  
  let form = document.getElementById('form');
  let textarea = document.getElementById('textarea');
  let button = document.getElementById('button');
  let loadingMessage = document.getElementById('loading');
  let errorMessage = document.getElementById('error');
  let successMessage = document.getElementById('success');
  form.onsubmit = handleFormSubmit;
  textarea.oninput = handleTextareaChange;
  



export default function  Form ({
  status = 'empty'
}){
  if (status === 'success'){
    return <h1> that's right</h1>
  }
  return ( 
    <>
      <h2>City quiz </h2>
      <p>
        in which city is there  billboard that turns air into drinkable  water ?
      </p>
      <form>
        <textarea  disable  = {
          status  === 'submitting'
        }/>
        <br />
        <button disable = {
          status ===' empty' || status === 'submitting'  
        }/>
        <button> submit</button>
        {status === 'Error' && <p className  = "Error">
          good gess but a wrong  answer.tryagain !
        </p>}
      </form>
    </>
  )
}



import {useState} from  'react'  ; 
export default function  Form (){
  const [answer,setAnswer] = useState('');
  const [error,setError]= useState(null);
  const [status, setStatus] = useState('typing')
  if(status === 'success'){
    return <h1>that's right</h1>
  }
  async function handleSubmit (e){
    e.preventDefault();
    setStatus('submitting');
    try{
      await submitForm(answer);
      setStatus ('success');
    }catch(err){
      setStatus('typing ');
      setError(err);
    }
    function handleTextareaChange(e){
      setAnswer(e.target.value);

    }
    return (
      <>
         <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
      </>
    );
  }
  function  submitForm(answer){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        let shouldError  = answer.toLowerCase() !== 'lima'
        if(shouldError){
          reject(new Error('good guess but a wrong answer. try again! '));
        }else{
          resolve();
        }
      },1500);
    })
  }
}


