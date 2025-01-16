
import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./TeacherMode.css";

import axios from "axios";

import pic1 from "./ReactJS.png";
import pic2 from "./JavaScript.png";
import pic3 from "./Data Structures.jpg";

const TeacherMode = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title || !description) {
      setUploadMessage("Please fill all the fields and upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/courses/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadMessage("Upload successfully!");
      console.log(response.data);
    } catch (error) {
      setUploadMessage("Error uploading file. Please try again.");
      console.error(error);
    }
  };

  return (
    <Box className="teacher-mode-container">
      {/* Welcome Header */}
      <Typography variant="h4" gutterBottom align="center">
        Welcome to Teacher Mode
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Manage your courses, upload study materials, and track student progress.
      </Typography>

      {/* Carousel Section */}
      <Box className="carousel-section">
        <Typography variant="h5" gutterBottom align="center">
          Recently Uploaded Courses
        </Typography>
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
          <div>
            <img src={pic1} alt="Course 1" />
            <p className="legend">Course 1: Introduction to React</p>
          </div>
          <div>
            <img src={pic2} alt="Course 2" />
            <p className="legend">Course 2: Advanced JavaScript</p>
          </div>
          <div>
            <img src={pic3} alt="Course 3" />
            <p className="legend">Course 3: Data Structures</p>
          </div>
        </Carousel>
      </Box>

      {/* Analytics Section */}
      <Box className="analytics-section">
        <Typography variant="h5" gutterBottom align="center">
          Analytics Overview
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className="analytics-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Total Students Enrolled
                </Typography>
                <Typography variant="h4" color="primary">
                  1,245
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="analytics-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Courses Created
                </Typography>
                <Typography variant="h4" color="secondary">
                  35
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="analytics-card">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Study Materials Uploaded
                </Typography>
                <Typography variant="h4" color="error">
                  220
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Upload Study Materials Section */}
      <Box className="upload-section">
        <Typography variant="h5" gutterBottom align="center">
          Upload Study Materials
        </Typography>
        <Box
          component="form"
          className="upload-form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Course Title"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            required
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
        {uploadMessage && (
          <Typography variant="body2" color="textSecondary" align="center">
            {uploadMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TeacherMode;
