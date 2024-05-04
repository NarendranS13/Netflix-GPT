export const checkValidData = (email,password,name=null) => {
    // /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-zÀ-ÿ'-]+$/.test(name);
    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    if (name !== null) {
        if (!isNameValid) return "Enter the Correct name";
    }

    return null;
};