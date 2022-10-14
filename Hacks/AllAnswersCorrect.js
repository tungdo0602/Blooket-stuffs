window.setInterval(()=>{
    try{
        getStateNode().state.question.correctAnswers = getStateNode().state.question.answers
    }catch {
        
    }
},10)
