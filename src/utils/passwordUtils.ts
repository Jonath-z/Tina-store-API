import bcrypt from 'bcrypt';


export const hash = (password: string):string => {
   return  bcrypt.
        hashSync(
            password,
            bcrypt.genSaltSync(10)
        );
}


export const compare = (
    password: string,
    hashedPassword:string
):boolean => {
    return bcrypt.
        compareSync(
            password,
            hashedPassword
        );
}