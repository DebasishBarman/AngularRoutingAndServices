export class InternModel {
    
    constructor(
        public email:string,
        public username:string,
        public mobile:number|string,
        public frontend:boolean|string,
        public backend:boolean|string,
        public mobiledev:boolean|string,
        public mentor:string,
        public preference:string
    ){}
}
