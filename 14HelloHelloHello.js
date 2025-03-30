function myreusableFunctionl() {
    console.log("hello");
    }
    myreusableFunctionl;
    myreusableFunctionl;
    myreusableFunctionl; //should be hello hello hello
    
    function myreusableFunctionl() {
      console.log("there");
    } //funções podem ser reutilizadas
    myreusableFunctionl; //should be hello hello there
    