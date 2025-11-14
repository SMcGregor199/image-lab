import {Layout, Image, Flex} from "antd"
import styled from "@emotion/styled"
const {Content} = Layout;
import {dImage as imageSrc} from "./defaultImage";
const Form = styled.form`
  padding: 20px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  fieldset{
    display:flex;
    flex-direction: column;
    gap: 2rem;
  }
`
export default function App(){
  const handleSubmit = (formData) => {
    console.log(formData.get('image').name);
  };
  return(
   
   <Layout>
   <Content id="main" style={{height:"auto"}}>
    <Flex justify="space-evenly" style={{height:"50vh"}} gap={"1rem"}>
    <div style={{height:"inherit", width:"min-content"}}>
    <h1 id="form-title">Image Downloader</h1>
    <Form aria-labelledby="form-title" action={handleSubmit} style={{height:"100%"}}>
      <fieldset>
        {/* The legend is used to describe (or title) the fieldset it is in*/}
        <legend>Upload Image</legend>
        {/* 
          You can think of the label as telling the user what to do with the input 
          The htmlFor attribute is used to connect the label to the input's id attribute
          The name attribute is used to identify the input
          The accept attribute is used to specify the type of file that can be uploaded
        */}
        <label htmlFor="image">Choose an image file to upload</label>
        <input type="file" id="image" name="image" accept="image/*" />
      </fieldset>
    {/* 
        The button is used to submit the form. 
        type="submit" is used to signal to the browser that this button is connected to the form 
    */}
      <button type="submit">Upload</button>
    </Form>
    </div>
    <Image src={imageSrc} style={{height:"100%"}}preview={false}/>
    </Flex>
    </Content>
    </Layout>
   
  )
}