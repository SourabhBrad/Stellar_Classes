// import React from 'react';
// import { Typography, Box, Grid, Card, CardContent, Button, TextField } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


// const TeacherMode = () => {
//   return (
//     <Box sx={{ padding: '20px' }}>
//       {/* Welcome Header */}
//       <Typography variant="h4" gutterBottom align="center">
//         Welcome to Teacher Mode
//       </Typography>
//       <Typography variant="body1" align="center" gutterBottom>
//         Manage your courses, upload study materials, and track student progress.
//       </Typography>

//       {/* Carousel Section */}
//       <Box sx={{ marginY: 4 }}>
//         <Typography variant="h5" gutterBottom align="center">
//           Recently Uploaded Courses
//         </Typography>
//         <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
//           <div>
//             <img src="https://via.placeholder.com/800x400?text=Course+1" alt="Course 1" />
//             <p className="legend">Course 1: Introduction to React</p>
//           </div>
//           <div>
//             <img src="https://via.placeholder.com/800x400?text=Course+2" alt="Course 2" />
//             <p className="legend">Course 2: Advanced JavaScript</p>
//           </div>
//           <div>
//             <img src="https://via.placeholder.com/800x400?text=Course+3" alt="Course 3" />
//             <p className="legend">Course 3: Data Structures</p>
//           </div>
//         </Carousel>
//       </Box>

//       {/* Analytics Section */}
//       <Box sx={{ marginY: 4 }}>
//         <Typography variant="h5" gutterBottom align="center">
//           Analytics Overview
//         </Typography>
//         <Grid container spacing={3}>
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ backgroundColor: '#f5f5f5' }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   Total Students Enrolled
//                 </Typography>
//                 <Typography variant="h4" color="primary">
//                   1,245
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ backgroundColor: '#f5f5f5' }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   Courses Created
//                 </Typography>
//                 <Typography variant="h4" color="secondary">
//                   35
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ backgroundColor: '#f5f5f5' }}>
//               <CardContent>
//                 <Typography variant="h6" gutterBottom>
//                   Study Materials Uploaded
//                 </Typography>
//                 <Typography variant="h4" color="error">
//                   220
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Upload Study Materials Section */}
//       <Box sx={{ marginY: 4 }}>
//         <Typography variant="h5" gutterBottom align="center">
//           Upload Study Materials
//         </Typography>
//         <Box
//           component="form"
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 2,
//             maxWidth: 600,
//             margin: '0 auto',
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField label="Course Title" fullWidth required />
//           <TextField
//             label="Description"
//             fullWidth
//             required
//             multiline
//             rows={3}
//           />
//           <Button variant="contained" component="label">
//             Upload File
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" color="primary">
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default TeacherMode;










import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Button, TextField } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TeacherMode.css';

const TeacherMode = () => {
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
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
          <div>
            <img src="https://via.placeholder.com/800x400?text=Course+1" alt="Course 1" />
            <p className="legend">Course 1: Introduction to React</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400?text=Course+2" alt="Course 2" />
            <p className="legend">Course 2: Advanced JavaScript</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400?text=Course+3" alt="Course 3" />
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
        >
          <TextField label="Course Title" fullWidth required />
          <TextField
            label="Description"
            fullWidth
            required
            multiline
            rows={3}
          />
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden />
          </Button>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherMode;
