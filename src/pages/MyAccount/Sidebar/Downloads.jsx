import React, { useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const availableDownloads = [
    { id: 1, title: "ReactJS Guide", type: "PDF", size: "1.2 MB" },
    { id: 2, title: "JavaScript Essentials", type: "ZIP", size: "2.5 MB" },
    { id: 3, title: "Data Structures Notes", type: "PDF", size: "1.8 MB" },
    { id: 4, title: "Python Basics", type: "DOC", size: "900 KB" },
  ];

  const downloadedResources = [
    { id: 1, title: "HTML and CSS Basics", downloadedOn: "Jan 5, 2025" },
    { id: 2, title: "Node.js Cheat Sheet", downloadedOn: "Dec 22, 2024" },
  ];

  const filteredDownloads = availableDownloads.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>
        Downloads Section
      </Typography>
      <Typography variant="body1" gutterBottom>
        Access your downloadable resources here.
      </Typography>

      {/* Search Bar */}
      <Box marginY={3}>
        <TextField
          label="Search Downloads"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Available Downloads */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Available Downloads
        </Typography>
        {filteredDownloads.length > 0 ? (
          <List>
            {filteredDownloads.map((resource) => (
              <ListItem key={resource.id}>
                <Card style={{ width: "100%" }}>
                  <CardContent>
                    <Typography variant="h6">{resource.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Type: {resource.type} | Size: {resource.size}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: "10px" }}
                    >
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2">No resources found.</Typography>
        )}
      </Box>

      <Divider style={{ margin: "20px 0" }} />

      {/* Downloaded Resources */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Previously Downloaded
        </Typography>
        {downloadedResources.length > 0 ? (
          <List>
            {downloadedResources.map((resource) => (
              <ListItem key={resource.id}>
                <ListItemText
                  primary={resource.title}
                  secondary={`Downloaded On: ${resource.downloadedOn}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography variant="body2">No previous downloads.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Downloads;

