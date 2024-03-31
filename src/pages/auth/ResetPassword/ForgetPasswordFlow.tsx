import React, {useState} from 'react'
import ResetPassword from './ResetPassword'
import ForgetPassword from './ForgetPassword'

function ForgetPasswordFlow() {
    const [stage, setStage] = useState('forget')
    
  return (
    <div>
      {stage === 'forget' && <ForgetPassword setStage={setStage}/>}
      {stage === 'reset' && <ResetPassword/>}
    </div>
  )
}

export default ForgetPasswordFlow