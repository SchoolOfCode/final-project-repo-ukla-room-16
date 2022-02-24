it(`we want the full name of the user to be returned when onlogin is called`, () =>{
    //Arrange
    const expected = "Crime and Punishment"

    //Act   
    const actual = onLogin();
    
    //Assert
    expect(actual).toEqual(expected)
    
    });