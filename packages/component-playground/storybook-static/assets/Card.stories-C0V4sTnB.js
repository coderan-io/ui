import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as r,B as o,a as s}from"./Card-BaWOGCjS.js";import"./iframe-B-aL7s0A.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Example/Card",component:r,args:{children:"Content"},parameters:{layout:"centered"},argTypes:{}},n={render:a=>e.jsxs(r,{...a,children:[e.jsx(r.Header,{children:"Header"}),e.jsx(r.Content,{children:"Content"})]})},t={render:a=>e.jsxs(r,{...a,children:[e.jsx(r.Header,{actions:e.jsx(o,{color:"secondary",children:"x"}),children:"Header"}),e.jsx(r.Content,{children:"Content"})]})},d={render:a=>e.jsxs(r,{...a,children:[e.jsx(r.Header,{actions:e.jsx(s,{color:"red",children:"New"}),children:"Header"}),e.jsx(r.Content,{children:"Content"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
            <Card.Header>Header</Card.Header>
            <Card.Content>
                Content
            </Card.Content>
        </Card>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
            <Card.Header actions={<Button color="secondary">
                        x
                    </Button>}>
                Header
            </Card.Header>
            <Card.Content>Content</Card.Content>
        </Card>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card {...args}>
            <Card.Header actions={<Badge color="red">New</Badge>}>
                Header
            </Card.Header>
            <Card.Content>Content</Card.Content>
        </Card>
}`,...d.parameters?.docs?.source}}};const p=["With_Header","With_Header_Actions","With_Header_Badge"];export{n as With_Header,t as With_Header_Actions,d as With_Header_Badge,p as __namedExportsOrder,m as default};
