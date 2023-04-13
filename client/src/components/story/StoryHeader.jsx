import {
    Box,
    Button,
    Divider,
    InputBase,
    TextField,
    Typography,
    styled
} from '@mui/material'
import React, {useContext, useEffect, useState} from 'react'
import {AccountContext} from '../../context/AccountProvider';
import {AttachFile} from '@mui/icons-material';
import { uploadFile, uploadStory } from '../../service/api';


const Component = styled(Box)`
height:10vh;
`;
const ClipIcon = styled(AttachFile)`
transform:rotate(40deg);
`

const Image = styled("img")({height: 40, width: 40, borderRadius: "50%"});
const StoryHeader = () => {
    const [value, setValue] = useState('');
    const [file, setFile] = useState('');
    const [caption, setCaption] = useState('');
    const [image,setImage]=useState('');
    const {account} = useContext(AccountContext);
    console.log(account);
  
    useEffect(()=>{
        const getImage=async ()=>{
          if(file){
            const data=new FormData();
            data.append("name",file.name);
            data.append("file",file);
            let response=await uploadFile(data);
            console.log(response);
            setImage(response.data);
          }
        }
        getImage();
      },[file])
    const sendDetails=async ()=>{
        console.log('clicked');
      await uploadStory({userId:account.sub,name:account.name,text:image,caption})
    }
    
    return (
        <Component sx={
            {
                display: 'flex',
                padding: '10px',
                alignItems: 'center'
            }
        }>
            <Image src={
                    account.picture
                }
                alt="dp"/>
            <Typography sx={
                {
                    fontSize: '15px',
                    marginLeft: '5px'
                }
            }>My Status</Typography>
            <label htmlFor='fileData'>
                <ClipIcon/>
            </label>


            <input type="file" id="fileData"
                style={
                    {display: 'none'}
                }
                onChange={(e)=>{
                    console.log('hello');
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
                }}
                />

            <TextField label="Caption" type="text"
                style={
                    {
                        color: "white",
                        backgroundColor: "white"
                    }
                }
                onChange={
                    (e) => {
                        setCaption(e.target.value)
                    }
                }/>
            <Button variant="outlined" onClick={sendDetails}>Outlined</Button>

        </Component>
    )
}

export default StoryHeader
