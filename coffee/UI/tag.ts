/*
Tag-Field
	tag-name
	CSS
	Text
	classname
	html-function
	css-control -> function to control CSS of the field based on parameters


*/


export default class tag{
        name: string
        CSS: string
        text: string
        classNames: string[]
        html(){
                return `
                        <{name} {classNames}{CSS}>{text}</{name}>
                `
                
        }
        cssControl(){}

	constructor(name : string){
        this.name = name
        }
}