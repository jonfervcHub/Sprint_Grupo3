const validateUsername = (stringToValidate) => {
    /*
    Function: validateUsername()
    Author: jhonjgonzalezt@gmail.com
    Description: Not case sensitive, this function validates that a username meets the following conditions:
    1. It must be between 6 and 30 characters.
    2. It can only contain characters only letters from A to Z, they can be both uppercase and lowercase.
    */
    const regEx = /^[a-z]{6,30}$/gi
    if (regEx.test(stringToValidate)) {
        return true;
    } else {
        return false;
    }
};

const validatePassword = (stringToValidate) => {
    /*
    Function: validateUsername()
    Author: jhonjgonzalezt@gmail.com
    Description: Not case sensitive, this function validates that a username meets the following conditions:
    1. Must be 6 or more characters.
    2. It can only contain alphanumeric characters. That is, letters from A to Z and numbers from 0 to 9. 
    */
    const regEx = /^[a-z0-1]{6,}$/gi
    if (regEx.test(stringToValidate)) {
        return true;
    } else {
        return false;
    }
};