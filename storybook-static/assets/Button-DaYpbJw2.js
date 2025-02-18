import{j as a}from"./jsx-runtime-D_zvdyIk.js";const s=({primary:e=!1,dark:t=!1,label:o,...n})=>{const r=e?"storybook-button--primary":t?"storybook-button--secondary--dark":"storybook-button--secondary--light";return a.jsx("button",{type:"button",className:["storybook-button",r].join(" "),...n,children:o})};s.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"primary or secondary button type: indicates button style",defaultValue:{value:"false",computed:!1}},dark:{required:!1,tsType:{name:"boolean"},description:"What background color to use (only if button type is secondary)",defaultValue:{value:"false",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};export{s as B};
