import React, { useRef, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import "./Palette.css";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';
import StyleIcon from '@mui/icons-material/Style';
import TextureIcon from '@mui/icons-material/Texture';
import PolylineIcon from '@mui/icons-material/Polyline';
import { grey } from '@mui/material/colors';

let doables = {
	"upload": <UploadFileIcon />,
	"remove bg": <WallpaperIcon />,
	"enhance": <CameraEnhanceIcon />,
	"effects": <AutoFixHighIcon />,
	"adjust": <PhotoSizeSelectLargeIcon />,
	"style trf": <StyleIcon />,
	"change texture": <TextureIcon />,
	"vectorize": <PolylineIcon />,
};

const ActionButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
      backgroundColor: grey[700],
    },
  }));

export const Palette = (props) => {

    // imageModal
    const [preview, setPreview] = useState()
    const [addAnotherImg, setAddAnotherImg] = useState('none')
    const [display, setDisplay] = useState('none')
    const [selectedImage, setSelectedImage] = useState(
        {
            "imageFile": null,
            "width": null,
            "height": null,
            "size": null
        }
    )

    const [action, setAction] = useState("Upload")

    const fileInputRef = useRef();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const addImageFromFiles = () => {
        fileInputRef.current.click();
    };

    const addImageURL = () => {
        setDisplay('block')

    }

    const handleBtnClick = (title) => {
       console.log(title)
    //    setAction(event.path[4].children[1].children[1].innerHTML)
    }

    const handleChange = (event) => {
       console.log(event)
       const file = event.target.files[0];
       if (file && file.type.substr(0, 5) === "image") {
            setSelectedImage({
                "imageFile": file
            })
            console.log(file)
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onloadend = (e) => {
                setPreview(reader.result)
                var image = new Image();
                image.src = e.target.result;
                image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    setSelectedImage(
                        {
                            "width": width + "px",
                            "height": height + "px",
                            "size": (file.size / 1000000) + "MB"
                    })
            }};
        }
        setAnchorEl(null);
        setAddAnotherImg("block")
    }

    const handleAction = () => {

    }

  return (
    <React.Fragment>
        <CssBaseline />
        <Box className='mainPalette'>
            <Box className='paletteDrawer'>
                <List>
                    {Object.entries(doables).map(([title, icon]) => (
                        <ListItem key={title} disablePadding sx={{ display: "block" }}><span className='divider'>``</span>
                            <ListItemButton
                                sx={{
                                    width: 25,
                                    height: 50,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    px: 4, 
                                    color: '#646d86',
                                    "&:hover": {
                                        color: '#ffffff'
                                    }
                                }}
                            >
                                <ListItemIcon
                                    onClick={title => handleBtnClick(title)}
                                    sx={{
                                        minWidth: 0,
                                        color: '#646d86',
                                        "&:hover": {
                                            color: '#ffffff'
                                        }
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                                <p className='iconTag'>{title}</p>
                            </ListItemButton>
                        </ListItem>
                    ))} 
                </List>
            </Box>
            <Box className='paletteContainer'>
                <div className='containerHeader'>
                    <h6 style={{fontSize: '0.8rem', fontWeight: '800', width: '95%', margin: 'auto', textAlign: 'start'}}>{action} &nbsp;&nbsp; | &nbsp;&nbsp; W: <span>{selectedImage.width}</span> &nbsp; H: <span>{selectedImage.height}</span> &nbsp;&nbsp; | &nbsp;&nbsp; Image Size: <span>{selectedImage.size}</span> </h6>
                </div>
                <Box sx={{ position: 'relative', bgcolor: '#303544', height: '92%', padding: '3% 0' }}>
                    <Box className='imageUploadModal'>

                        <form id="selectImgForm">
                            <input 
                                style={{display: 'none'}}
                                ref={fileInputRef}
                                type='file'
                                accept="image/*"
                                onChange={handleChange}
                            />
                            <input 
                                className="textInputField"
                                style={{display: display}}
                                placeholder="Enter image url..."
                            />
                        </form>

                        {
                            preview 
                            ? <Box
                                className='imageModal' 
                                component='img'
                                src={preview}
                                alt='selectedImg'
                            />
                            : 
                            <>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                <AddPhotoAlternateIcon 
                                    className='addPhoto'
                                    color='action'
                                    sx={{fontSize: 120}}
                                />
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                <MenuItem onClick={addImageFromFiles}>add image from files</MenuItem>
                                <MenuItem onClick={addImageURL}>add image url</MenuItem>
                                </Menu>
                            </>
                        }
                    </Box>
                    <IconButton onClick={() => {
                        document.getElementById("selectImgForm").reset();
                        setPreview();
                        setAddAnotherImg('none');
                        setSelectedImage(
                            {
                                "imageFile": null,
                                "width": null,
                                "height": null,
                                "size": null
                            }
                        )
                    }} style={{width: '10%', margin: 'auto', display: addAnotherImg, color: '#ffffff'}}>
                        <AddPhotoAlternateIcon />
                    </IconButton> 
                    <div className='btnRack'>
                        <ActionButton 
                            variant="contained" 
                            endIcon={<UploadFileIcon color='action'/>}
                            onClick={handleAction}>
                        upload
                        </ActionButton>
                    </div>
                </Box>
            </Box>
        </Box>
  </React.Fragment>
  )
}



