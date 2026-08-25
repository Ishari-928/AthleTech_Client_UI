import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  styled,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
  InsertDriveFile as FileIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const MAX_FILE_SIZE_MB = 5;

const UploadContainer = styled(Paper)(({ theme }) => ({
  border: '1px solid #e0e0e0',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4, 2),
  textAlign: 'center',
  cursor: 'pointer',
  width: '100%',
  maxWidth: 800,
  minHeight: 150,
  backgroundColor: '#fafafa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'border-color 0.2s ease-in-out',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1),
  },
}));

const HiddenInput = styled('input')({
  display: 'none',
});

const FileUpload = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]; 
      processFile(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]; // only one file
      processFile(file);
    }
  };

  const processFile = (file) => {
    const validExtensions = ['application/pdf', 'image/jpeg'];

    const isValidType = validExtensions.includes(file.type);
    const isValidSize = file.size <= MAX_FILE_SIZE_MB * 1024 * 1024;

    if (!isValidType) {
      alert(`${file.name} is not a supported file type (.jpeg or .pdf).`);
      return;
    } else if (!isValidSize) {
      alert(`${file.name} exceeds the 5MB size limit.`);
      return;
    }

    setSelectedFile(file);
    onFilesSelected?.([file]); 
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFilesSelected?.([]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <UploadContainer
        elevation={0}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        sx={{
          borderColor: isDragging ? 'primary.main' : '#e0e0e0',
          borderStyle: isDragging ? 'dashed' : 'solid',
        }}
      >
        <CloudUploadIcon
          sx={{
            fontSize: { xs: 26, sm: 36 },
            color: 'primary.main',
            mb: 1,
          }}
        />
        <Typography variant="h7" component="div" gutterBottom>
          Click or drag file to this area to upload
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Only .jpeg and .pdf files are supported. Max file size: 5MB.
        </Typography>
        <HiddenInput
          ref={fileInputRef}
          type="file"
          accept=".jpeg, .pdf"
          onChange={handleFileChange}
        />
      </UploadContainer>

      {selectedFile && (
        <Box mt={2} width="100%">
          <List dense>
            <ListItem
              secondaryAction={
                <IconButton edge="end" onClick={handleRemoveFile}>
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <FileIcon />
              </ListItemIcon>
              <ListItemText
                primary={selectedFile.name}
                secondary={`${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`}
              />
            </ListItem>
          </List>
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
